import {
  BackgroundProps,
  BorderProps,
  BorderRadiusProps,
  BoxShadowProps,
  ColorProps,
  ColumnBreakpointOptions,
  //ColumnBreakpointProps,
  ColumnItemsProps,
  DisplayProps,
  FlexProps,
  FluidProps,
  FontProps,
  GapProps,
  HeightProps,
  MarginProps,
  OpacityProps,
  OverlayProps,
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
  ColumnBreakpointOptions &
  FluidProps &
  DisplayProps &
  FlexProps &
  HeightProps &
  FontProps &
  MarginProps &
  TextProps &
  PositionProps &
  WidthProps &
  PaddingProps &
  OpacityProps &
  GapProps &
  OverlayProps &
  ColumnItemsProps & {
    className?: string;
    children?: React.ReactNode;
  };
