// import { useParams } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useCategory } from "../hooks/useCategory";
import { Product } from "@/utils/types";
import { ProductItem } from "@/components/ProductItem";

export const ProductsList = () => {
  const { query } = useParams();
  const { data, error, isLoading } = useCategory({
    query: query ? query : "",
  });

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>An error occurred: {error.message}</p>;

  const items: Product[] = data?.data.items ?? [];

  console.log(items);

  return (
    <ul>
      {items?.map((item) => (
        <ProductItem item={item} />
      ))}
    </ul>
  );
};
