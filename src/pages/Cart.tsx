import { CartItem } from "@/components/Cart/CartItem";
import { Navbar2 } from "@/components/Navbar/Navbar2";
import Accordion from "@/components/ui/Accordion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useGetCart } from "@/hooks/useGetCart";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { BeatLoader } from "react-spinners";

export const Cart = () => {
  const { data: cart, isLoading } = useGetCart();
  const [showPromoCode, setShowPromoCode] = useState<boolean>(false);
  const [promoCodeValue, setPromoCodeValue] = useState<string>("");
  const [isCodeValid, setIsCodeValid] = useState<boolean>(false);
  const totalPrice = cart?.data.cart.totalPrice || 0;

  const handleAddPromoCode = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (promoCodeValue === "genzie") {
      setIsCodeValid(true);
    }
  };

  return (
    <>
      <Navbar2 />
      {isLoading && (
        <div className="flex justify-center h-dvh mt-48">
          <BeatLoader />
        </div>
      )}
      {!isLoading && (
        <div className="flex justify-center mt-14">
          <div className="flex flex-wrap gap-6">
            <div className="w-[800px]">
              <h1 className="text-2xl font-bold mb-3">Koszyk</h1>
              {cart?.data.cart.items.length ? (
                <ul className="flex flex-col gap-5">
                  {cart?.data.cart.items.map((item) => (
                    <li>
                      <CartItem
                        {...item}
                        size={item.size}
                        quantity={item.quantity}
                      />
                    </li>
                  ))}
                </ul>
              ) : (
                <h1 className="text-center text-xl font-semibold mt-12">
                  Koszyk jest pusty
                </h1>
              )}
            </div>
            <div className="w-[300px] flex flex-col">
              <h1 className="text-2xl font-bold mb-3">Podsumowanie</h1>
              <Accordion
                title="Masz kod promocyjny?"
                isOpen={showPromoCode}
                className="text-black"
                insideClassName="text-black"
                bold
                setIsOpen={() => {
                  setShowPromoCode((prev) => !prev);
                }}
              >
                <div className="flex flex-col pb-4 px-1">
                  <form
                    className="flex flex-row gap-2 mb-2"
                    onSubmit={handleAddPromoCode}
                  >
                    <Input
                      value={promoCodeValue}
                      onChange={(e) => setPromoCodeValue(e.target.value)}
                    />
                    <Button disabled={!promoCodeValue} variant="outline">
                      Zapisz
                    </Button>
                  </form>
                  {isCodeValid && (
                    <p className="text-green-700">
                      Kod na darmową dostawe aktywowany
                    </p>
                  )}
                </div>
              </Accordion>
              <div className="flex  justify-between text-lg">
                <span>Wartość Produktów</span>
                <span className="font-semibold">{totalPrice} zł</span>
              </div>
              <div className="flex  justify-between">
                <span>Koszt Wysyłki</span>
                <div className="flex flex-row gap-1">
                  <span
                    className={cn(
                      isCodeValid ? "line-through" : "font-semibold"
                    )}
                  >
                    {isCodeValid ? "(20 zł)" : "20 zł"}
                  </span>
                  {isCodeValid && <span className="font-semibold">0 zł</span>}
                </div>
              </div>
              <hr className="border-t border-gray-400 my-2" />
              <div className="flex justify-between font-bold">
                <span>Suma</span>
                <span>{totalPrice + 20} zł</span>
              </div>
              <hr className="border-t border-gray-400 my-3" />
              <Button disabled={!cart?.data.cart.items.length}>
                Przejdz do kasy
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
