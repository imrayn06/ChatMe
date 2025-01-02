import React, { createContext, useState, useContext } from "react";


const AppContext = createContext();

export const Provider = ({ children }) => {
  const [state, setState] = useState({
    theme: "light",
    user: null,
  });

  const toggleTheme = () => {
    setState((prevState) => ({
      ...prevState,
      theme: prevState.theme === "light" ? "dark" : "light",
    }));
  };

  return (
    <AppContext.Provider value={{ state, setState, toggleTheme }}>
      {children}
    </AppContext.Provider>
  );
};
export const useAppContext = () => useContext(AppContext);
