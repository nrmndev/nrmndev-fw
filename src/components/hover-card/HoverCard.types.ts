import { TypographyComponentProps } from "@uiComponentTypes";
import { AnimationProps, ChildrenProps, PickUtilityProps } from "@uiTypes";

export type HoverCardComponentProps = PickUtilityProps<"children"> &
  AnimationProps &
  Required<ChildrenProps>;

export type HoverCardHeadingComponentProps = Required<ChildrenProps> &
  TypographyComponentProps;

export type HoverCardBodyComponentProps = Required<ChildrenProps> &
  TypographyComponentProps;

export type OverlayComponentProps = Required<ChildrenProps> & AnimationProps;
