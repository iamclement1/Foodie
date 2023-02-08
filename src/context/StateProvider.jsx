//context information

import React, { createContext, useContext, useReducer } from "react";

export const StateContext = createContext();

//reducer and initial state context is being imported and the children is the component itself
export const StateProvider = ({ reducer, initialState, children }) => (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
);

export const useStateValue = () => useContext(StateContext);
// i don't need to import useContext, I can directly use the useStateValue and dispatchState + use the child parameter




