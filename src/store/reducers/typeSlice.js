import { createSlice } from "@reduxjs/toolkit";
import { fetchTypes } from "../actionCreators/type";

const initialState = {
	types: [],
	isLoading: false,
	error: ""
};

export const typeSlice = createSlice({
	name: "type",
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(fetchTypes.fulfilled, (state, action) => {
			state.types = action.payload;
			state.isLoading = false;
			state.error = "";
		});

		builder.addCase(fetchTypes.pending, (state, action) => {
			state.isLoading = true;
			state.error = "";
		});

		builder.addCase(fetchTypes.rejected, (state, action) => {
			state.isLoading = false;
			state.error = action.payload;
		});
	}
});

export const typeReducer = typeSlice.reducer;