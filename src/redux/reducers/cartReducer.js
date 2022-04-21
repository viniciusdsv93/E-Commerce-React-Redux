import { createSlice } from "@reduxjs/toolkit";

export const slice = createSlice({
	name: "cart",
	initialState: {
		totalOfItems: 0,
		items: [],
	},
	reducers: {
		addItem: (state, action) => {
			let itemExistsOnCart = false;
			state.items.map((item, index) => {
				if (item.id === action.payload.id_product) {
					itemExistsOnCart = true;
					state.items[index].quantity++;
					state.items[index].totalPrice = state.items[index].price * state.items[index].quantity;
					state.totalOfItems++;
				}
			});

			if (!itemExistsOnCart) {
				state.totalOfItems++;
				state.items.push({
					id: action.payload.id_product,
					name: action.payload.name_product,
					price: action.payload.price,
					quantity: 1,
					totalPrice: action.payload.price,
				});
			}
		},
		deleteItem: (state, action) => {
			state.totalOfItems = state.totalOfItems - action.payload.quantity;
			state.items = state.items.filter((item) => {
				return item.id !== action.payload.id;
			});
		},
		addItemByCart: (state, action) => {
			state.items.map((item, index) => {
				if (item.id === action.payload.id) {
					state.items[index].quantity++;
					state.items[index].totalPrice = state.items[index].price * state.items[index].quantity;
					state.totalOfItems++;
				}
			});
		},
		removeItemByCart: (state, action) => {
			state.items.map((item, index) => {
				if (item.id === action.payload.id) {
					if (state.items[index].quantity > 1) {
						state.items[index].quantity--;
						state.items[index].totalPrice = state.items[index].price * state.items[index].quantity;
						state.totalOfItems--;
					}
				}
			});
		},
	},
});

export const { addItem, deleteItem, addItemByCart, removeItemByCart } = slice.actions;
export default slice.reducer;
