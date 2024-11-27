import { configureStore } from "@reduxjs/toolkit"

import favoritesReducer from "./slice"

export const store = configureStore({
  reducer: {
    favorites: favoritesReducer,
  },
})