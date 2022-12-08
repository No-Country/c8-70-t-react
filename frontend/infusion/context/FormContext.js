import React, { useState } from "react";

const FormContext = React.createContext();

const FormFunction = ({ children }) => {
  const [personalData, setPersonalData] = useState({});

  return (
    <FormContext.Provider
      value={{
        setPersonalData,
        personalData,
      }}
    >
      {children}
    </FormContext.Provider>
  );
};

export { FormContext, FormFunction };
