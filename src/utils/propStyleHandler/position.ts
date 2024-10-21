import { PositionProps } from "@uiTypes";
import { StyleReturnType } from "./styleReturnType";

export const getPositionStyle = ({
  position,
}: PositionProps): StyleReturnType => {
  let classes: string = "";
  let inline: React.CSSProperties = {};

  if (typeof position === "undefined") {
    return { classes, inline };
  }
  const { top, right, bottom, left, position: pos } = position;

  inline = {
    ...(pos ? { position: `${pos}` } : {}),
    ...(top ? { top: checkValue(top.value, top.unit) } : {}),
    ...(right
      ? {
          right: checkValue(right.value, right.unit),
        }
      : {}),
    ...(bottom
      ? {
          bottom: checkValue(bottom.value, bottom.unit),
        }
      : {}),
    ...(left
      ? {
          left: checkValue(left.value, left.unit),
        }
      : {}),
  };
  return { classes, inline };
};

const checkValue = (
  val?: number,
  unit?: "px" | "%" | "rem" | "vh" | "vw" | "em"
): string => {
  if (val === 0) {
    return `0`;
  }
  return `${val}${unit ?? "px"}`;
};
