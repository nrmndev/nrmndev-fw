import { useContext } from "react";
import { CssVariableContext } from "./CssProvider";

export const useCssVariables = () => useContext(CssVariableContext);
