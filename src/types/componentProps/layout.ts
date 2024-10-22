import {
  BackgroundProps,
  BaseProps,
  BorderProps,
  BorderRadiusProps,
  ColumnBreakpointProps,
  FlexColumnProps,
  FlexProps,
  HeightProps,
  MarginProps,
  OverlayProps,
  PaddingProps,
  PositionProps,
  SizeOptions,
  WidthProps,
} from "@uiTypes";

export type RowComponentProps = BaseProps &
  FlexColumnProps &
  FlexProps &
  PositionProps;

export type ContainerComponentProps = BaseProps &
  BackgroundProps &
  BorderProps &
  BorderRadiusProps &
  FlexProps &
  OverlayProps &
  PaddingProps &
  PositionProps &
  WidthProps &
  HeightProps &
  MarginProps & { fluid?: boolean };

export type ColumnComponentProps = BaseProps &
  BackgroundProps &
  BorderProps &
  ColumnBreakpointProps &
  PaddingProps &
  MarginProps &
  FlexProps &
  PositionProps & { gap?: SizeOptions };
