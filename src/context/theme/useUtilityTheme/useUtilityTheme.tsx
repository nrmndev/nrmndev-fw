import { useContext } from "react";

import { ThemeContext } from "../theme.barrel.index";

export const useUtilityTheme = () => useContext(ThemeContext);
