import { signup } from "@/utils/api";
import { useMutation } from "@tanstack/react-query";

type useSignupProps = {
  name: string;
  email: string;
  password: string;
};

export const useSignup = () => {
  return useMutation({
    mutationFn: ({ name, email, password }: useSignupProps) =>
      signup(name, email, password),
  });
};
