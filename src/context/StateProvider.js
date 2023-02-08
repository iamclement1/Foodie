//context information

import { createContext, useContext, useReducer } from 'react';

export const stateContext = createContext();

//reducer and initial state context is being imported and the children is the component itself
export const StateProvider = ( {reducer, initialState, children} ) => {
    <stateContext.Provider value ={useReducer(reducer, initialState)} >
        { children }
    </stateContext.Provider>
}

export const useStateValue = () => useContext(stateContext)