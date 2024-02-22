import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "CountryFilter",
  initialState: {
    Country: "Indian",
    Loading: false,
    FilterIndex: 1,
    sortAcs: true,
  },
  reducers: {
    handlerCountryFilter: (state, action) => {
      state.Country = action.payload;
    },
    handlerLoading: (state) => {
      state.Loading = !state.Loading;
    },
    handlerFilterIndex: (state, action) => {
      state.FilterIndex = action.payload;
    },
    handlerSortAce: (state) => {
      state.sortAcs = !state.sortAcs;
    },
  },
});

export const {
  handlerCountryFilter,
  handlerLoading,
  handlerFilterIndex,
  handlerSortAce,
} = counterSlice.actions;
export default counterSlice.reducer;
