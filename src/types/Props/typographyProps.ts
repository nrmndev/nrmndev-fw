import { ColorProps, FontSizeProps } from "@uiTypes";

export type TextTransformOptions = "uppercase" | "capitalize" | "lowercase";
export type TextTransformProps = {
  textTransform?: TextTransformOptions;
};

export type TextAlignOptions = "left" | "center" | "right";
export type TextAlignProps = {
  textAlign?: TextAlignOptions;
};

export type TextDecorationOptions =
  | "none"
  | "dashed"
  | "underline"
  | "line-through";
export type TextDecorationProps = {
  textDecoration?: TextDecorationOptions;
};

export type TextAsProps = {
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span";
};

export type TextWithBackgroundClipProps = {};
export type TypographyProps = {} & FontSizeProps &
  ColorProps &
  TextAlignProps &
  TextAsProps &
  TextTransformProps;
