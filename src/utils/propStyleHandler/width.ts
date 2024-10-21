import { WidthProps } from "@uiTypes";
import { StyleReturnType } from "./styleReturnType";

export const getWidthStyle = <T extends WidthProps>({
  width,
}: T): StyleReturnType => {
  let classes: string = "";
  let inline: React.CSSProperties = {};

  if (typeof width === "undefined") {
    return { classes, inline };
  }

  if ("value" in width) {
    const { value, unit = "px" } = width;
    inline = { width: `${value}${unit}` };
  }

  return { classes, inline };
};
