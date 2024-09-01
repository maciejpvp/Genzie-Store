import React from "react";
import { motion } from "framer-motion";

type CheckBoxProps = {
  isChecked: boolean;
  setIsChecked: React.Dispatch<React.SetStateAction<boolean>>;
};

const Checkbox: React.FC<CheckBoxProps> = ({ isChecked, setIsChecked }) => {
  const toggleCheckbox = () => {
    setIsChecked(!isChecked);
  };

  return (
    <motion.div
      className={`w-6 h-6 flex items-center justify-center cursor-pointer rounded-sm`}
      onClick={toggleCheckbox}
      initial={{ scale: 1 }}
      whileTap={{ scale: 0.9 }}
      animate={{
        backgroundColor: isChecked ? "#000000" : "#ffffff",
        borderColor: isChecked ? "#000000" : "#d1d5db",
        borderWidth: isChecked ? "2px" : "2px",
      }}
      transition={{ duration: 0.4 }}
      style={{ borderStyle: "solid" }}
    >
      {isChecked && (
        <motion.svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-5 h-5"
          initial={{ rotate: -45, opacity: 0 }}
          animate={{ rotate: 0, opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <path d="M20 6L9 17l-5-5" />
        </motion.svg>
      )}
    </motion.div>
  );
};

export default Checkbox;
