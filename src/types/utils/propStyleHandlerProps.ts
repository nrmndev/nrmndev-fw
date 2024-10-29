import {
  BackgroundProps,
  BorderProps,
  BorderRadiusProps,
  BoxShadowProps,
  ColorProps,
  ColumnBreakpointProps,
  ColumnItemsProps,
  DisplayProps,
  FlexProps,
  FontProps,
  HeightProps,
  MarginProps,
  PaddingProps,
  PositionProps,
  TextProps,
  WidthProps,
} from "@uiTypes";

export type PropStyleHandlerProps = BorderProps &
  BackgroundProps &
  BorderRadiusProps &
  BoxShadowProps &
  ColorProps &
  ColumnBreakpointProps &
  DisplayProps &
  FlexProps &
  HeightProps &
  FontProps &
  MarginProps &
  TextProps &
  PositionProps &
  WidthProps &
  PaddingProps &
  ColumnItemsProps & {
    className?: string;
    children?: React.ReactNode;
  };
