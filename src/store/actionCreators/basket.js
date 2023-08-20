import { createAsyncThunk } from "@reduxjs/toolkit";
import { $authHost } from "../../api";

export const fetchBasket = createAsyncThunk(
	"basket/fetchBasket",
	async (_, thunkAPI) => {
		try {
			const { data } = await $authHost.get("basket");
			return data;
		} catch (err) {
			return thunkAPI.rejectWithValue("Cannot fetch basket");
		}
	}
)

export const addDeviceToBasket = createAsyncThunk(
	"basket/addDevice",
	async (deviceId, thunkAPI) => {
		try {
			const { data } = await $authHost.post("basket/addById/" + deviceId);
			return data;
		} catch (err) {
			return thunkAPI.rejectWithValue("Cannot add device to basket");
		}
	}
)