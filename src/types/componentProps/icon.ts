import {
  SizeOptions,
  BackgroundProps,
  BaseProps,
  ColorProps,
  MarginProps,
} from "@uiTypes";
import { IconType } from "react-icons";

export type IconComponentProps = Omit<BaseProps, "children"> &
  BackgroundProps &
  ColorProps &
  MarginProps & {
    icon: IconType | string; // Use IconType for react-icons
    iconSize?: SizeOptions;
    rounded?: boolean;
    variant?: "solid" | "outline";
  };
