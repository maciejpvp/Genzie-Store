import React from "react";

type SizeSelectorProps = {
  selectedSize: string;
  setSelectedSize: React.Dispatch<React.SetStateAction<string>>;
};

const sizes = ["2XS", "XS", "S", "M", "L", "XL"];

const SizeSelector: React.FC<SizeSelectorProps> = ({
  selectedSize,
  setSelectedSize,
}) => {
  return (
    <div className="flex space-x-2">
      {sizes.map((size) => (
        <button
          key={size}
          onClick={() => setSelectedSize(size)}
          className={`px-4 py-2 border rounded 
                      ${
                        selectedSize === size
                          ? "bg-gray-800 text-gray-50"
                          : "bg-gray-50 text-gray-800"
                      }
                      transition-all duration-300`}
        >
          {size}
        </button>
      ))}
    </div>
  );
};

export default SizeSelector;
