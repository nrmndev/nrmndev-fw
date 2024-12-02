import {
  AnimationProps,
  BackgroundProps,
  HeightProps,
  OpacityProps,
  PositionProps,
  TransformProps,
  TransitionProps,
  UtilityComponentProps,
  WidthProps,
} from "@uiTypes";

export type BackgroundContainerComponentProps = UtilityComponentProps<"div"> & {
  backgrounds?: string[];
};

export type BackgroundContainerShape = AnimationProps &
  BackgroundProps &
  TransformProps &
  TransitionProps &
  PositionProps &
  WidthProps &
  OpacityProps &
  HeightProps;
//  &
//   AsProps<"div" | "section" | "article" | "footer" | "header"> &
//   AriaAttributes &
//   HTMLAttributes<"div" | "section" | "article" | "footer" | "header">;
