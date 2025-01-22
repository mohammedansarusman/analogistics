import { configureStore } from "@reduxjs/toolkit";
import navigationSlice from '../Store/navigationSlice';
import registrationSlice from '../Store/registrationSlice';
import fleetRegistrationSlice from '../Store/fleetRegistrationSlice';

const appStore = configureStore({
    reducer: {
        navigation: navigationSlice,
        registration:registrationSlice,
        fleetRegistration:fleetRegistrationSlice,
    },
})

export default appStore