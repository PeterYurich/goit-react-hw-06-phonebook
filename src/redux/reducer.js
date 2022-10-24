const contactsInitialState = [];

export const tasksReducer = (state = contactsInitialState, action) => {
    switch (action.type) {
        case "contacts/addContact":
            return [ ...state, action.payload];
    }
}

export const rootReducer = () => {
    return ''
}