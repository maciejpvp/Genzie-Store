import { resetPassword } from "@/utils/api";
import { useMutation } from "@tanstack/react-query";

type useResetPasswordProps = {
  token: string;
  password: string;
};

export const useResetPassword = () => {
  return useMutation({
    mutationFn: ({ token, password }: useResetPasswordProps) =>
      resetPassword(token, password),
  });
};
