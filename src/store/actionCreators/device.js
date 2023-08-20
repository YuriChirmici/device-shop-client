import { createAsyncThunk } from "@reduxjs/toolkit";
import { $authHost, $host } from "../../api";

export const fetchDevices = createAsyncThunk(
	"device/fetchDevices",
	async ({ filter, page, limit }, thunkAPI) => {
		try {
			const { data } = await $host.get("device", { params: {
				filter, page, limit
			}});

			return data;
		} catch (err) {
			return thunkAPI.rejectWithValue("Cannot fetch devices");
		}
	}
);

export const fetchDeviceById = createAsyncThunk(
	"device/fetchDeviceById",
	async (id, thunkAPI) => {
		try {
			const { data } = await $host.get("device/" + id);
			return data;
		} catch (err) {
			return thunkAPI.rejectWithValue("Cannot fetch device");
		}
	}
);

export const createDevice = createAsyncThunk(
	"device/createDevice",
	async (deviceData, thunkAPI) => {
		try {
			const { data } = await $authHost.post("device", deviceData);
			return data;
		} catch (err) {
			return thunkAPI.rejectWithValue("Cannot create device");
		}
	}
);