import { LabelDecorationComponentProps } from "@uiComponentTypes";
import classNames from "classnames";
import { UtilityStyledComponent } from "@uiComponents";
import { forwardRef } from "react";

const LabelDecoration = (
  {
    Icon: Component,
    color = "primary",
    position = "left",
  }: LabelDecorationComponentProps,
  ref?: React.Ref<HTMLSpanElement>
) => {
  const classes = classNames(
    `section-label__decoration decoration--${position}`,
    `color-${color}`
  );
  return (
    <UtilityStyledComponent as="span" className={classes} ref={ref}>
      {Component && <Component />}
    </UtilityStyledComponent>
  );
};

export default forwardRef(LabelDecoration);
