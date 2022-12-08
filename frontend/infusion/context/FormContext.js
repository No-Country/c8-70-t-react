import React, { useState } from "react";

const FormContext = React.createContext();

const FormFunction = ({ children }) => {
  const [personalData, setPersonalData] = useState({});
  const [shippingData, setShippingData] = useState({});

  return (
    <FormContext.Provider
      value={{
        setPersonalData,
        personalData,
        shippingData,
        setShippingData,
      }}
    >
      {children}
    </FormContext.Provider>
  );
};

export { FormContext, FormFunction };
