import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface LoaderState {
  isLoading: boolean;
}

const initialState: LoaderState = {
  isLoading: false,
};

export const loaderSlice = createSlice({
  name: "loader",
  initialState,
  reducers: {
    showLoader: (state, action: PayloadAction<boolean>) => ({
      isLoading: true,
    }),
    hideLoader: (state, action: PayloadAction<boolean>) => ({
      isLoading: false,
    }),
  },
});

export const { showLoader, hideLoader } = loaderSlice.actions;

export const selectLoader = (state: any): LoaderState => state.loader;

export default loaderSlice.reducer;
