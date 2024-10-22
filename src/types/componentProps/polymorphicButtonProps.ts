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
