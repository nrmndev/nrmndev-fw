import { TypographyComponentProps } from "components/component.barrel.types";
import { AnimationProps, ChildrenProps, UtilityComponentProps } from "_uiTypes";

export type HoverCardComponentProps = UtilityComponentProps<"div"> &
  AnimationProps;

export type HoverCardHeadingComponentProps = Required<ChildrenProps> &
  TypographyComponentProps;

export type HoverCardBodyComponentProps = Required<ChildrenProps> &
  TypographyComponentProps;

export type OverlayComponentProps = Required<ChildrenProps> & AnimationProps;
