import { createSlice } from "@reduxjs/toolkit";
const registrationSlice = createSlice({
  name: "registration",
  initialState: {
    firstName: "",
    middleName: "",
    lastName: "",
    employeId: "",
    passportExpiry: null,
    visaExpiry: null,
    ohcExpiry: null,
    rtaExpiry: null,
    fireExpiry: null,
    portExpiry: null,
    warning: false,
    validFirstName: false,
    validLastName: false,
    validEmployeId: false,
    validPassportExpiry: false,
    validVisaExpiry: false,
    validOHCExpiry: false,
    validRTAExpiry: false,
    validFireExpiry: false,
    validPortExpiry: false,
  },
  reducers: {
    addFirstName: (state, action) => {
      state.firstName = action.payload;
    },
    addMiddleName: (state, action) => {
      state.middleName = action.payload;
    },
    addLastName: (state, action) => {
      state.lastName = action.payload;
    },
    addEmployeId: (state, action) => {
      state.employeId = action.payload;
    },
    addPassportExpiry: (state, action) => {
      state.passportExpiry = action.payload;
    },
    addVisaExpiry: (state, action) => {
      state.visaExpiry = action.payload;
    },
    addOHCExpiry: (state, action) => {
      state.ohcExpiry = action.payload;
    },
    addRTAExpiry: (state, action) => {
      state.rtaExpiry = action.payload;
    },
    addFireExpiry: (state, action) => {
      state.fireExpiry = action.payload;
    },
    addPortExpiry: (state, action) => {
      state.portExpiry = action.payload;
    },
    addWarning:(state, action) => {
      state.warning = action.payload;
    },
    addValidFirstName:(state, action) =>{
      state.validFirstName = action.payload;
    },
    addValidLastName:(state,action)=>{
      state.validLastName = action.payload;
    },
    addValidEmployeId:(state, action) => {
      state.validEmployeId = action.payload;
    },
    addValidPassportExpiry:(state, action) => {
      state.validPassportExpiry = action.payload;
    },
    addValidVisaExpiry:(state, action) => {
      state.validVisaExpiry = action.payload;
    },
    addValidOHCExpiry:(state, action) => {
      state.validOHCExpiry = action.payload;
    },
    addValidRTAExpiry:(state, action) => {
      state.validRTAExpiry = action.payload;
    },
    addValidFireExpiry:(state, action) => {
      state.validFireExpiry = action.payload;
    },
    addValidPortExpiry:(state, action) => {
      state.validPortExpiry = action.payload;
    },
  },
});

export default registrationSlice.reducer;
export const {
  addFirstName, addMiddleName, addLastName,addEmployeId,
  addPassportExpiry,addVisaExpiry,addOHCExpiry,addRTAExpiry,
  addFireExpiry,addPortExpiry,addWarning,addValidFirstName,
  addValidLastName,addValidEmployeId,addValidPassportExpiry,
  addValidVisaExpiry,addValidOHCExpiry,addValidRTAExpiry, addValidFireExpiry, addValidPortExpiry
} = registrationSlice.actions;
