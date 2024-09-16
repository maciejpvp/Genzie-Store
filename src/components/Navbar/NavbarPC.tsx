import { useNavigate, useLocation } from "react-router-dom";
import { AnimatePresence, motion, useAnimation } from "framer-motion";
import { Logo } from "./Logo";
import { NavigationItem } from "./NavigationItem";
import { IoIosArrowRoundBack } from "react-icons/io";
import { PiShoppingCartLight, PiShoppingCartFill } from "react-icons/pi";
import { gora, gadzety, akcesoria, kolekcje } from "@/data/navigationData";
import { useEffect, useState } from "react";
import { AppDispatch } from "@/store/store";
import { useDispatch } from "react-redux";
import { handleExit, resetComponent } from "@/store/productPageSlice";

export const NavbarPC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const controls = useAnimation();
  const dispatch: AppDispatch = useDispatch();
  const renderBackButton = location.pathname.startsWith("/item/");
  const [showCart, setShowCart] = useState<boolean>(false);

  useEffect(() => {
    if (renderBackButton) {
      controls.start({ opacity: 1, transition: { duration: 0.3 } });
    } else {
      controls.start({ opacity: 0, transition: { duration: 0.3 } });
    }
  }, [renderBackButton, controls]);

  const handleGoBack = () => {
    if (renderBackButton) {
      dispatch(handleExit());
      setTimeout(() => {
        navigate(-1);
        dispatch(resetComponent());
      }, 400);
    }
  };

  return (
    <>
      <div className="basis-1/5 text-6xl">
        <motion.button
          animate={controls}
          initial={{ opacity: 0 }}
          onClick={handleGoBack}
        >
          <IoIosArrowRoundBack />
        </motion.button>
      </div>
      <div className="basis-3/5 h-60 flex flex-col items-center py-5 space-y-7">
        <Logo />
        <div className="flex flex-row">
          <NavigationItem title="GÓRA" ItemsList={gora} href="/gora" />
          <NavigationItem title="DÓL" href="/dol" />
          <NavigationItem title="GADŻETY" ItemsList={gadzety} href="/gadzety" />
          <NavigationItem
            title="AKCESORIA"
            ItemsList={akcesoria}
            href="/akcesoria"
          />
          <NavigationItem title="KOLEKCJE" ItemsList={kolekcje} />
          <NavigationItem
            title="PREORDER"
            href="/preorder"
            className="text-pink-500"
          />
          <NavigationItem
            title="NOWOSCI"
            href="/nowosci"
            className="text-blue-600"
          />
          <NavigationItem title="OSTATNIE SZTUKI" href="/ostatnie-sztuki" />
          <NavigationItem title="SALE" href="/gora" className="text-pink-500" />
        </div>
      </div>
      <div className="flex justify-end items-start w-[19dvw]">
        <button
          className="text-3xl"
          onClick={() => setShowCart((prev) => !prev)}
        >
          <AnimatePresence mode="wait">
            {showCart ? (
              <motion.div
                key="filled"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.2 }}
              >
                <PiShoppingCartFill />
              </motion.div>
            ) : (
              <motion.div
                key="light"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.2 }}
              >
                <PiShoppingCartLight />
              </motion.div>
            )}
          </AnimatePresence>
        </button>
      </div>
    </>
  );
};
