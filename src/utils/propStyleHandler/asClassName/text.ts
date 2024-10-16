import {
  TextAlignProps,
  TextDecorationProps,
  TextTransformProps,
} from "@uiTypes";

type TextClassesProps = TextAlignProps &
  TextTransformProps &
  TextDecorationProps;

export const textClasses = ({
  textAlign,
  textTransform,
  textDecoration,
}: TextClassesProps): string => {
  if (!textAlign && !textTransform && !textDecoration) return "";

  let classes: string[] = [];
  textAlign && classes.push(`text-${textAlign}`);
  textTransform && classes.push(`text-${textTransform}`);
  textDecoration && classes.push(`text-${textDecoration}`);

  return classes.join(" ");
};
