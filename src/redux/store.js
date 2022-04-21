import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./reducers/productsReducer";
import cartReducer from "./reducers/cartReducer";

export const store = configureStore({
	reducer: {
		productsList: productsReducer,
		cart: cartReducer,
	},
});
