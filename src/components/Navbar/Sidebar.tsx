import { IoIosClose } from "react-icons/io";
import { gora, gadzety, akcesoria, kolekcje } from "@/data/navigationData";
import { motion } from "framer-motion";
import { NavigationItemMobile } from "../NavigationItemMobile";

type SidebarProps = {
  onClose: () => void;
};

export const Sidebar = ({ onClose }: SidebarProps) => {
  const sidebarVariants = {
    hidden: { x: "100%" },
    visible: {
      x: 0,
      transition: { type: "spring", stiffness: 300, damping: 30 },
    },
    exit: {
      x: "100%",
      transition: { type: "spring", stiffness: 300, damping: 30 },
    },
  };

  return (
    <div className="fixed inset-0 z-50 flex">
      <motion.div
        className="w-full bg-white h-full shadow-lg px-2"
        initial="hidden"
        animate="visible"
        exit="exit"
        variants={sidebarVariants}
      >
        <div className="flex justify-between items-center p-4 border-b border-gray-200">
          <h2 className="text-lg font-semibold">Categories</h2>
          <button onClick={onClose}>
            <IoIosClose size={24} />
          </button>
        </div>
        <div className="flex flex-col p-4 space-y-4">
          <NavigationItemMobile
            title="GÓRA"
            ItemsList={gora}
            href="/gora"
            onClose={onClose}
          />
          <NavigationItemMobile title="DÓŁ" href="/dol" onClose={onClose} />
          <NavigationItemMobile
            title="GADŻETY"
            ItemsList={gadzety}
            href="/gadzety"
            onClose={onClose}
          />
          <NavigationItemMobile
            title="AKCESORIA"
            ItemsList={akcesoria}
            href="/akcesoria"
            onClose={onClose}
          />
          <NavigationItemMobile
            title="KOLEKCJE"
            ItemsList={kolekcje}
            onClose={onClose}
          />
          <NavigationItemMobile
            title="PREORDER"
            href="/preorder"
            className="text-pink-500"
            onClose={onClose}
          />
          <NavigationItemMobile
            title="NOWOŚCI"
            href="/nowosci"
            className="text-blue-600"
            onClose={onClose}
          />
          <NavigationItemMobile
            title="OSTATNIE SZTUKI"
            href="/ostatnie-sztuki"
            onClose={onClose}
          />
          <NavigationItemMobile
            title="SALE"
            href="/gora"
            className="text-pink-500"
            onClose={onClose}
          />
        </div>
      </motion.div>
    </div>
  );
};
