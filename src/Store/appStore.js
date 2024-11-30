import { configureStore } from "@reduxjs/toolkit";
import navigationSlice from '../Store/navigationSlice';

const appStore = configureStore({
    reducer: {
        navigation: navigationSlice,
    },
})

export default appStore