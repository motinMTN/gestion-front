import { combineReducers } from "@reduxjs/toolkit";
import authSlice from "../slices/authSlice";
import uiSlice from "../slices/uiSlice";
import distributorSlice from "../slices/distributorSlice";

const rootReducer = combineReducers({
    auth: authSlice,
    ui: uiSlice,
    distributor: distributorSlice
});

export default rootReducer;