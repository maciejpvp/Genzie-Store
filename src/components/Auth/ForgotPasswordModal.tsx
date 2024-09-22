import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import InputField from "./FormInput";
import { useForm } from "react-hook-form";
import { useEffect } from "react";
import { FormDataType } from "./Signup";
import { Button } from "../ui/button";

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
    mode: "onChange",
  });

  useEffect(() => {
    setTimeout(() => {
      setFocus("email");
    }, 0);
    //eslint-disable-next-line
  }, []);

  const onSubmit = () => {
    console.log("23");
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="flex justify-center">
            Forgot Password
          </DialogTitle>
          <DialogDescription className="flex justify-center">
            Enter your email address
          </DialogDescription>
        </DialogHeader>
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
      </DialogContent>
    </Dialog>
  );
};
