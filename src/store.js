import { configureStore } from "@reduxjs/toolkit";
import handlerCountryFilter from "./Models/Fliter";

export const store = configureStore({
  reducer: {
    currentCountryName: handlerCountryFilter,
  },
});
