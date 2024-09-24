import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import InputField from "./FormInput";
import { SubmitHandler, useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { FormDataType } from "./Signup";
import { Button } from "../ui/button";
import { useForgotPassword } from "@/hooks/useForgotPassword";
import SuccessAnimation from "../SuccessAnimation";

type ForgotPasswordModalProps = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export const ForgotPasswordModal = ({
  open,
  setOpen,
}: ForgotPasswordModalProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setFocus,
  } = useForm<FormDataType>({
    mode: "onSubmit",
  });

  const { mutate: mutateForgotPassword } = useForgotPassword();
  const [success, setSuccess] = useState<boolean>(false);

  useEffect(() => {
    setTimeout(() => {
      setFocus("email");
    }, 0);
    //eslint-disable-next-line
  }, []);

  const onSubmit: SubmitHandler<FormDataType> = (data) => {
    mutateForgotPassword(
      {
        email: data.email,
      },
      {
        onSuccess: () => {
          setSuccess(true);
        },
      }
    );
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="flex justify-center">
            {!success ? "Forgot Password" : "Check your Inbox"}
          </DialogTitle>
          <DialogDescription className="flex justify-center">
            {!success ? "Enter your email address" : "Email sent successfully"}
          </DialogDescription>
        </DialogHeader>
        {!success ? (
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-col gap-2">
              <InputField
                label="Email"
                id="email"
                register={register}
                errors={errors}
                // disabled={isPending}
                validation={{
                  required: "Email is required",
                  pattern: {
                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                    message: "Please enter a valid email",
                  },
                }}
              />
              <Button>Reset Password</Button>
            </div>
          </form>
        ) : (
          <SuccessAnimation />
        )}
      </DialogContent>
    </Dialog>
  );
};
