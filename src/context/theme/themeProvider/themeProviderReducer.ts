import {
  ContextValueType,
  ThemeProviderReducerActionType,
} from "./ThemeProvider.types";

//The reducer
export const themeProviderReducer = (
  state: ContextValueType,
  action: ThemeProviderReducerActionType
) => {
  //if (!action.payload) return state;
  localStorage.setItem("theme", action.payload);
  return { ...state, theme: action.payload };
};
