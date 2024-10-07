import { TextAlignOptions, TextTransformOptions } from "types/options";

export interface TextTransformProps {
  textTransform?: TextTransformOptions;
}

export interface TextAlignProps {
  textAlign?: TextAlignOptions;
}

export interface TypographyProps extends TextAlignProps, TextTransformProps {}
