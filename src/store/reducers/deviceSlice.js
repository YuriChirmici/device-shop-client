import { createSlice } from "@reduxjs/toolkit"
import { createDevice, fetchDeviceById, fetchDevices } from "../actionCreators/device";

const initialState = {
	devices: [],
	totalCount: 0,
	isLoading: false,
	error: "",
}

export const deviceSlice = createSlice({
	name: "device",
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(fetchDevices.fulfilled, (state, { payload }) => {
			state.devices = payload.rows;
			state.totalCount = payload.count;
			state.isLoading = false;
			state.error = "";
		});

		builder.addCase(fetchDevices.pending, (state) => {
			state.isLoading = true;
			state.error = "";
		});

		builder.addCase(fetchDevices.rejected, (state, { payload }) => {
			state.isLoading = false;
			state.error = payload;
		});


		builder.addCase(fetchDeviceById.fulfilled, (state, { payload }) => {
			state.isLoading = false;
			state.error = "";
			if (!payload) {
				return;
			}

			const index = state.devices.findIndex(({ id }) => id === payload.id);
			if (index < 0) {
				state.devices.push(payload);
				state.totalCount++;
			}
		});

		builder.addCase(fetchDeviceById.pending, (state) => {
			state.isLoading = true;
			state.error = "";
		});

		builder.addCase(fetchDeviceById.rejected, (state, { payload }) => {
			state.isLoading = false;
			state.error = payload;
		});

		builder.addCase(createDevice.fulfilled, (state, { payload }) => {
			state.devices.push(payload);
			state.isLoading = false;
			state.error = "";
		});

		builder.addCase(createDevice.pending, (state) => {
			state.isLoading = true;
			state.error = "";
		});

		builder.addCase(createDevice.rejected, (state, { payload }) => {
			state.isLoading = false;
			state.error = payload;
		});
	}
})

export const deviceReducer = deviceSlice.reducer;