import { createSlice } from "@reduxjs/toolkit";

const navigationSlice = createSlice({
    name: 'navigation',
    initialState: {
        bar: false,
        displayEmployees:"grid",
    },
    reducers: {
        changeBar: (state, action) => {
            state.bar = action.payload;
        },
        changeDisplay: (state, action) => {
            state.displayEmployees = action.payload;
        },
    }
})

export default navigationSlice.reducer;
export const { changeBar, changeDisplay } = navigationSlice.actions;


// Usage: This slice is using to activate the navigation slider. when the screen is mobile view the user wants to experience 
// a small navigation slider. if the bar's value is true then the mobile view navigation will activate.