import { Product } from "@/utils/types";
import { useItemDetails } from "../hooks/useItemDetails";
import { useParams } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import SizeSelector from "@/components/ProductItemPage/SizeSelector";
import { useState } from "react";
import QuantitySelector from "@/components/ProductItemPage/QuantitySelector";
import Description from "@/components/ProductItemPage/Description";
import Accordion from "@/components/ui/Accordion";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { useAddToCart } from "@/hooks/useAddtoCart";
import { BeatLoader } from "react-spinners";

export const ProductItemPage = () => {
  const { id } = useParams();
  const { mutate: mutateAddToCart } = useAddToCart();
  const [selectedSize, setSelectedSize] = useState<string>("M");
  const renderComponent = useSelector(
    (state: RootState) => state.productPage.renderComponent
  );
  const [showDetails, setShowDetails] = useState<boolean>(true);
  const [quantity, setQuantity] = useState<number>(1);

  const { data, error, isLoading } = useItemDetails({
    id: id ? id : "",
  });

  if (isLoading)
    return (
      <div className="flex justify-center h-dvh mt-48">
        <BeatLoader />
      </div>
    );
  if (error || data?.code !== "017")
    return <p>An error occurred: {error?.message || data?.message}</p>;

  const item: Product = data.data.item;

  const handleAddToCart = () => {
    if (!id) return;
    mutateAddToCart({ itemId: id, quantity, size: selectedSize });
  };

  return (
    <div className="flex flex-col lg:flex-row justify-center ">
      <AnimatePresence>
        {renderComponent && (
          <>
            <motion.div
              className="lg:w-2/4 h-full mb-8 lg:mb-0 flex justify-center"
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.3 }}
            >
              <img
                crossOrigin="anonymous"
                src={`http://localhost:8000/images/${item.images[0]}`}
                alt={item.name}
                className="h-4/5 rounded-lg shadow-lg"
              />
            </motion.div>

            <motion.div
              className="lg:w-1/2 w-full lg:pl-10 py-10"
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 100 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex flex-col gap-3 pb-16">
                <h1 className="text-4xl text-gray-800">{item.name}</h1>
                <p className="text-2xl text-gray-600 mb-2">
                  {item.price.toFixed(2)} zł
                </p>
                <SizeSelector
                  selectedSize={selectedSize}
                  setSelectedSize={setSelectedSize}
                />
                <QuantitySelector
                  quantity={quantity}
                  setQuantity={setQuantity}
                />
                <motion.button
                  className="mt-4 bg-zinc-800 text-white py-3 px-6 rounded-lg hover:bg-zinc-900 focus:outline-none focus:ring-2 focus:ring-zinc-800 focus:ring-opacity-50"
                  onClick={handleAddToCart}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Add to Cart
                </motion.button>
              </div>
              <Accordion
                title="Szczegóły"
                isOpen={showDetails}
                setIsOpen={() => setShowDetails((prev) => !prev)}
              >
                <Description description={item.description} />
              </Accordion>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};
