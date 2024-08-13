import { AnchorTargetTypes, ButtonTypes } from "types/base/Button";

export interface ButtonProps {
  type?: ButtonTypes;
  onClick?: () => void;
}

export interface AnchorLinkProps {
  href: string;
  target?: AnchorTargetTypes;
}

export interface NavLinkProps {
  to: string;
}

interface AsButton extends ButtonProps {
  as?: "button";
  href?: never;
  target?: never;
  to?: never;
}

interface AsAnchorLink extends AnchorLinkProps {
  as: "anchorLink";
  to?: never;
  type?: never;
  onClick?: never;
}

interface AsNavLink extends NavLinkProps {
  as: "navLink";
  type?: never;
  onClick?: never;
  href?: never;
  target?: never;
}

type PolymorphicButtonProps = AsButton | AsAnchorLink | AsNavLink;

export default PolymorphicButtonProps;
