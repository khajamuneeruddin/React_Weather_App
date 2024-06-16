import React, { createContext, useState } from "react";

const MyContext = createContext();

const MyProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <MyContext.Provider value={{ darkMode, setDarkMode }}>
      {children}
    </MyContext.Provider>
  );
};

export { MyProvider, MyContext };
