import { configureStore } from "@reduxjs/toolkit";
import { contactsReducer } from "./contactsSlice";
import { filterReducer } from "./filterSlice";

// import { persistStore, persistReducer } from 'redux-persist'

export const store = configureStore({
    reducer: {
        contacts: contactsReducer,
        filter: filterReducer,
    }
})