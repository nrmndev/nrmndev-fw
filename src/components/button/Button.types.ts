import { PickUtilityProps, SizeOptions } from "@uiTypes";

type ButtonSize = SizeOptions;
type ButtonVariant =
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

export type ButtonProps = {
  size?: ButtonSize;
  variant?: ButtonVariant;
};

import { AnchorTargetOptions, ButtonTypeOptions } from "@uiTypes";

export type ButtonProp = {
  type?: ButtonTypeOptions;
  onClick?: () => void;
};

export type AnchorLinkProps = {
  href: string;
  target?: AnchorTargetOptions;
};

export type NavLinkProps = {
  to: string;
};

type AsButton = ButtonProp & {
  as?: "button";
  href?: never;
  target?: never;
  to?: never;
};

type AsAnchorLink = AnchorLinkProps & {
  as: "anchorLink";
  to?: never;
  type?: never;
  onClick?: never;
};

type AsNavLink = NavLinkProps & {
  as: "navLink";
  type?: never;
  onClick?: never;
  href?: never;
  target?: never;
};

export type PolymorphicButtonProps = AsButton | AsAnchorLink | AsNavLink;

export type ButtonComponentProps = PickUtilityProps<
  | "border"
  | "borderRadius"
  | "background"
  | "color"
  | "font"
  | "padding"
  | "margin"
  | "display"
  | "children"
> &
  PolymorphicButtonProps &
  ButtonProps;
