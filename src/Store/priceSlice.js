import { createSlice } from "@reduxjs/toolkit";

const priceSlice = createSlice({
  name: "price",
  initialState: {
    porscheFlag: false,
    volkswagenFlag: false,
    audiFlag: false,
    brand:null,
    type:null,
    truckSize:null,
    start:"",
    end:null,
  
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
    setBrand:(state,action)=>{
      state.brand = action.payload;
    },
    setType:(state,action)=>{
      state.type = action.payload;
    },
    setTruckSize:(state,action)=>{
      state.truckSize = action.payload;
    },
    setStart:(state,action)=>{
      state.start = action.payload;
    },
    setEnd:(state,action)=>{
      state.end = action.payload;
    },
  },
});

export default priceSlice.reducer;
export const { setPorscheFlag, setVolkswagenFlag, setAudiFlag, setBrand, setType, setTruckSize, setStart, setEnd } = priceSlice.actions;