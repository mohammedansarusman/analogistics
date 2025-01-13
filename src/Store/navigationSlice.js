import { createSlice } from "@reduxjs/toolkit";

const navigationSlice = createSlice({
    name: 'navigation',
    initialState: {
        bar: false,
        displayEmployees:"grid",
        sortEmployees:'ascending',
    },
    reducers: {
        changeBar: (state, action) => {
            state.bar = action.payload;
        },
        changeDisplay: (state, action) => {
            state.displayEmployees = action.payload;
        },
        changeSort: (state, action) => {
            state.sortEmployees = action.payload;
        },
    }
})

export default navigationSlice.reducer;
export const { changeBar, changeDisplay, changeSort } = navigationSlice.actions;


// Usage: This slice is using to activate the navigation slider. when the screen is mobile view the user wants to experience 
// a small navigation slider. if the bar's value is true then the mobile view navigation will activate.