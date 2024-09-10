import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { useSignup } from "@/hooks/useSignup";
import { AxiosError } from "axios";
import toast from "react-hot-toast";
import InputField from "./FormInput";

export type FormData = {
  name: string;
  email: string;
  password: string;
  passwordConfirm: string;
};

const Signup: React.FC = () => {
  const { mutate, isPending } = useSignup();
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    setError,
  } = useForm<FormData>({
    mode: "onChange",
  });

  const onSubmit: SubmitHandler<FormData> = (data) => {
    mutate(
      {
        name: data.name,
        email: data.email,
        password: data.password,
      },
      {
        onError: (error) => {
          if (error instanceof AxiosError) {
            const code = error.response?.data.code.split("-")[0];
            const field = error.response?.data.code.split("-")[1];
            if (code === "019") {
              setError(field, {
                type: "manual",
                message: `${
                  field.charAt(0).toUpperCase() + field.slice(1).toLowerCase()
                } already in use`,
              });
            } else {
              toast.error("Something went wrong");
            }
          } else {
            toast.error("Something went wrong");
          }
        },
      }
    );
  };

  console.log(isPending);

  const password = watch("password");

  return (
    <div className="h-max lg:h-[35dvh]">
      <Card className="max-w-md mx-auto">
        <CardHeader>
          <CardTitle>Sign Up</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="space-y-4">
              <InputField
                label="Username"
                id="name"
                register={register}
                errors={errors}
                disabled={isPending}
                validation={{ required: "Username is required" }}
              />
              <InputField
                label="Email"
                id="email"
                register={register}
                errors={errors}
                disabled={isPending}
                validation={{
                  required: "Email is required",
                  pattern: {
                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                    message: "Please enter a valid email",
                  },
                }}
              />
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
            <Button type="submit" className="mt-4 w-full" disabled={isPending}>
              Sign Up
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default Signup;
