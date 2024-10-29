import { LabelDecorationComponentProps } from "@uiComponentTypes";
import classNames from "classnames";
import { UtilityStyledComponent } from "@uiComponents";

const LabelDecoration = ({
  Icon: Component,
  color = "primary",
  position = "left",
}: LabelDecorationComponentProps) => {
  const classes = classNames(
    `section-label__decoration decoration--${position}`,
    `color-${color}`
  );
  return (
    <UtilityStyledComponent as="span" className={classes}>
      {Component && <Component />}
    </UtilityStyledComponent>
  );
};

export default LabelDecoration;
