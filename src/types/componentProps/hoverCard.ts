import { AnimationProps, RequireBaseProps, TypographyProps } from "@uiTypes";

export type HoverCardComponentProps = AnimationProps &
  RequireBaseProps<"children">;

export type HoverCardHeadingComponentProps = RequireBaseProps<"children"> &
  TypographyProps;

export type HoverCardBodyComponentProps = RequireBaseProps<"children"> &
  TypographyProps;

export type OverlayComponentProps = RequireBaseProps<"children"> &
  AnimationProps;
