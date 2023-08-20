import { basketReducer } from "./basketSlice";
import { brandReducer } from "./brandSlice";
import { deviceReducer } from "./deviceSlice";
import { typeReducer } from "./typeSlice";
import { userReducer } from "./userSlice";

export const rootReducer = {
	user: userReducer,
	device: deviceReducer,
	brand: brandReducer,
	type: typeReducer,
	basket: basketReducer
}