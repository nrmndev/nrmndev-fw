// src/contexts/CssVariableContext.js
import React, { createContext, useEffect, useReducer } from "react";
// import { ComponentTemplateTypes } from "../theme.barrel.types";
import { themeProviderReducer } from "./themeProviderReducer";
import {
  ContextProviderProps,
  ContextValueType,
  CSSVariablesType,
  ThemeOptions,
  ThemeProviderReducerActionType,
} from "./ThemeProvider.types";
import { cssVariables } from "../theme.barrel.index";

// Initial value for useReducer
export const contextInitialState: ContextValueType = {
  theme: "light",
  //componentTemplate: {} as ComponentTemplateTypes,
  cssVariables: cssVariables,
};

//The context
export const ThemeContext = createContext<{
  theme?: ThemeOptions;
  //componentTemplate?: ComponentTemplateTypes;
  cssVariables?: CSSVariablesType;
  dispatch: React.Dispatch<ThemeProviderReducerActionType>;
}>({
  theme: "light", // Set default theme here
  //componentTemplate: contextInitialState.componentTemplate,
  cssVariables: contextInitialState.cssVariables,
  dispatch: () => {}, // No-op dispatch function as default
});

export const ThemeContextProvider = ({
  children,
  value,
}: ContextProviderProps) => {
  const [variables, dispatch] = useReducer(themeProviderReducer, {
    ...contextInitialState,
    ...value, // Override initial state with provided value
    theme: contextInitialState.theme as ThemeOptions,
  });
  //Check localStorage if defined use it else use variables.theme
  useEffect(() => {
    const localTheme = localStorage.getItem("theme");
    document.body.setAttribute(
      "data-theme",
      localTheme ?? (variables.theme as ThemeOptions)
    );
  }, [variables]);

  return (
    <ThemeContext.Provider value={{ ...variables, dispatch }}>
      {children}
    </ThemeContext.Provider>
  );
};

//injecting style to HTML, not ideal
// type ThemeVariables = {
//   "--background-color": string;
//   "--text-color": string;
//   // Add more variables as needed
// };
// useEffect(() => {
//   const root = document.documentElement;
//   const themeVariables =
//     variables.CSSRootVariables[variables.Theme || "light"];

//   // Apply each variable for the selected theme
//   (Object.keys(themeVariables) as Array<keyof ThemeVariables>).forEach(
//     (key) => {
//       root.style.setProperty(key, themeVariables[key]);
//     }
//   );

//   // Optional: Set the data attribute on the root element for theme
//   //root.setAttribute("data-theme", variables.Theme || "light");
// }, [variables.Theme]);
