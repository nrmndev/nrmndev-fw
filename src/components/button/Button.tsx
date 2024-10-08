import { PolymorphicButtonProps } from "@proptypes";
// import AsAnchorLink from "./AsAnchorLink";
// import AsNavLink from "./AsNavLink";
import {
  BackgroundProps,
  BaseProps,
  BorderProps,
  BorderRadiusProps,
  ButtonProps,
  ColorProps,
  FontSizeProps,
  MarginProps,
  PaddingProps,
} from "@uiTypes";
import classNames from "classnames";
import { NavLink } from "react-router-dom";
import { propStyleHandler } from "utils/propStyleHandler";

// type ButtonSize = "sm" | "md" | "lg";
// type ButtonVariant =
//   | "solid-primary"
//   | "solid-secondary"
//   | "solid-accent-1"
//   | "solid-accent-2"
//   | "solid-accent-3"
//   | "solid-dark"
//   | "solid-white";
export interface IProps
  extends BaseProps,
    ButtonProps,
    BorderProps,
    BorderRadiusProps,
    BackgroundProps,
    ColorProps,
    FontSizeProps,
    PaddingProps,
    MarginProps {
  // variant?: "solid" | "outlined";
  // size?: ButtonSize;
  display?: "block" | "inline-block";
  as?: "button" | "anchorLink" | "navLink";
}

type ExtendedIProps = IProps & PolymorphicButtonProps;

const Button = ({
  as: Component = "button",
  background,
  borderRadius,
  border,
  color,
  display,
  margin,
  padding,
  size = "md",
  variant = "solid-primary",
  fontSize,
  ...rest
}: ExtendedIProps) => {
  const { href, to = "/404", target, type = "button" } = rest;

  const propStyle = propStyleHandler({
    userStyle: rest.style,
    padding,
    border,
    background,
    borderRadius,
    fontSize,
    margin,
  });
  //console.log(propStyle.className);
  const className = classNames(
    "btn",
    `btn-${size}`,
    display && "btn--" + display,
    variant && "btn-" + variant,
    color && "color-" + color,
    propStyle.className,
    rest.className
  );

  const conditionalProps: {} = {
    ...rest,
    className: className,
    style: propStyle.inline,
    ...(Component === "anchorLink" && { href: href, target: target }),
    ...(Component === "button" && { type: type }),
    ...(Component === "navLink" && { to: to }),
  };

  if (Component === "button") return <button {...conditionalProps} />;
  if (Component === "anchorLink") return <a {...conditionalProps} />;
  if (Component === "navLink") return <NavLink to={to} {...conditionalProps} />;
};

export default Button;
