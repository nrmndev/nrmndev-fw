import {
  AsImgProps,
  BaseProps,
  BorderProps,
  BorderRadiusProps,
  DisplayProps,
  HeightProps,
  WidthProps,
} from "@uiTypes";

export type ImageComponentProps = Omit<BaseProps, "children"> &
  DisplayProps &
  AsImgProps &
  BorderProps &
  BorderRadiusProps &
  WidthProps &
  HeightProps;
