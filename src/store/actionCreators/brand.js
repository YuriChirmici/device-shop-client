import { createAsyncThunk } from "@reduxjs/toolkit";
import { $authHost, $host } from "../../api";

export const fetchBrands = createAsyncThunk(
	"brand/fetchBrands",
	async (_, thunkAPI) => {
		try {
			const { data } = await $host.get("brand");
			return data;
		} catch (err) {
			return thunkAPI.rejectWithValue("Cannot fetch brands");
		}
	}
)

export const createBrand = createAsyncThunk(
	"brand/createBrand",
	async (brandData, thunkAPI) => {
		try {
			const { data } = await $authHost.post("brand", brandData);
			return data;
		} catch (err) {
			return thunkAPI.rejectWithValue("Cannot create brand");
		}
	}
)