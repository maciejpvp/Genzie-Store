import { useNavigate, useLocation } from "react-router-dom";
import { motion, useAnimation } from "framer-motion";
import { Logo } from "./Logo";
import { NavigationItem } from "./NavigationItem";
import { IoIosCart, IoIosArrowRoundBack } from "react-icons/io";
import { gora, gadzety, akcesoria, kolekcje } from "@/data/navigationData";
import { useEffect } from "react";

export const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const controls = useAnimation();
  const renderBackButton = location.pathname.startsWith("/item/");

  useEffect(() => {
    if (renderBackButton) {
      controls.start({ opacity: 1, transition: { duration: 0.3 } });
    } else {
      controls.start({ opacity: 0, transition: { duration: 0.3 } });
    }
  }, [renderBackButton, controls]);

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <div className="flex w-full h-60 flex-row">
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
      <div className="basis-1/5 flex justify-end">
        <IoIosCart />
      </div>
    </div>
  );
};
