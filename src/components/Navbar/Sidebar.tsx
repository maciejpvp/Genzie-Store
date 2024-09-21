import { IoIosClose } from "react-icons/io";
import { motion } from "framer-motion";
import { useState } from "react";
import { Categories } from "./Sidebar/Categories";
import { ProductFiltersMobile } from "./Sidebar/ProductFiltersMobile";
import Accordion from "../ui/Accordion";

type SidebarProps = {
  onClose: () => void;
};

export const Sidebar = ({ onClose }: SidebarProps) => {
  const [showCategories, setShowCategories] = useState<boolean>(true);
  const [showFilters, setShowFilters] = useState<boolean>(false);
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
        <div className="flex justify-end items-center py-2 border-gray-200">
          <button onClick={onClose}>
            <IoIosClose size={34} />
          </button>
        </div>
        <Accordion
          title="Filters"
          isOpen={showFilters}
          setIsOpen={() => setShowFilters((prev) => !prev)}
        >
          <ProductFiltersMobile />
        </Accordion>
        <Accordion
          title="Categories"
          isOpen={showCategories}
          setIsOpen={() => setShowCategories((prev) => !prev)}
        >
          <Categories onClose={onClose} />
        </Accordion>
      </motion.div>
    </div>
  );
};
