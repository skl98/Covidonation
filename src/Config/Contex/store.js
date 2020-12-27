import React, { createContext, useReducer } from 'react'


const initialState = {
    isBottomNavHide : false,
    isFromMiniContent: false
}

const store = createContext(initialState)

const { Provider } = store


const StateProvider = ({ children }) => {
    const [state, dispatch] = useReducer((state, action) => {
        switch (action.type) {
            case 'IS_HIDE':
                return { ...state, isBottomNavHide : action.payload }
            case 'IS_FROM_MINI_CONTENT':
                return { ...state, isFromMiniContent : action.payload }
            default:
                throw new Error();
        };
    }, initialState)

    return <Provider value={{ state, dispatch }}>{children}</Provider>;
}

export { store, StateProvider }