import { HeightProps } from "@uiTypes";
import { StyleReturnType } from "./styleReturnType";

export const getHeightStyle = <T extends HeightProps>({
  height,
}: T): StyleReturnType => {
  let classes: string = "";
  let inline: React.CSSProperties = {};

  if (typeof height === "undefined") {
    return { classes, inline };
  }

  if ("value" in height) {
    const { value, unit = "px" } = height;
    inline = { height: `${value}${unit}` };
  }

  return { classes, inline };
};
