import { configureStore } from "@reduxjs/toolkit";
import { StudentsSlice } from "./api/StudentsSlice";
import { setupListeners } from "@reduxjs/toolkit/dist/query";

export const store = configureStore({
    reducer: {
        [StudentsSlice.reducerPath]: StudentsSlice.reducer
    },

    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(StudentsSlice.middleware),
})

setupListeners(store.dispatch)