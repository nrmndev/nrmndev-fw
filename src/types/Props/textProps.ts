export type TextTransformOptions = "uppercase" | "capitalize" | "lowercase";
export type TextTransformProps = {
  transform?: TextTransformOptions;
};

export type TextAlignOptions = "left" | "center" | "right";
export type TextAlignProps = {
  align?: TextAlignOptions;
};

export type TextDecorationOptions =
  | "none"
  | "dashed"
  | "underline"
  | "line-through";

export type TextDecorationProps = {
  decoration?: TextDecorationOptions;
};

export type TextProps = {
  text?: TextDecorationProps & TextAlignProps & TextTransformProps;
};
