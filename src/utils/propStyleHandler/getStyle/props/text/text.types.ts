export type TextTransformOptions = Exclude<
  React.CSSProperties["textTransform"],
  "-moz-initial" | "full-size-kana"
>;
export type TextTransformProps = {
  transform?: TextTransformOptions;
};

export type TextAlignOptions = Exclude<
  React.CSSProperties["textAlign"],
  "-moz-initial" | "-webkit-match-parent"
>;
export type TextAlignProps = {
  align?: TextAlignOptions;
};

export type TextDecorationOptions =
  | "none"
  | "dashed"
  | "underline"
  | "line-through";

export type TextShadowProps = {
  shadow?: "2px 2px 0px var(--white)" | "3px 3px 0px var(--primary)";
};

export type TextDecorationProps = {
  decoration?: TextDecorationOptions;
};

export type TextProps = {
  text?: TextDecorationProps &
    TextAlignProps &
    TextTransformProps &
    TextShadowProps;
};
