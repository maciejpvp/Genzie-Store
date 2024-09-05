import { useLocation } from "react-router-dom";
import { useCategory } from "../hooks/useCategory";
import { Product } from "@/utils/types";
import { ProductItem } from "@/components/ProductListPage/ProductItem";
import { ProductFilters } from "@/components/ProductListPage/ProductFilters";
import { BarLoader } from "react-spinners";
import toast from "react-hot-toast";

export const ProductsList = () => {
  const location = useLocation();
  const queryString = location.search;
  console.log(queryString);
  const { data, error, isLoading } = useCategory({
    query: queryString ? queryString : "",
  });

  if (isLoading)
    return (
      <div className="flex justify-center">
        <BarLoader />
      </div>
    );
  if (error) return <p>An error occurred: {error.message}</p>;

  const items: Product[] = data?.data.items ?? [];
  console.log(items.map((item) => item.stock));

  if (items.length === 0) toast.error("No Products Found!");

  return (
    <div className="flex flex-row justify-center">
      <ProductFilters />
      {items.length === 0 && <div className="w-[85lvw] "></div>}
      {items.length !== 0 && (
        <div className="w-[85lvw]">
          <ul className="flex justify-center gap-10 flex-row flex-wrap w-full">
            {items?.map((item) => (
              <ProductItem key={item._id} item={item} />
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};
