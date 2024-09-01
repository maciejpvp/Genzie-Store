// import { useParams } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useCategory } from "../hooks/useCategory";
import { Product } from "@/utils/types";
import { ProductItem } from "@/components/ProductItem";
import { ProductFilters } from "@/components/ProductFilters";

export const ProductsList = () => {
  const { query } = useParams();
  const { data, error, isLoading } = useCategory({
    query: query ? query : "",
  });

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>An error occurred: {error.message}</p>;

  const items: Product[] = data?.data.items ?? [];

  return (
    <div className="flex flex-row justify-center">
      <ProductFilters />
      <ul className="flex justify-center gap-10 flex-row flex-wrap">
        {items?.map((item) => (
          <ProductItem item={item} />
        ))}
      </ul>
    </div>
  );
};
