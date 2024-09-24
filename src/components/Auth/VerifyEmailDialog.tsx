import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { OtpInput } from "./OtpInput";
// import { Button } from "../ui/button";
import { useEffect, useState } from "react";
import { useVerifyEmail } from "@/hooks/useVerifyEmail";
import { useResentEmailVerify } from "../../hooks/useResentEmailVerify";
import { useNavigate } from "react-router-dom";

type VerifyEmailDialogProps = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  email: string;
};

export const VerifyEmailDialog = ({
  open,
  setOpen,
  email,
}: VerifyEmailDialogProps) => {
  const navigate = useNavigate();
  const { mutate: mutateVerifyEmail } = useVerifyEmail();
  const { mutate: mutateResentEmail } = useResentEmailVerify();
  const [otp, setOtp] = useState<string>("");
  const [timeLeft, setTimeLeft] = useState<number>(0);

  const handleResent = () => {
    setTimeLeft(60);
    mutateResentEmail(
      {
        email,
      },
      {
        onSuccess: (data) => {
          console.log(data);
        },
      }
    );
  };

  useEffect(() => {
    if (otp.length === 6) {
      mutateVerifyEmail(
        {
          email,
          code: otp,
        },
        {
          onError: (error) => {
            console.log(error);
          },
          onSuccess: () => {
            setOpen(false);
            navigate("/auth/login");
          },
        }
      );
    }
    //eslint-disable-next-line
  }, [otp]);

  useEffect(() => {
    let timer: ReturnType<typeof setInterval>;
    if (timeLeft) {
      timer = setInterval(() => {
        setTimeLeft((prev) => {
          if (prev <= 1) {
            clearInterval(timer);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }

    return () => clearInterval(timer);
  }, [timeLeft]);

  return (
    <>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="flex justify-center">
              Check your Inbox
            </DialogTitle>
            <DialogDescription className="flex justify-center">
              Enter verification code we sent you
            </DialogDescription>
          </DialogHeader>
          <div className="flex justify-center my-5">
            <OtpInput value={otp} setValue={setOtp} />
          </div>
          {/* <Button onClick={handleActiveAccount} disabled={isPendingVerifyEmail}>
            Active
          </Button> */}
          <p className="text-center">
            Have not received code?{" "}
            <span
              className={
                timeLeft
                  ? "text-gray-400"
                  : "text-blue-500 hover:underline cursor-pointer"
              }
              onClick={!timeLeft ? handleResent : () => {}}
            >
              Resent
            </span>
            {timeLeft !== 0 && (
              <span className="text-gray-400"> ({timeLeft}s)</span>
            )}
          </p>
        </DialogContent>
      </Dialog>
    </>
  );
};
