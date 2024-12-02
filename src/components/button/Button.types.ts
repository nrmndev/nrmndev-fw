import {
  ChildrenProps,
  ComponentAsProps,
  SizeOptions,
  UtilityComponentProps,
} from "_uiTypes";

import { HTMLAttributes } from "react";
import { NavLink } from "react-router-dom";
import { LinkProps } from "react-scroll";

export type ButtonVariant =
  | "flat"
  | "solid-primary"
  | "solid-secondary"
  | "solid-accent-1"
  | "solid-accent-2"
  | "solid-accent-3"
  | "solid-dark"
  | "solid-white"
  | "solid-black"
  | "solid-light"
  | "outline-primary"
  | "outline-secondary"
  | "outline-accent-1"
  | "outline-accent-2"
  | "outline-accent-3"
  | "outline-dark"
  | "outline-white"
  | "outline-black"
  | "outline-light";

export type ButtonTypeOptions = "submit" | "button" | "reset";
export type AnchorTargetOptions = "_blank" | "_self" | "_parent" | "_top";

export type ButtonProps = {
  size?: SizeOptions;
  variant?: ButtonVariant;
};

export type AnchorLinkProps = {
  href: string;
  target?: AnchorTargetOptions;
};

export type AsButton = {
  type?: ButtonTypeOptions;
  href?: never;
  target?: never;
  to?: never;
};

export type AsAnchorLink = {
  href: string;
  target?: AnchorTargetOptions;
  to?: never;
  type?: never;
  onClick?: never;
};

export type AsNavLink = {
  to: string;
  type?: never;
  onClick?: never;
  href?: never;
  target?: never;
};

export type AsSpyScrollLink = {
  to: string;
  spy?: boolean;
  smooth?: boolean;
};
export type ComponentAsNavLinkProps = ComponentAsProps<"navLink", AsNavLink>;
export type ComponentAsAnchorLinkProps = ComponentAsProps<"a", AsAnchorLink>;
export type ComponentAsButtonProps = ComponentAsProps<"button", AsButton>;
export type ComponentAsSpyScrollLinkProps = ComponentAsProps<"link", LinkProps>;

export type PolymorphicButtonProps =
  | ComponentAsNavLinkProps
  | ComponentAsAnchorLinkProps
  | ComponentAsButtonProps;
//| ComponentAsSpyScrollLinkProps;

export type ButtonComponentProps = UtilityComponentProps<
  "button" | "a" | typeof NavLink
> &
  PolymorphicButtonProps &
  ButtonProps &
  HTMLAttributes<"button" | "a"> &
  ChildrenProps;

// export type ButtonComponentProps = PickUtilityProps<
//   | "border"
//   | "borderRadius"
//   | "background"
//   | "color"
//   | "font"
//   | "padding"
//   | "margin"
//   | "display"
//   | "children"
//   | "hover"
// > &
//   PolymorphicButtonProps &
//   ButtonProps &
//   HTMLAttributes<"button" | "anchor"> &
//   TemplateProps &
//   UtilityBaseProps &
//   TransitionProps &
//   TransformProps;
