import { resentEmailVerifyCode } from "@/utils/api";
import { useMutation } from "@tanstack/react-query";

type useResentEmailVerifyProps = {
  email: string;
};

export const useResentEmailVerify = () => {
  return useMutation({
    mutationFn: ({ email }: useResentEmailVerifyProps) =>
      resentEmailVerifyCode(email),
  });
};
