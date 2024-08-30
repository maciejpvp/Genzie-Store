import React, { ChangeEvent, useState } from "react";

type QuantitySelectorProps = {
  quantity: number;
  setQuantity: React.Dispatch<React.SetStateAction<number>>;
};

const QuantitySelector: React.FC<QuantitySelectorProps> = ({
  quantity,
  setQuantity,
}) => {
  const [inputValue, setInputValue] = useState<string>(quantity.toString());

  const increment = () => {
    const newQuantity = quantity + 1;
    setQuantity(newQuantity);
    setInputValue(newQuantity.toString());
  };

  const decrement = () => {
    if (quantity > 1) {
      const newQuantity = quantity - 1;
      setQuantity(newQuantity);
      setInputValue(newQuantity.toString());
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (value === "") {
      setInputValue("");
    } else {
      const parsedValue = parseInt(value, 10);
      if (!isNaN(parsedValue) && parsedValue > 0) {
        setInputValue(value);
      }
    }
  };

  const handleBlur = () => {
    if (inputValue === "") {
      setQuantity(1);
      setInputValue("1");
    } else {
      setQuantity(parseInt(inputValue, 10));
    }
  };

  return (
    <div className="flex items-center space-x-2">
      <button
        onClick={decrement}
        className="px-4 py-2 border rounded bg-gray-50 text-gray-800
                   hover:bg-gray-100 transition-colors duration-200"
      >
        −
      </button>
      <input
        type="number"
        value={inputValue}
        onChange={handleChange}
        onBlur={handleBlur}
        className="w-14 text-center px-4 py-2 border rounded bg-gray-50 text-gray-800"
      />
      <button
        onClick={increment}
        className="px-4 py-2 border rounded bg-gray-50 text-gray-800 
                   hover:bg-gray-100 transition-colors duration-200"
      >
        +
      </button>
    </div>
  );
};

export default QuantitySelector;
