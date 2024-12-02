// import { ComponentTemplateTypes } from "./componentTemplate.types";

// export interface CssVariables {
//   [key: string]: string;
// }
// type CSSVariablesType = {
//   light: CssVariables;
//   dark: CssVariables;
// };
export type ThemeOptions = "light" | "dark" | "custom1" | "custom2" | "custom3";

//The shape of Context `value`
export interface ContextValueType {
  theme?: ThemeOptions;
  //componentTemplate?: ComponentTemplateTypes;
  cssVariables?: CSSVariablesType;
}

//The props of ThemeProvider
export interface ContextProviderProps {
  children: React.ReactNode;
  value?: {
    theme?: ThemeOptions;
    //componentTemplate?: ComponentTemplateTypes;
    cssVariables?: CSSVariablesType;
  };
}

//Actiontype for reducer
export type ThemeProviderReducerActionType = {
  type: "Update_Theme";
  payload: ThemeOptions;
};

export type CSSVariablesType = {
  light?: {
    primary?: string;
  };
  dark?: {
    primary?: string;
  };
  custom1?: {
    primary?: string;
  };
  custom2?: {
    primary?: string;
  };
  custom3?: {
    primary?: string;
  };
};
