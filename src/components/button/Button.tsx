import { PolymorphicButtonProps } from "@proptypes";
// import AsAnchorLink from "./AsAnchorLink";
// import AsNavLink from "./AsNavLink";
import {
  BackgroundProps,
  BaseProps,
  BorderProps,
  BorderRadiusProps,
  ColorProps,
  FontSizeProps,
  MarginProps,
  PaddingProps,
} from "@uiTypes";
import classNames from "classnames";
import { NavLink } from "react-router-dom";
import { propStyleHandler } from "utils/propStyleHandler";

type ButtonSize = "sm" | "md" | "lg";

export interface IProps
  extends BaseProps,
    BorderProps,
    BorderRadiusProps,
    BackgroundProps,
    ColorProps,
    FontSizeProps,
    PaddingProps,
    MarginProps {
  variant?: "solid" | "outlined";
  display?: "block" | "inline-block";
  as?: "button" | "anchorLink" | "navLink";
  size?: ButtonSize;
}

type ExtendedIProps = IProps & PolymorphicButtonProps;

const Button = ({
  as: Component = "button",
  background = "primary",
  borderRadius,
  border,
  color,
  display,
  margin,
  padding,
  size = "md",
  variant = "solid",
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

  const className = classNames(
    "btn",
    `btn-${size}`,
    display && "btn--" + display,
    variant && (variant === "solid" ? "bg" : "outlined") + "-" + background,
    color && "color-" + color,
    propStyle.className
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
