import { createSlice } from "@reduxjs/toolkit";
const fleetRegistrationSlice = createSlice({
  name: "fleetRegistration",
  initialState: {
    plateNo: "",
    validPlateNo: false,
    chassisNo: "",
    validChassisNo: false,
    vehicleType: "",
    validVehicleType: false,
    manufacturer: "",
    validManufacturer: false,
    registrationExpiry: null,
    validRegistrationExpiry: false,
    insuranceExpiry: null,
    validInsuranceExpiry: false,
    advertisementExpiry: null,
    validAdvertisementExpiry: false,
    ISOExpiry: null,
    validISOExpiry: false,
    spareKey: "",
    validSpareKey: false,
    fleetRecord:"",
    filterFleetRecord:"",
    fireBaseId:"",
  },
  reducers: {
    addPlateNo: (state, action) => {
      state.plateNo = action.payload;
    },
    addValidPlateNo: (state, action) => {
      state.validPlateNo = action.payload;
    },
    addChassisNo: (state, action) => {
      state.chassisNo = action.payload;
    },
    addValidChassisNo: (state, action) => {
      state.validChassisNo = action.payload;
    },
    addVehicleType: (state, action) => {
      state.vehicleType = action.payload;
    },
    addValidVehicleType: (state, action) => {
      state.validVehicleType = action.payload;
    },
    addManufacturer: (state, action) => {
      state.manufacturer = action.payload;
    },
    addValidManufacturer: (state, action) => {
      state.validManufacturer = action.payload;
    },
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
    addSpareKey: (state, action) => {
      state.spareKey = action.payload;
    },
    addValidSpareKey: (state, action) => {
      state.validSpareKey = action.payload;
    },
    addFleetRecord: (state, action) => {
      state.fleetRecord = action.payload;
    },
    addFilterFleetRecord: (state, action) => {
      state.filterFleetRecord = action.payload;
    },
    addFireBaseId: (state, action) => {
      state.fireBaseId = action.payload;
    },
  },
});

export default fleetRegistrationSlice.reducer;
export const {
  addPlateNo,
  addValidPlateNo,
  addVehicleType,
  addValidVehicleType,
  addManufacturer,
  addValidManufacturer,
  addRegistrationExpiry,
  addValidRegistrationExpiry,
  addInsuranceExpiry,
  addValidInsuranceExpiry,
  addAdvertisementExpiry,
  addValidAdvertisementExpiry,
  addISOExpiry,
  addValidISOExpiry,
  addChassisNo,
  addValidChassisNo,
  addSpareKey,
  addValidSpareKey,
  addFleetRecord,
  addFilterFleetRecord,
  addFireBaseId,
} = fleetRegistrationSlice.actions;
