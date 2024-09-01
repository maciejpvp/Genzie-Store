// import Checkbox from "@/components/Checkbox";
import { Input } from "@/components/ui/input";
import { sizes } from "@/data/filtersData";
// import { useState } from "react";

export const ProductFiltersMobile = () => {
  return (
    <>
      <h1>Price</h1>
      <div className="flex flex-row justify-between gap-10">
        <Input type="number" placeholder="Min" />
        <Input type="number" placeholder="Max" />
      </div>
      {sizes.map((size) => size)}
    </>
  );
};
