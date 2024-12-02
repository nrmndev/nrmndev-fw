import {
  AnimationProps,
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
  HoverProps,
  MarginProps,
  OpacityProps,
  OverlayProps,
  PaddingProps,
  PositionProps,
  RoundedProps,
  SizeProps,
  TextProps,
  TransformProps,
  TransitionProps,
  TranslateProps,
  WidthProps,
} from "_uiTypes";

export type PropStyleHandlerProps = AnimationProps &
  BackgroundProps &
  BorderProps &
  BorderRadiusProps &
  BoxShadowProps &
  ColorProps &
  ColumnBreakpointOptions &
  ColumnItemsProps &
  DisplayProps &
  FlexProps &
  FluidProps &
  FontProps &
  GapProps &
  RoundedProps &
  HeightProps &
  HoverProps &
  MarginProps &
  OpacityProps &
  OverlayProps &
  PaddingProps &
  PositionProps &
  SizeProps &
  TextProps &
  TransitionProps &
  TransformProps &
  TranslateProps &
  WidthProps;

export type USXProps = {
  usx?: PropStyleHandlerProps;
};
