import { createSlice } from "@reduxjs/toolkit";

const navigationSlice = createSlice({
    name: 'navigation',
    initialState: {
        bar: false,
    },
    reducers: {
        changeBar: (state, action) => {
            state.bar = action.payload;
        },
    }
})

export default navigationSlice.reducer;
export const { changeBar } = navigationSlice.actions;