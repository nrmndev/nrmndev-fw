import { IconType } from "react-icons";
import {
  ColorOptions,
  IncrementOf5Options,
  SizeOptions,
  TemplateProps,
  UtilityPartialProps,
} from "@uiTypes";

type DecorationsProps = {
  decoration?: {
    //top?: { color?: ColorOptions; Icon?: IconType };
    //bottom?: { color?: ColorOptions; Icon?: IconType };
    right?: { color?: ColorOptions; Icon?: IconType };
    left?: { color?: ColorOptions; Icon?: IconType };
    textBackdrop?: {
      size?: SizeOptions;
      opacity?: IncrementOf5Options;
      color?: ColorOptions;
      label?: string;
    };
  };
};

export type SectionLabelComponentProps = UtilityPartialProps<
  "color" | "font",
  "h1" | "h2" | "h3" | "h4" | "h5" | "h6"
> &
  DecorationsProps & {
    label?: string;
    position?: "left" | "center" | "right";
  } & TemplateProps;
