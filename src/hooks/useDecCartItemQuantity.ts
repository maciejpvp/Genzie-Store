import { decCartItemQuantity } from "@/utils/api";
import { useMutation } from "@tanstack/react-query";

type useDecCartItemQuantityProps = {
  id: string;
};

export const useDecCartItemQuantity = () => {
  return useMutation({
    mutationFn: ({ id }: useDecCartItemQuantityProps) =>
      decCartItemQuantity(id),
  });
};
