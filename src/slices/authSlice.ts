import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IAuthUser } from '../interfaces/auth/User4Auth';
import { RootState } from '../store';

const initialState: IAuthUser = {
    user: {
        id: null,
        name: null,
        email: null,        
    },
    isAuthenticated: null,
    token: null,
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setUser: (state, action: PayloadAction<IAuthUser>) => {        
            state.user = action.payload.user;
            state.isAuthenticated = action.payload.isAuthenticated;
            state.token = action.payload.token;
        },
        clearUser: (state) => {
            state.user = { ...initialState.user };
            state.isAuthenticated = initialState.isAuthenticated;
            state.token = initialState.token;
        },
    },
});

export const { setUser, clearUser } = authSlice.actions;
export const selectAuthUser = (state: RootState) => state.auth;
export default authSlice.reducer;