import {
  AnimationProps,
  DisplayProps,
  HeightProps,
  HoverProps,
  MarginProps,
  PaddingProps,
  TransformProps,
  TransitionProps,
  TranslateProps,
  WidthProps,
} from "_uiTypes";

export type UtilityBaseProps = MarginProps &
  PaddingProps &
  DisplayProps &
  AnimationProps &
  TranslateProps &
  TransformProps &
  TransitionProps &
  HoverProps &
  WidthProps &
  HeightProps;
