import { incCartItemQuantity } from "@/utils/api";
import { useMutation } from "@tanstack/react-query";

type useIncCartItemQuantityProps = {
  id: string;
};

export const useIncCartItemQuantity = () => {
  return useMutation({
    mutationFn: ({ id }: useIncCartItemQuantityProps) =>
      incCartItemQuantity(id),
  });
};
