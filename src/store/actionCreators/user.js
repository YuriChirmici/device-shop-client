import { createAsyncThunk } from "@reduxjs/toolkit";
import { $host, $authHost } from "../../api";
import jwtDecode from "jwt-decode";
import { LOCAL_TOKEN_KEY } from "../../utils/consts";

const saveToken = (token) => {
	localStorage.setItem(LOCAL_TOKEN_KEY, token);
}

export const registerUser = createAsyncThunk(
	"user/registration",
	async (userData, thunkAPI) => {
		try {
			const { data } = await $host.post("user/registration", { ...userData, role: "ADMIN" });
			saveToken(data.token);
			return jwtDecode(data.token);
		} catch (err) {
			const message = err.response?.data?.message || "Cannot register user";
			return thunkAPI.rejectWithValue(message);
		}
	}
);

export const loginUser = createAsyncThunk(
	"user/login",
	async (userData, thunkAPI) => {
		try {
			const { data } = await $host.post("user/login", userData);
			saveToken(data.token);
			return jwtDecode(data.token);
		} catch (err) {
			const message = err.response?.data?.message || "Cannot login user";
			return thunkAPI.rejectWithValue(message);
		}
	}
);

export const checkUser = createAsyncThunk(
	"user/check",
	async (_, thunkAPI) => {
		try {
			const { data } = await $authHost.get("user/auth");
			saveToken(data.token);
			return jwtDecode(data.token);
		} catch (err) {
			const message = err.response?.data?.message || "Cannot check user";
			console.log(message);
			return thunkAPI.rejectWithValue("");
		}
	}
);
