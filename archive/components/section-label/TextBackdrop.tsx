import classNames from "classnames";
import { UtilityStyledComponent } from "@uiComponents";
import { TextBackdropComponentProps } from "@uiComponentTypes";
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
