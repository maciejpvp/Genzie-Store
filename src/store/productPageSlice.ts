import { createSlice } from "@reduxjs/toolkit";

interface ProductPageState {
  renderComponent: boolean;
}

const initialState: ProductPageState = {
  renderComponent: true,
};

const productPageSlice = createSlice({
  name: "productPage",
  initialState,
  reducers: {
    handleExit: (state) => {
      state.renderComponent = false;
    },
    resetComponent: (state) => {
      state.renderComponent = true;
    },
  },
});

export const { handleExit, resetComponent } = productPageSlice.actions;

export default productPageSlice.reducer;
