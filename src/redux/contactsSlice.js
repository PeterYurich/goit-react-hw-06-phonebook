import { createSlice } from "@reduxjs/toolkit";

const contactInitialState = [
    { id: 0, name: 'Init', phone: 111111111 },
    { id: 1, name: 'Initial', phone: 222222222 }
]

const contactsSlice = createSlice({
    name: "contacts",
    initialState: contactInitialState,
    reducers: {
        addContact(state, action) {
                return state.push(action.payload);
            },
            // prepare({name, phone}) {
            //     return {
            //         payload: {
            //             name,
            //             phone,
            //             id: name,
            //         }
            //     }
            // }
        
        deleteContact(state, action) {
            const index = state.findIndex(contact => contact.id === action.payload);
            state.splice(index, 1);
        }
    }
})

export const { addContact, deleteContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;

console.log('contactsSlice', contactsSlice.actions)
