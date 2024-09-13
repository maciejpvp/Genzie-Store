import { verifyEmail } from "@/utils/api";
import { useMutation } from "@tanstack/react-query";

type useVerifyEmailProps = {
  email: string;
  code: string;
};

export const useVerifyEmail = () => {
  return useMutation({
    mutationFn: ({ email, code }: useVerifyEmailProps) =>
      verifyEmail(email, code),
  });
};
