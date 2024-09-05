import { useState } from "react";
import Slider from "react-slider";
import Accordion from "../ui/Accordion";
import { minPrice, maxPrice } from "@/data/filtersData";
import { useNavigate, useSearchParams } from "react-router-dom";
import { SizeFilter } from "../Filters/SizeFilter";

export const ProductFilters = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const category = searchParams.get("category");
  const minValue: number = parseInt(
    searchParams.get("price[gte]") || `${minPrice}`,
    10
  );

  const maxValue: number = parseInt(
    searchParams.get("price[lte]") || `${maxPrice}`,
    10
  );

  const checkedSizes: string[] = searchParams.get("stock")?.split(",") || [];

  console.log(checkedSizes);

  const [sliderValues, setSliderValues] = useState<number[]>([
    minValue,
    maxValue,
  ]);

  const [priceFilter, setPriceFilter] = useState(true);
  const [sizeFilter, setSizeFilter] = useState(true);

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

  return (
    <div className="hidden lg:flex lg:flex-col ml-16 px-9 py-4 border border-gray-400 h-min w-60 rounded-sm">
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
          <SizeFilter checkedSizes={checkedSizes} />
        </Accordion>
      </div>
    </div>
  );
};
