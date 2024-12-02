import { forwardRef } from "react";
import { NavLink } from "react-router-dom";
import classNames from "classnames";

import { UtilityStyledComponent } from "components/component.barrel.index";
import { ButtonComponentProps } from "components/component.barrel.types";

const Button = (
  {
    as,
    size,
    variant = "solid-primary",
    href,
    target,
    type = "button",
    to = "/404",
    ...utilityProps
  }: ButtonComponentProps,
  ref?: React.Ref<HTMLButtonElement>
) => {
  // const {
  //   as,
  //   display,
  //   size,
  //   variant = "solid-primary",
  //   href,
  //   target,
  //   type = "button",
  //   to = "/404",
  //   ...utilityProps
  // } = usx!;

  const className = classNames(
    "btn"
    //`btn-${size}`,
    // display && "btn--" + display
    //variant && "btn-" + variant
  );
  const Component = getComponentByType(as || "button");
  //const Component = as === "navLink" ? NavLink : as || "button";

  const conditionalProps = {
    ...(as === "button" && { type }),
    ...(as === "a" && { href, target }),
    ...(as === "navLink" && { to }),
    //...((as === "navLink" || as === "link") && { to }),
  };
  const commonProps = {
    ...utilityProps,
    className: className,
  };

  // const componentTemplate = useComponentTemplate(
  //   "button",
  //   template || 0
  // ) as ButtonComponentProps;
  // const { size: sizeAspadding, ...componentTemplateSizeAsPadding } =
  //   componentTemplate;

  return (
    <UtilityStyledComponent
      as={Component}
      {...{
        // ...componentTemplateSizeAsPadding,
        // padding: sizeAspadding,
        ...commonProps,
        ...conditionalProps,
      }}
      ref={ref as React.Ref<HTMLButtonElement | HTMLAnchorElement>}
    />
  );
};

export default forwardRef(Button);

// Utility function to return correct component
function getComponentByType(as: string) {
  switch (as) {
    // case "link":
    //   return Link;
    case "a":
      return "a";
    case "navLink":
      return NavLink; // Replace with your NavLink component
    case "button":
    default:
      return "button";
  }
}
