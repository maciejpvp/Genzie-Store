import { Product } from "@/utils/types";
import { useNavigate } from "react-router-dom";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { IoIosHeartEmpty, IoIosHeart } from "react-icons/io";
import { motion } from "framer-motion";
import { MouseEvent } from "react";

type ProductItemProps = {
  item: Product;
};

export const ProductItem = ({ item }: ProductItemProps) => {
  const navigate = useNavigate();
  const [inFav, setInFav] = useState<boolean>(false);

  const handleHeartButton = (event: MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    setInFav((prev) => !prev);
  };

  return (
    <motion.div
      className="w-64 rounded-md p-2 lg:w-1/4"
      whileHover={{ scale: 1.1 }}
      onClick={() => navigate(`/item/${item._id}`)}
    >
      <motion.img
        className="rounded-md"
        crossOrigin="anonymous"
        src={`http://localhost:8000/images/${item.images[0]}`}
      />
      <div className="flex flex-row justify-between py-3">
        <div>
          <h1 className="font-semibold">{item.name}</h1>
          <h2 className="font-bold text-lg">{item.price} zł</h2>
        </div>
        <div className="flex flex-col gap-1">
          <button
            className={cn("text-2xl", inFav ? "text-red-700" : "")}
            onClick={handleHeartButton}
          >
            {inFav ? <IoIosHeart /> : <IoIosHeartEmpty />}
          </button>
        </div>
      </div>
    </motion.div>
  );
};
