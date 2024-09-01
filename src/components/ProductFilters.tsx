import React, { useMemo, useState } from "react";
import Slider from "react-slider";
import Accordion from "./Accordion";
import Checkbox from "./Checkbox";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../store/store";
import { setPriceRange, toggleSizeSelection } from "../store/filterSlice";
import debounce from "lodash.debounce";
import { minPrice, maxPrice, sizes } from "@/data/filtersData";

export const ProductFilters = () => {
  const dispatch = useDispatch();
  const [priceRange, setPriceRangeSlider] = useState<number[]>([
    minPrice,
    maxPrice,
  ]);

  const selectedSizes = useSelector(
    (state: RootState) => state.filters.selectedSizes
  );

  const [priceFilter, setPriceFilter] = React.useState(true);
  const [sizeFilter, setSizeFilter] = React.useState(true);

  const debouncedPriceChange = useMemo(
    () =>
      debounce((values: number[]) => {
        dispatch(setPriceRange(values));
      }, 400),
    [dispatch]
  );

  const handlePriceChange = (values: number[]) => {
    debouncedPriceChange(values);
  };

  const handleSliderChange = (values: number[]) => {
    setPriceRangeSlider(values);
  };

  const handleSizeChange = (size: string) => {
    dispatch(toggleSizeSelection(size));
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
            defaultValue={[minPrice, maxPrice]}
            onChange={handleSliderChange}
            onAfterChange={handlePriceChange}
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
                <Checkbox
                  isChecked={selectedSizes.includes(size)}
                  setIsChecked={() => handleSizeChange(size)}
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
