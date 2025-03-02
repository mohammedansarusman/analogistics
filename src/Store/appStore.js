import { configureStore } from "@reduxjs/toolkit";
import navigationSlice from '../Store/navigationSlice';
import registrationSlice from '../Store/registrationSlice';
import fleetRegistrationSlice from '../Store/fleetRegistrationSlice';
import priceSlice from '../Store/priceSlice';

const appStore = configureStore({
    reducer: {
        navigation: navigationSlice,
        registration:registrationSlice,
        fleetRegistration:fleetRegistrationSlice,
        price: priceSlice,  
    },
})

export default appStore