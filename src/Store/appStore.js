import { configureStore } from "@reduxjs/toolkit";
import navigationSlice from '../Store/navigationSlice';
import registrationSlice from '../Store/registrationSlice';

const appStore = configureStore({
    reducer: {
        navigation: navigationSlice,
        registration:registrationSlice,
    },
})

export default appStore