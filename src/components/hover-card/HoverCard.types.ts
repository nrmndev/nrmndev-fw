import { AnimationProps, ChildrenProps, TypographyProps } from "@uiTypes";

export type HoverCardComponentProps = AnimationProps & Required<ChildrenProps>;

export type HoverCardHeadingComponentProps = Required<ChildrenProps> &
  TypographyProps;

export type HoverCardBodyComponentProps = Required<ChildrenProps> &
  TypographyProps;

export type OverlayComponentProps = Required<ChildrenProps> & AnimationProps;
