import { createSlice } from "@reduxjs/toolkit";
import productsList from "../../product";

export const slice = createSlice({
	name: "user",
	initialState: productsList,
});

export default slice.reducer;
