import { createSlice } from "@reduxjs/toolkit";
import { checkUser, loginUser, registerUser } from "../actionCreators/user";
import { LOCAL_TOKEN_KEY } from "../../utils/consts";

const initialState = {
	user: {},
	isAuth: false,
	isLoading: false,
	error: "",
};

const getUserFulfilled = (state, action) => {
	state.user = action.payload;
	state.isAuth = true;
	state.isLoading = false;
	state.error = "";
};

const getUserPending = (state) => {
	state.isLoading = true;
	state.error = "";
};

const getUserRejected = (state, action) => {
	state.isLoading = false;
	state.error = action.payload;
};

export const userSlice = createSlice({
	name: "user",
	initialState,
	reducers: {
		setError(state, action) {
			state.error = action.payload;
		},
		logout(state) {
			state.user = initialState.user;
			state.isAuth = false;
			localStorage.removeItem(LOCAL_TOKEN_KEY);
		}
	},
	extraReducers: (builder) => {
		builder.addCase(registerUser.fulfilled, getUserFulfilled);
		builder.addCase(registerUser.pending, getUserPending);
		builder.addCase(registerUser.rejected, getUserRejected);

		builder.addCase(loginUser.fulfilled, getUserFulfilled);
		builder.addCase(loginUser.pending, getUserPending);
		builder.addCase(loginUser.rejected, getUserRejected);

		builder.addCase(checkUser.fulfilled, getUserFulfilled);
		builder.addCase(checkUser.pending, getUserPending);
		builder.addCase(checkUser.rejected, getUserRejected);
	}
})

export const userReducer = userSlice.reducer;
