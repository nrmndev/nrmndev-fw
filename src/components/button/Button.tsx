import classNames from "classnames";
import { UtilityStyledComponent } from "@uiComponents";
import { NavLink } from "react-router-dom";
import { ButtonComponentProps } from "@uiComponentTypes";
import { forwardRef } from "react";

const Button = (
  {
    as: Component = "button",
    display,
    size = "md",
    variant = "solid-primary",
    href,
    target,
    type = "button",
    to = "/404",
    ...utilityProps
  }: ButtonComponentProps,
  ref?: React.Ref<React.ElementRef<"button">>
) => {
  const className = classNames(
    "btn",
    `btn-${size}`,
    display && "btn--" + display,
    variant && "btn-" + variant
  );

  const conditionalProps = {
    ...utilityProps,
    ...(Component === "a" && { href: href, target: target }),
    ...(Component === "button" && { type: type }),
    ...(Component === "navLink" && { to: to }),
  };

  if (Component === "button" || Component === "a")
    return (
      <UtilityStyledComponent
        as={Component}
        {...conditionalProps}
        className={className}
        ref={ref}
      />
    );
  if (Component === "navLink")
    return <NavLink to={to} {...conditionalProps} className={className} />;
  //return <UtilityStyledComponent as={NavLink} to={to} {...conditionalProps} className={className} />;
};

export default forwardRef(Button);
