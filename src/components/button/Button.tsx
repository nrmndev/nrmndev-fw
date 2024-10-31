import classNames from "classnames";
import { UtilityStyledComponent } from "@uiComponents";
import { NavLink } from "react-router-dom";
import { ButtonComponentProps } from "@uiComponentTypes";
import { forwardRef } from "react";

const Button = (
  {
    as,
    display,
    size = "md",
    variant = "solid-primary",
    href,
    target,
    type = "button",
    to = "/404",
    ...utilityProps
  }: ButtonComponentProps,
  ref?: React.Ref<HTMLButtonElement>
) => {
  const className = classNames(
    "btn",
    `btn-${size}`,
    display && "btn--" + display,
    variant && "btn-" + variant
  );

  const Component = as === "navLink" ? NavLink : as || "button";

  const conditionalProps = {
    ...(as === "button" && { type }),
    ...(as === "a" && { href, target }),
    ...(as === "navLink" && { to }),
  };
  const commonProps = {
    ...utilityProps,
    className: className,
  };

  return (
    <UtilityStyledComponent
      as={Component}
      {...commonProps}
      {...conditionalProps}
      ref={ref as React.Ref<HTMLButtonElement | HTMLAnchorElement>}
    />
  );
};

export default forwardRef(Button);
