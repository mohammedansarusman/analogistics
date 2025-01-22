import { createSlice } from "@reduxjs/toolkit";
const fleetRegistrationSlice = createSlice({
    name: "fleetRegistration",
    initialState: {
        registrationExpiry:null,
    },
    reducers: {
        addRegistrationExpiry: (state, action) => {
            state.registrationExpiry = action.payload;
        },
    }
})

export default fleetRegistrationSlice.reducer;
export const { addRegistrationExpiry } = fleetRegistrationSlice.actions;