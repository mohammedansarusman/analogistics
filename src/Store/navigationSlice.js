import { createSlice } from "@reduxjs/toolkit";

const navigationSlice = createSlice({
    name: 'navigation',
    initialState: {
        bar: false,
        displayEmployees:"grid",
        sortEmployees:'ascending',
        displayFleet:"list",
        sign: true,
        mode:"light",
        lang:"en",
        languageWindow:false,
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
        changeFleetDisplay: (state, action) => {
            state.displayFleet = action.payload;
        },
        setSign:(state,action)=>{
            state.sign = action.payload;
        },
        setMode:(state,action)=>{
            state.mode = action.payload;
        },
        setLang:(state,action)=>{
            state.lang = action.payload;
        },
        setLanguageWindow:(state,action)=>{
            state.languageWindow = action.payload;
        },
    }
})

export default navigationSlice.reducer;
export const { changeBar, changeDisplay, changeSort, changeFleetDisplay, setSign, setMode, setLang, setLanguageWindow } = navigationSlice.actions;


// Usage: This slice is using to activate the navigation slider. when the screen is mobile view the user wants to experience 
// a small navigation slider. if the bar's value is true then the mobile view navigation will activate.