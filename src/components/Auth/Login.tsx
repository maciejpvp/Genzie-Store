import React, { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { useForm, SubmitHandler } from "react-hook-form";
import InputField from "./FormInput";
import { useLogin } from "@/hooks/useLogin";
import { FormDataType } from "./Signup";
import { AxiosError } from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
// import { DefaultResponseType } from "@/utils/types";

const login = (token: string): void => {
  localStorage.setItem("token", token);
};

export const Login: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
    setFocus,
  } = useForm<FormDataType>({
    mode: "onChange",
  });

  const { mutate, isPending } = useLogin();

  const navigate = useNavigate();

  const isDisabled = !!Object.keys(errors).length || isPending;

  useEffect(() => {
    setTimeout(() => {
      setFocus("email");
    }, 0);
  }, [setFocus]);

  const onSubmit: SubmitHandler<FormDataType> = (data) => {
    mutate(
      {
        email: data.email,
        password: data.password,
      },
      {
        onError: (error) => {
          if (error instanceof AxiosError) {
            const code = error.response?.data.code.split("-")[0];
            console.log(code);
            if (code === "006") {
              setError("password", {
                type: "manual",
                message: "Password is invalid",
              });
            }
          }
        },
        onSuccess: (data) => {
          login(data.data.token);
          toast.success("Login succesfully");
          navigate("/list?category=Hoodie");
        },
      }
    );
  };

  return (
    <div className="h-[35dvh]">
      <Card className="max-w-md mx-auto">
        <CardHeader>
          <CardTitle>Log In</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="space-y-4">
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
            </div>
            <Button type="submit" className="mt-4 w-full" disabled={isDisabled}>
              Log In
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};
