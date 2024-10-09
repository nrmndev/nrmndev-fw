import { ColorOptions } from "@uiTypes";
import classNames from "classnames";
import { IconType } from "react-icons";

type LeftDecorationProps = {
  Icon: IconType;
  color: ColorOptions | undefined;
};

const LeftDecoration = ({ Icon, color = "primary" }: LeftDecorationProps) => {
  const classes = classNames(
    "sectionLabel__decoration decoration--left",
    `color-${color}`
  );
  return (
    <span className={classes}>
      <Icon />
    </span>
  );
};

export default LeftDecoration;
