import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { minPrice, maxPrice } from "@/data/filtersData";

interface FiltersState {
  priceRange: number[];
  selectedSizes: string[];
}

const initialState: FiltersState = {
  priceRange: [minPrice, maxPrice],
  selectedSizes: [],
};

const filterSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    setPriceRange: (state, action: PayloadAction<number[]>) => {
      state.priceRange = action.payload;
    },
    toggleSizeSelection: (state, action: PayloadAction<string>) => {
      const size = action.payload;
      if (state.selectedSizes.includes(size)) {
        state.selectedSizes = state.selectedSizes.filter((s) => s !== size);
      } else {
        state.selectedSizes.push(size);
      }
    },
    resetFilters: (state) => {
      state.priceRange = [0, 100];
      state.selectedSizes = [];
    },
  },
});

export const { setPriceRange, toggleSizeSelection, resetFilters } =
  filterSlice.actions;

export default filterSlice.reducer;
