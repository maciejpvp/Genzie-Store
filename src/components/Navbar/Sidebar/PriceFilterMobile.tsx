import { Input } from "@/components/ui/input";

type PriceFilterMobileProps = {
  handleMinPrice: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleMaxPrice: (event: React.ChangeEvent<HTMLInputElement>) => void;
  defaultValues: number[];
};

export const PriceFilterMobile = ({
  handleMinPrice,
  handleMaxPrice,
  defaultValues,
}: PriceFilterMobileProps) => {
  return (
    <>
      <h1>Cena</h1>
      <div className="flex flex-row justify-between gap-10">
        <Input
          type="number"
          placeholder="Min"
          onBlur={handleMinPrice}
          defaultValue={defaultValues[0]}
        />
        <Input
          type="number"
          placeholder="Max"
          defaultValue={defaultValues[1]}
          onBlur={handleMaxPrice}
        />
      </div>
    </>
  );
};
