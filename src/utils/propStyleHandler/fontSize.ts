import { SizeOptions, ValueAndUnitProps } from "@uiTypes";
import { StyleReturnType } from "./styleReturnType";

export const getFontSizeStyle = <T extends ValueAndUnitProps | SizeOptions>(
  fontSize?: T
): StyleReturnType => {
  let classes: string = "";
  let inline: React.CSSProperties = {};

  if (typeof fontSize === "undefined") {
    return { classes, inline };
  }

  switch (typeof fontSize) {
    case "string":
      classes += `font-${fontSize}`;
      break;
    case "object":
      const { value, unit = "px" } = fontSize;
      inline = {
        ...(value ? { fontSize: `${value}${unit}` } : {}),
      };
      break;
  }

  return { classes, inline };
};
