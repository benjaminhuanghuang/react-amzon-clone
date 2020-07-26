// setup data layer

import React, { createContext, useContext, useReducer } from "react";

// Data 
export const StateContext  = createContext();


// Build provider
export const StateProvider = ({reducer, initialState, children}) =>(
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
)

// Use data in component
export const useStateValue = () => useContext(StateContext);
