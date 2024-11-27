import { configureStore } from "@reduxjs/toolkit"

import meetupsReducer from "./meetups/slice"
import favoritesReducer from "./favorites/slice"

export const store = configureStore({
  reducer: {
    meetups: meetupsReducer,
    favorites: favoritesReducer,
  },
})