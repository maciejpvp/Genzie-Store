// import Checkbox from "@/components/Checkbox";
// import { sizes } from "@/data/filtersData";
import { useNavigate, useSearchParams } from "react-router-dom";
import { PriceFilterMobile } from "./PriceFilterMobile";
import { SizeFilter } from "@/components/Filters/SizeFilter";
// import Checkbox from "@/components/ui/Checkbox";

export const ProductFiltersMobile = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const category = searchParams.get("category");
  const minValue: number = parseInt(searchParams.get("price[gte]") || `0`, 10);

  const maxValue: number = parseInt(
    searchParams.get("price[lte]") || `1000`,
    10
  );

  const checkedSizes: string[] = searchParams.get("stock")?.split(",") || [];

  const handleMinPrice = (event: React.ChangeEvent<HTMLInputElement>) => {
    navigate(
      `?category=${category}&price[gte]=${event.target.value}&price[lte]=${maxValue}&stock=${checkedSizes}`,
      {
        replace: false,
      }
    );
  };
  const handleMaxPrice = (event: React.ChangeEvent<HTMLInputElement>) => {
    navigate(
      `?category=${category}&price[gte]=${minValue}&price[lte]=${event.target.value}&stock=${checkedSizes}`,
      {
        replace: false,
      }
    );
  };

  return (
    <div className="space-y-2">
      <PriceFilterMobile
        handleMinPrice={handleMinPrice}
        handleMaxPrice={handleMaxPrice}
        defaultValues={[minValue, maxValue]}
      />
      <div>
        <h1>Rozmiar</h1>
        <SizeFilter checkedSizes={checkedSizes} />
      </div>
    </div>
  );
};
