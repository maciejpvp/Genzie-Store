import React, { useState } from "react";
import Slider from "react-slider";
import Accordion from "./Accordion";
import Checkbox from "./Checkbox";
import { minPrice, maxPrice, sizes } from "@/data/filtersData";
import { useNavigate, useSearchParams } from "react-router-dom";

export const ProductFilters = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const category = searchParams.get("category");
  const minValue: number = parseInt(searchParams.get("price[gte]") || "0", 10);

  const maxValue: number = parseInt(searchParams.get("price[lte]") || "0", 10);

  const checkedSizes: string[] = searchParams.get("stock")?.split(",") || [];

  console.log(checkedSizes);

  const [sliderValues, setSliderValues] = useState<number[]>([
    minValue,
    maxValue,
  ]);

  const [priceFilter, setPriceFilter] = React.useState(true);
  const [sizeFilter, setSizeFilter] = React.useState(true);

  const handlePriceChange = (values: number[]) => {
    navigate(
      `?category=${category}&price[gte]=${values[0]}&price[lte]=${values[1]}&stock=${checkedSizes}`,
      {
        replace: false,
      }
    );
  };

  const handleSliderMove = (values: number[]) => {
    setSliderValues([values[0], values[1]]);
  };

  const handleSizeChange = (size: string, isChecked: boolean) => {
    let updatedSizes: string[] = [];
    console.log(isChecked);

    if (!isChecked) {
      if (checkedSizes.length === 0 || checkedSizes[0] === "") {
        updatedSizes = [size];
      } else {
        updatedSizes = [...checkedSizes, size];
      }
    } else {
      updatedSizes = checkedSizes.filter((s) => s !== size);
    }

    console.log(updatedSizes);

    navigate(
      `?category=${category}&price[gte]=${minValue}&price[lte]=${maxValue}&stock=${updatedSizes}`,
      {
        replace: false,
      }
    );
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
            min={50}
            max={1000}
            defaultValue={[
              minValue ? minValue : minPrice,
              maxValue ? maxValue : maxPrice,
            ]}
            onChange={handleSliderMove}
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
            {sliderValues[0]} zł - {sliderValues[1]} zł
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
                  isChecked={checkedSizes.includes(size)}
                  setIsChecked={() =>
                    handleSizeChange(size, checkedSizes.includes(size))
                  }
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
