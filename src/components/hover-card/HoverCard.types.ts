import { TypographyComponentProps } from "@uiComponentTypes";
import { AnimationProps, ChildrenProps } from "@uiTypes";

export type HoverCardComponentProps = AnimationProps & Required<ChildrenProps>;

export type HoverCardHeadingComponentProps = Required<ChildrenProps> &
  TypographyComponentProps;

export type HoverCardBodyComponentProps = Required<ChildrenProps> &
  TypographyComponentProps;

export type OverlayComponentProps = Required<ChildrenProps> & AnimationProps;
