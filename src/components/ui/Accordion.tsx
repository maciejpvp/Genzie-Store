import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface AccordionProps {
  title: string;
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  children: React.ReactNode;
  className?: string;
  bold?: boolean;
  insideClassName?: string;
}

const Accordion: React.FC<AccordionProps> = ({
  title,
  isOpen,
  setIsOpen,
  children,
  className,
  insideClassName,
  bold,
}) => {
  return (
    <div>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          "flex justify-between items-center w-full py-4 text-left text-gray-700 focus:outline-none",
          className
        )}
      >
        <span
          className={cn("font-medium text-lg", bold ? "font-semibold" : "")}
        >
          {title}
        </span>
        <svg
          className={`transform transition-transform duration-300 ${
            isOpen ? "rotate-180" : "rotate-0"
          }`}
          width="16"
          height="16"
          fill="currentColor"
          viewBox="0 0 16 16"
        >
          <path
            fillRule="evenodd"
            d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
          />
        </svg>
      </button>
      <motion.div
        initial={false}
        animate={{ height: isOpen ? "auto" : 0 }}
        className="overflow-hidden"
      >
        <div className={cn("py-2 text-gray-600", insideClassName)}>
          {children}
        </div>
      </motion.div>
    </div>
  );
};

export default Accordion;
