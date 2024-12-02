import classNames from "classnames";
import { UtilityStyledComponent } from "components/component.barrel.index";
import { TextBackdropComponentProps } from "components/component.barrel.types";
import { forwardRef } from "react";

const TextBackdrop = (
  {
    label,
    opacity = 10,
    size = "md",
    ...utilityProps
  }: TextBackdropComponentProps,
  ref?: React.Ref<HTMLSpanElement>
) => {
  const classes = classNames(
    "sectionLabel__backdrop",
    `opacity-${opacity}`,
    `sectionLabel__backdrop--${size}`
  );
  return (
    <UtilityStyledComponent
      as="span"
      className={classes}
      {...utilityProps}
      ref={ref}
    >
      {label}
    </UtilityStyledComponent>
  );
};

export default forwardRef(TextBackdrop);
