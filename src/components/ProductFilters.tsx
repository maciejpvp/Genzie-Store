import { useState } from "react";
import Slider from "react-slider";
import Accordion from "./Accordion";

type ProductFiltersProps = {
  minPrice: number;
  maxPrice: number;
  sizes: string[];
  onFilterChange: (filters: {
    minPrice: number;
    maxPrice: number;
    sizes: string[];
  }) => void;
};

export const ProductFilters = ({
  minPrice,
  maxPrice,
  sizes,
  onFilterChange,
}: ProductFiltersProps) => {
  const [priceRange, setPriceRange] = useState([minPrice, maxPrice]);
  const [selectedSizes, setSelectedSizes] = useState<string[]>([]);
  const [priceFilter, setPriceFilter] = useState<boolean>(true);
  const [sizeFilter, setSizeFilter] = useState<boolean>(true);

  const handlePriceChange = (values: number[]) => {
    setPriceRange(values);
    onFilterChange({
      minPrice: values[0],
      maxPrice: values[1],
      sizes: selectedSizes,
    });
  };

  const handleSizeChange = (size: string) => {
    setSelectedSizes((prevSizes) => {
      const newSizes = prevSizes.includes(size)
        ? prevSizes.filter((s) => s !== size)
        : [...prevSizes, size];
      onFilterChange({
        minPrice: priceRange[0],
        maxPrice: priceRange[1],
        sizes: newSizes,
      });
      return newSizes;
    });
  };

  return (
    <div className="hidden lg:flex lg:flex-col ml-16 px-9 py-4 border border-gray-400 h-min w-auto">
      <h2 className="text-xl font-bold text-gray-800 mb-2">Filtry</h2>

      <div className="mb-2 w-40">
        <Accordion
          title="Cena"
          isOpen={priceFilter}
          setIsOpen={() => setPriceFilter((prev) => !prev)}
        >
          <Slider
            min={minPrice}
            max={maxPrice}
            value={priceRange}
            onChange={handlePriceChange}
            renderTrack={(props) => (
              <div {...props} className="bg-gray-300 h-2 rounded-full" />
            )}
            renderThumb={(props) => (
              <div
                {...props}
                className="bg-black h-5 w-5 rounded-full top-[-5px]"
              />
            )}
            className="mb-7"
          />
          <div className=" text-black">
            {priceRange[0]} zł - {priceRange[1]} zł
          </div>
        </Accordion>
      </div>

      <div>
        <Accordion
          title="Rozmiar"
          isOpen={sizeFilter}
          setIsOpen={() => setSizeFilter((prev) => !prev)}
        >
          <div className="flex flex-col space-y-2">
            {sizes.map((size) => (
              <label
                key={size}
                className="flex items-center text-sm text-black"
              >
                <input
                  type="checkbox"
                  checked={selectedSizes.includes(size)}
                  onChange={() => handleSizeChange(size)}
                  className="form-checkbox h-4 w-4 text-black"
                />
                <span className="ml-2">{size}</span>
              </label>
            ))}
          </div>
        </Accordion>
      </div>
    </div>
  );
};
