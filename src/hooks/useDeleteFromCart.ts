import { deleteFromCart } from "@/utils/api";
import { useMutation } from "@tanstack/react-query";

type useDeleteFromCartProps = {
  id: string;
};

export const useDeleteFromCart = () => {
  return useMutation({
    mutationFn: ({ id }: useDeleteFromCartProps) => deleteFromCart(id),
  });
};
