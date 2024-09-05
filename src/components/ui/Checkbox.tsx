import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type CheckBoxProps = {
  isChecked: boolean;
  setIsChecked: React.Dispatch<React.SetStateAction<boolean>>;
  label: string;
  className?: string;
};

const Checkbox: React.FC<CheckBoxProps> = ({
  isChecked,
  setIsChecked,
  label,
  className,
}) => {
  const toggleCheckbox = () => {
    setIsChecked(!isChecked);
  };

  return (
    <motion.div
      className={cn(
        "cursor-pointer p-4 flex items-center justify-center rounded-md",
        className
      )}
      onClick={toggleCheckbox}
      initial={{ scale: 1 }}
      whileTap={{ scale: 0.95 }}
      animate={{
        backgroundColor: isChecked ? "#f3f4f6" : "#ffffff", // Ciemniejszy odcień po zaznaczeniu
        borderColor: isChecked ? "#000000" : "#d1d5db",
        borderWidth: "2px",
      }}
      transition={{ duration: 0.4 }}
      style={{ borderStyle: "solid" }}
    >
      <span
        className={`text-base font-medium ${
          isChecked ? "text-black" : "text-gray-700"
        }`}
      >
        {label}
      </span>
    </motion.div>
  );
};

export default Checkbox;
