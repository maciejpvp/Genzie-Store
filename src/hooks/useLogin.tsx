import { login } from "@/utils/api";
import { useMutation } from "@tanstack/react-query";

type useLoginProps = {
  email: string;
  password: string;
};

export const useLogin = () => {
  return useMutation({
    mutationFn: ({ email, password }: useLoginProps) => login(email, password),
  });
};
