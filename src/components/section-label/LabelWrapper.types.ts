import {
  ColorOptions,
  IncrementOf5Options,
  SizeOptions,
  UtilityPartialProps,
} from "@uiTypes";
import { IconType } from "react-icons";

export type LabelWrapperComponentProps = UtilityPartialProps<
  "color" | "font",
  "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span"
> & {
  label: string;
  leftDecoration?: {
    Icon?: IconType;
    color?: ColorOptions;
  };
  rightDecoration?: {
    Icon?: IconType;
    color?: ColorOptions | undefined;
  };
  textBackdrop?: {
    size?: SizeOptions;
    opacity?: IncrementOf5Options;
    color?: ColorOptions;
    label: string;
  };
};
