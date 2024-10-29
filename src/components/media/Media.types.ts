import {
  BackgroundProps,
  BorderRadiusProps,
  ColorProps,
  PaddingProps,
} from "@uiTypes";
import { IconComponentProps } from "@uiComponentTypes";
import { TypographyComponentProps } from "@uiComponentTypes";

export type MediaComponentProps = BackgroundProps &
  BorderRadiusProps &
  ColorProps &
  PaddingProps & {
    icon: IconComponentProps & {
      position?: "top-left" | "left" | "right" | "top-center" | "top-right";
    };
    heading: TypographyComponentProps;
    body: TypographyComponentProps;
  };
