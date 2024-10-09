import { ColorOptions } from "@uiTypes";
import classNames from "classnames";
import { IconType } from "react-icons";

type RightDecorationProps = {
  Icon: IconType;
  color: ColorOptions | undefined;
};

const RightDecoration = ({ Icon, color = "primary" }: RightDecorationProps) => {
  const classes = classNames(
    "sectionLabel__decoration decoration--right",
    `color-${color}`
  );
  return (
    <span className={classes}>
      <Icon />
    </span>
  );
};

export default RightDecoration;
