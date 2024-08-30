import { useQuery } from "@tanstack/react-query";
import { fetchItem } from "../utils/api";
import { OneProductResponseType } from "../utils/types";

type useItemDetails = {
  id: string;
};

export const useItemDetails = ({ id }: useItemDetails) => {
  return useQuery<OneProductResponseType, Error>({
    queryKey: ["Item", id],
    queryFn: () => fetchItem(id),
    enabled: !!id,
    staleTime: 1000 * 60 * 5,
  });
};
