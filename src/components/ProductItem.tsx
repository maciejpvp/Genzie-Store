import { Product } from "@/utils/types";

type ProductItemProps = {
  item: Product;
};

export const ProductItem = ({ item }: ProductItemProps) => {
  return (
    <div className="w-64 rounded-md p-2">
      <img
        className="rounded-md"
        crossOrigin="anonymous"
        src={`http://localhost:8000/images/${item.images[0]}`}
      />
      <h1 className="font-semibold">{item.name}</h1>
      <h2>{item.price} zł</h2>
    </div>
  );
};
