import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "./ui/button";
import InputField from "./Auth/FormInput";
import { SubmitHandler, useForm } from "react-hook-form";
import { FormDataType } from "./Auth/Signup";
import { useEffect, useState } from "react";
import { Navbar2 } from "./Navbar/Navbar2";
import { useResetPassword } from "./useResetPassword";
import { useParams } from "react-router-dom";
import toast from "react-hot-toast";
import { ResetPasswordSuccessModal } from "./ResetPasswordSuccessModal";

export const ResetPassword = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setFocus,
    watch,
  } = useForm<FormDataType>({
    mode: "onSubmit",
  });

  const { mutate: mutateResetPassword, isPending } = useResetPassword();
  const [success, setSuccess] = useState<boolean>(false);

  const { token } = useParams();
  const isDisabled = !!Object.keys(errors).length || isPending;

  useEffect(() => {
    setTimeout(() => {
      setFocus("email");
    }, 0);
    //eslint-disable-next-line
  }, []);

  const onSubmit: SubmitHandler<FormDataType> = (data) => {
    if (!token) return;
    mutateResetPassword(
      {
        token,
        password: data.password,
      },
      {
        onSuccess: () => {
          setSuccess(true);
        },
        onError: () => {
          toast.error("Something went wrong!");
        },
      }
    );
  };

  const password = watch("password");

  return (
    <>
      {success && (
        <ResetPasswordSuccessModal open={success} setOpen={setSuccess} />
      )}
      <Navbar2 />
      <div className="h-dvh content-center">
        <Card className="max-w-md mx-auto mt-[-35dvh]">
          <CardHeader>
            <CardTitle>Reset Password</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="space-y-4">
                <InputField
                  label="Password"
                  id="password"
                  register={register}
                  errors={errors}
                  disabled={isPending}
                  validation={{
                    required: "Password is required",
                    minLength: {
                      value: 8,
                      message: "Password must be at least 8 characters",
                    },
                  }}
                />
                <InputField
                  label="Password Confirm"
                  id="passwordConfirm"
                  register={register}
                  errors={errors}
                  disabled={isPending}
                  validation={{
                    required: "Please confirm your password",
                    validate: (value: string) =>
                      value === password || "Passwords do not match",
                  }}
                />
              </div>
              <Button
                type="submit"
                className="mt-4 w-full"
                disabled={isDisabled}
              >
                Reset Password
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </>
  );
};
