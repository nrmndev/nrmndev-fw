import { ColorOptions } from "@uiTypes";
import classNames from "classnames";
import { IconType } from "react-icons";

type TopDecorationProps = {
  Icon?: IconType;
  color?: ColorOptions | undefined;
};

const TopDecoration = ({ Icon, color = "primary" }: TopDecorationProps) => {
  const classes = classNames(
    "sectionLabel__decoration decoration--top",
    `color-${color}`
  );
  return <span className={classes}>{Icon && <Icon />}</span>;
};

export default TopDecoration;
