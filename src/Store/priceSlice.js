import { createSlice } from "@reduxjs/toolkit";

const priceSlice = createSlice({
  name: "price",
  initialState: {
    porscheFlag: false,
    volkswagenFlag: false,
    audiFlag: false,
  },
  reducers: {
    setPorscheFlag: (state, action) => {
      state.porscheFlag = action.payload;
    },
    setVolkswagenFlag: (state, action) => {
      state.volkswagenFlag = action.payload;
    },
    setAudiFlag: (state, action) => {
      state.audiFlag = action.payload;
    },
  },
});

export default priceSlice.reducer;
export const { setPorscheFlag, setVolkswagenFlag, setAudiFlag } = priceSlice.actions;