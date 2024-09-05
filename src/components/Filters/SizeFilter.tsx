import { maxPrice, minPrice, sizes } from "@/data/filtersData";
import Checkbox from "../ui/Checkbox";
import { useNavigate, useSearchParams } from "react-router-dom";

type SizeFilterProps = {
  checkedSizes: string[];
};

export const SizeFilter = ({ checkedSizes }: SizeFilterProps) => {
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

  const handleSizeChange = (size: string, isChecked: boolean) => {
    let updatedSizes: string[] = [];

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
    <div className="flex flex-wrap space-x-1">
      {sizes.map((size) => (
        <Checkbox
          label={size}
          className="h-5 my-1"
          isChecked={checkedSizes.includes(size)}
          setIsChecked={() =>
            handleSizeChange(size, checkedSizes.includes(size))
          }
        />
      ))}
    </div>
  );
};
