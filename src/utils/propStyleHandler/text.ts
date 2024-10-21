import { StyleReturnType } from "./styleReturnType";
import { TextProps } from "types/props/textProps";

export const getTextStyle = <T extends TextProps>({
  text,
}: T): StyleReturnType => {
  let classes: string = "";
  let inline: React.CSSProperties = {};

  if (!text) {
    return { classes, inline };
  }
  console.log(text);
  const { align, decoration, transform } = text;
  let textArray: string[] = [];
  align ? textArray.push(`text-${align}`) : ``;
  decoration ? textArray.push(`text-${decoration}`) : ``;
  transform ? textArray.push(`text-${transform}`) : ``;
  return { classes: textArray.join(" "), inline };
};
