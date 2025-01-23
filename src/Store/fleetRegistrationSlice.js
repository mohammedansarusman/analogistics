import { createSlice } from "@reduxjs/toolkit";
const fleetRegistrationSlice = createSlice({
  name: "fleetRegistration",
  initialState: {
    registrationExpiry: null,
    validRegistrationExpiry: false,
    insuranceExpiry: null,
    validInsuranceExpiry: false,
    advertisementExpiry: null,
    validAdvertisementExpiry: false,
    ISOExpiry: null,
    validISOExpiry: false,
    
  },
  reducers: {
    addRegistrationExpiry: (state, action) => {
      state.registrationExpiry = action.payload;
    },
    addValidRegistrationExpiry: (state, action) => {
      state.validRegistrationExpiry = action.payload;
    },
    addInsuranceExpiry: (state, action) => {
      state.insuranceExpiry = action.payload;
    },
    addValidInsuranceExpiry: (state, action) => {
      state.validInsuranceExpiry = action.payload;
    },
    addAdvertisementExpiry: (state, action) => {
        state.advertisementExpiry = action.payload;
    },
    addValidAdvertisementExpiry: (state, action) => {
      state.validAdvertisementExpiry = action.payload;
    },
    addISOExpiry: (state, action) => {
        state.ISOExpiry = action.payload;
    },
    addValidISOExpiry: (state, action) => {
        state.validISOExpiry = action.payload;
    },    
  },
});

export default fleetRegistrationSlice.reducer;
export const {
  addRegistrationExpiry,
  addValidRegistrationExpiry,
  addInsuranceExpiry,
  addValidInsuranceExpiry,
  addAdvertisementExpiry,
  addValidAdvertisementExpiry,
  addISOExpiry,
  addValidISOExpiry,
} = fleetRegistrationSlice.actions;
