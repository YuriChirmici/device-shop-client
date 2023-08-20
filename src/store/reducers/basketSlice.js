import { createSlice } from "@reduxjs/toolkit";
import { addDeviceToBasket, fetchBasket } from "../actionCreators/basket";

const initialState = {
	basket: [],
	isLoading: false,
	error: "",
}

export const basketSlice = createSlice({
	name: "basket",
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(fetchBasket.fulfilled, (state, { payload }) => {
			state.basket = payload;
			state.isLoading = false;
			state.error = "";
		});

		builder.addCase(fetchBasket.pending, (state) => {
			state.isLoading = true;
			state.error = "";
		});

		builder.addCase(fetchBasket.rejected, (state, { payload }) => {
			state.isLoading = false;
			state.error = payload;
		});

		builder.addCase(addDeviceToBasket.fulfilled, (state, { payload }) => {
			const existedItem = state.basket.find(({ id }) => id === payload.id);
			if (existedItem) {
				existedItem.count++
			} else {
				state.basket.push(payload);
			}

			state.isLoading = false;
			state.error = "";
		});

		builder.addCase(addDeviceToBasket.pending, (state) => {
			state.isLoading = true;
			state.error = "";
		});

		builder.addCase(addDeviceToBasket.rejected, (state, { payload }) => {
			state.isLoading = false;
			state.error = payload;
		});
	}
});

export const basketReducer = basketSlice.reducer;