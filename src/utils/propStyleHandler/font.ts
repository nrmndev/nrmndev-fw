import { FontProps } from "@uiTypes";
import { StyleReturnType } from "./styleReturnType";

export const getFontStyle = <T extends FontProps>({
  font,
}: T): StyleReturnType => {
  let classes: string[] = [];
  let inline: React.CSSProperties = {};

  if (typeof font === "undefined") {
    return { classes: "", inline };
  }

  if (typeof font === "string") {
    classes.push(`font-${font}`);
  }
  if (typeof font === "object") {
    const { family = "Montserrat", lineHeight, size, style, weight } = font;
    let valueOfSize: string = "";
    if (typeof size === "object") {
      const { value, unit = "px" } = size;
      valueOfSize = `${value}${unit}`;
    } else {
      valueOfSize = `var(--font-${size ?? "md"})`;
    }

    inline = {
      font: `${style ?? ""} ${weight ?? ""} ${valueOfSize}${
        lineHeight ? `/${lineHeight}` : ``
      } ${family}`,
    };
  }

  return { classes: classes.join(" "), inline };
};
