import { addToCart } from "@/utils/api";
import { useMutation } from "@tanstack/react-query";

type useAddToCartProps = {
  itemId: string;
  quantity: number;
  size: string;
};

export const useAddToCart = () => {
  return useMutation({
    mutationFn: ({ itemId, quantity, size }: useAddToCartProps) =>
      addToCart(itemId, quantity, size),
  });
};
