import { ItemElement } from "@/utils/types";
import { useState } from "react";
import { Button } from "../ui/button";
import { ImBin } from "react-icons/im";

import { useIncCartItemQuantity } from "@/hooks/useIncCartItemQuantity";
import { useDecCartItemQuantity } from "@/hooks/useDecCartItemQuantity";
import { useDeleteFromCart } from "@/hooks/useDeleteFromCart";
import { useQueryClient } from "@tanstack/react-query";

export const CartItem = ({
  item: { name, price, images },
  size,
  quantity,
  _id,
}: ItemElement) => {
  const queryClient = useQueryClient();
  const { mutate: mutateInc } = useIncCartItemQuantity();
  const { mutate: mutateDec } = useDecCartItemQuantity();
  const { mutate: mutateDelete } = useDeleteFromCart();
  const [localQuantity, setLocalQuantity] = useState<number>(quantity);

  const handleIncQuantity = () => {
    setLocalQuantity((prev) => prev + 1);
    mutateInc(
      {
        id: _id,
      },
      {
        onSuccess: () => {
          queryClient.invalidateQueries({ queryKey: ["cart"] });
        },
      }
    );
  };

  const handleDecQuantity = () => {
    setLocalQuantity((prev) => prev - 1);
    mutateDec(
      {
        id: _id,
      },
      {
        onSuccess: () => {
          queryClient.invalidateQueries({ queryKey: ["cart"] });
        },
      }
    );
  };

  const handleDelete = () => {
    mutateDelete(
      {
        id: _id,
      },
      {
        onSuccess: () => {
          queryClient.invalidateQueries({ queryKey: ["cart"] });
        },
      }
    );
  };

  return (
    <>
      <div className="bg-gray-50 flex flex-row h-44 w-full gap-5 rounded-lg p-3 shadow-lg shadow-gray-400">
        <img
          crossOrigin="anonymous"
          src={`http://localhost:8000/images/${images[0]}`}
          alt={name}
          className="rounded-sm"
        />
        <div className="w-full">
          <div>
            <h1 className="font-bold text-lg">{name}</h1>
          </div>

          <p>Rozmiar {size}</p>
          <div className="flex flex-row items-center">
            <span>Ilość</span>
            <Button variant="link" onClick={handleDecQuantity}>
              {"<"}
            </Button>
            <span>{localQuantity}</span>
            <Button variant="link" onClick={handleIncQuantity}>
              {">"}
            </Button>
          </div>
          <Button
            onClick={handleDelete}
            variant="ghost"
            className="text-lg ml-[-15px] mt-[-10px] hover:bg-gray-50 hover:text-red-900 duration-300"
          >
            <ImBin />
          </Button>
        </div>
        <h1 className="text-end font-bold">
          <span>{price * quantity}zł</span>
        </h1>
      </div>
    </>
  );
};
