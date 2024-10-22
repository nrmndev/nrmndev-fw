import { IconComponentProps } from "@uiTypes";
import {
  BackgroundProps,
  BaseProps,
  BorderRadiusProps,
  ColorProps,
  PaddingProps,
  TypographyComponentProps,
} from "@uiTypes";

export type MediaComponentProps = BaseProps &
  BackgroundProps &
  BorderRadiusProps &
  ColorProps &
  PaddingProps & {
    icon: IconComponentProps & {
      position?: "top-left" | "left" | "right" | "top-center" | "top-right";
    };
    heading: TypographyComponentProps;
    body: TypographyComponentProps;
  };
