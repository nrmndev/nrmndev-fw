import { SizeOptions } from "@uiTypes";
import { StyleReturnType } from "./styleReturnType";

type BorderRadius = {
  topLeft?: number;
  topRight?: number;
  bottomRight?: number;
  bottomLeft?: number;
  unit?: "px" | "%" | "rem";
};

export const getBorderRadiusStyle = <T extends BorderRadius | SizeOptions>(
  borderRadius?: T
): StyleReturnType => {
  let classes: string = "";
  let inline: React.CSSProperties = {};

  if (typeof borderRadius === "undefined") {
    return { classes, inline };
  }

  switch (typeof borderRadius) {
    case "string":
      classes += `br-${borderRadius}`;
      break;
    case "object":
      const {
        topRight,
        topLeft,
        bottomRight,
        bottomLeft,
        unit = "px",
      } = borderRadius;
      inline = {
        ...(topRight ? { borderTopRightRadius: `${topRight}${unit}` } : {}),
        ...(topLeft ? { borderTopLeftRadius: `${topLeft}${unit}` } : {}),
        ...(bottomRight
          ? { borderBottomRightRadius: `${bottomRight}${unit}` }
          : {}),
        ...(bottomLeft
          ? { borderBottomLeftRadius: `${bottomLeft}${unit}` }
          : {}),
      };
      break;
  }

  return { classes, inline };
};
