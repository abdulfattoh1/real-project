import React, { createContext, useContext, useReducer } from "react";
import { reducer } from "../reducer/reducer";

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const initialState = {
    loading: false,
    data: [],
  };
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <AppContext.Provider value={{ ...state }}>{children}</AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppProvider, AppContext };
