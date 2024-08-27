import { useQuery } from "@tanstack/react-query";
import { fetchItemsByCategory } from "../utils/api";
import { ProductResponseType } from "@/utils/types";

interface UseCategoryProps {
  query: string;
}

export const useCategory = ({ query }: UseCategoryProps) => {
  return useQuery<ProductResponseType, Error>({
    queryKey: ["categoryItems", query],
    queryFn: () => fetchItemsByCategory(query),
    enabled: !!query,
    staleTime: 1000 * 60 * 5,
  });
};
