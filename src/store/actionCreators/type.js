import { createAsyncThunk } from "@reduxjs/toolkit";
import { $authHost, $host } from "../../api";

export const fetchTypes = createAsyncThunk(
	"type/fetchTypes",
	async (_, thunkAPI) => {
		try {
			const { data } = await $host.get("type");
			return data;
		} catch (err) {
			return thunkAPI.rejectWithValue("Cannot fetch types");
		}
	}
);

export const createType = createAsyncThunk(
	"type/createType",
	async (typeData, thunkAPI) => {
		try {
			const { data } = await $authHost.post("type", typeData);
			return data;
		} catch (err) {
			return thunkAPI.rejectWithValue("Cannot create type");
		}
	}
);