// src/contexts/CssVariableContext.js
import React, { createContext, useState, useEffect } from "react";

export interface CssVariables {
  [key: string]: string;
}

export const CssVariableContext = createContext<{
  variables: CssVariables;
  setVariables: React.Dispatch<React.SetStateAction<CssVariables>>;
}>({
  variables: {},
  setVariables: () => {},
});

export interface IProviderProps {
  children: React.ReactNode;
  value?: { [key: string]: string };
}

export const CssVariableProvider = ({ children, value }: IProviderProps) => {
  const [variables, setVariables] = useState<CssVariables>({
    ...value,
  });

  useEffect(() => {
    const root = document.documentElement;
    Object.keys(variables).forEach((key) => {
      root.style.setProperty(key, variables[key]);
    });
  }, [variables]);

  return (
    <CssVariableContext.Provider value={{ variables, setVariables }}>
      {children}
    </CssVariableContext.Provider>
  );
};
