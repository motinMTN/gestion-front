import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

const initialState = {
    isLoading: false
}

export const uiSlice = createSlice({
    name: 'ui',
    initialState,
    reducers: {
        setLoading: (state, action) => {                        
            state.isLoading = action.payload;
        }
    }
});

export const { setLoading } = uiSlice.actions;
export const selectLoading = (state: RootState) => state.ui.isLoading;
export default uiSlice.reducer;