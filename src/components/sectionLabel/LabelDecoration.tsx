import { ColorOptions } from "@uiTypes";
import classNames from "classnames";
import { IconType } from "react-icons";

type LeftDecorationProps = {
  Icon: IconType;
  color: ColorOptions | undefined;
  position?: "left" | "right";
};

const LabelDecoration = ({
  Icon,
  color = "primary",
  position = "left",
}: LeftDecorationProps) => {
  const classes = classNames(
    `section-label__decoration decoration--${position}`,
    `color-${color}`
  );
  return (
    <span className={classes}>
      <Icon />
    </span>
  );
};

export default LabelDecoration;
