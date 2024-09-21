import { getCart } from "@/utils/api";
import { useQuery } from "@tanstack/react-query";

export const useGetCart = () => {
  return useQuery({
    queryKey: ["cart"],
    queryFn: () => getCart(),
  });
};
