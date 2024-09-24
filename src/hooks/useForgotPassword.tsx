import { forgotPassword } from "@/utils/api";
import { useMutation } from "@tanstack/react-query";

type useForgotPasswordProps = {
  email: string;
};

export const useForgotPassword = () => {
  return useMutation({
    mutationFn: ({ email }: useForgotPasswordProps) => forgotPassword(email),
  });
};
