import classNames from "classnames";
import { UtilityStyledComponent } from "@uiComponents";
import { NavLink } from "react-router-dom";
import { ButtonComponentProps } from "@uiComponentTypes";

const Button = ({
  as: Component = "button",
  display,
  size = "md",
  variant = "solid-primary",
  href,
  target,
  type = "button",
  to = "/404",
  ...utilityProps
}: ButtonComponentProps) => {
  const className = classNames(
    "btn",
    `btn-${size}`,
    display && "btn--" + display,
    variant && "btn-" + variant
  );

  const conditionalProps: {} = {
    ...utilityProps,
    ...(Component === "anchorLink" && { href: href, target: target }),
    ...(Component === "button" && { type: type }),
    ...(Component === "navLink" && { to: to }),
  };

  if (Component === "button")
    return (
      <UtilityStyledComponent
        as="button"
        {...conditionalProps}
        className={className}
      />
    );
  if (Component === "anchorLink")
    return (
      <UtilityStyledComponent
        as="a"
        {...conditionalProps}
        className={className}
      />
    );
  if (Component === "navLink")
    return <NavLink to={to} {...conditionalProps} className={className} />;
  //return <UtilityStyledComponent as={NavLink} to={to} {...conditionalProps} className={className} />;
};

export default Button;
