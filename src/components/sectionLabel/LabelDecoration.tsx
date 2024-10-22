import { LabelDecorationComponentProps } from "@uiTypes";
import classNames from "classnames";

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
    Component && (
      <span className={classes}>
        <Component />
      </span>
    )
  );
};

export default LabelDecoration;
