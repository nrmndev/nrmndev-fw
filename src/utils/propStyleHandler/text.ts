import {
  TextAlignProps,
  TextDecorationProps,
  TextTransformProps,
} from "@uiTypes";
import { StyleReturnType } from "./styleReturnType";

type TextClassesProps = TextAlignProps &
  TextTransformProps &
  TextDecorationProps;

export const getTextStyle = <T extends TextClassesProps>({
  textAlign,
  textTransform,
  textDecoration,
}: T): StyleReturnType => {
  let classes: string = "";
  let inline: React.CSSProperties = {};

  if (!textAlign && !textTransform && !textDecoration) {
    return { classes, inline };
  }
  let textArray: string[] = [];
  textAlign ? textArray.push(`text-${textAlign}`) : ``;
  textTransform ? textArray.push(`text-${textTransform}`) : ``;
  textDecoration ? textArray.push(`text-${textDecoration}`) : ``;
  return { classes: textArray.join(" "), inline };
};
