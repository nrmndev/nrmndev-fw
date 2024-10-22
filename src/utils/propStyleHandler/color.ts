import { ColorOptions, ColorProps } from "@uiTypes";
import { StyleReturnType } from "./styleReturnType";

export const getColorStyle = <T extends ColorProps>({
  color,
}: T): StyleReturnType => {
  let classes: string = "";
  let inline: React.CSSProperties = {};

  if (typeof color === "undefined") {
    return { classes, inline };
  }

  console.log(color);
  switch (typeof color) {
    case "string":
      switch (color) {
        case "gradient-1":
        case "gradient-2":
        case "gradient-3":
          classes += `bg-clip-${color}`;
          break;
        default:
          classes += `color-${color}`;
          break;
      }

      break;
    case "object":
      //let { top, right, bottom, left, unit } = color;
      inline = {
        // ...(top ? { paddingTop: `${top}${unit}` } : {}),
        // ...(right ? { paddingRight: `${right}${unit}` } : {}),
        // ...(bottom ? { paddingBottom: `${bottom}${unit}` } : {}),
        // ...(left ? { paddingLeft: `${left}${unit}` } : {}),
      };
      break;
  }

  return { classes, inline };
};
