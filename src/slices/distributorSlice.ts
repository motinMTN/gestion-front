import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IDistributor } from '../interfaces/distributor/IDistributor';
import { RootState } from '../store';

const initialState: IDistributor = {
    name: '',
    domain: '',
    properties: {
        email: '',
        url: '',
        general_fontFamily: '',
        theme_Background: '',
        topbar_Background: '',
        topbar_ColorText: '',
        sidebar_Background: '',
        sidebar_ColorText: '',
        authForm_Background: '',
        authForm_ColorText: '',
        url_Logo: ''
    }
};

const distributorSlice = createSlice({
    name: 'distributor',
    initialState,
    reducers: {
        setDistributor: (state, action: PayloadAction<IDistributor>) => {        
            state.name = action.payload.name;
            state.domain = action.payload.domain;
            state.properties = { ...action.payload.properties };
        },
        clearDistributor: (state) => {
            state.name = initialState.name;
            state.domain = initialState.domain;
            state.properties = { ...initialState.properties };
        },
    },
});

export const { setDistributor, clearDistributor } = distributorSlice.actions;
export const selectDistributor = (state: RootState) => state.distributor;
export default distributorSlice.reducer;