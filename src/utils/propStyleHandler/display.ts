import { DisplayOptions } from "@uiTypes";
import { StyleReturnType } from "./styleReturnType";

export const getDisplayStyle = (display?: DisplayOptions): StyleReturnType => {
  let classes: string = "";
  let inline: React.CSSProperties = {};
  if (!display) return { classes, inline };
  classes += `d-${display}`;
  return { classes, inline };
};
