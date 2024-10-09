import { ColorOptions } from "@uiTypes";
import classNames from "classnames";
import { IconType } from "react-icons";

type BottomDecorationProps = {
  Icon?: IconType;
  color?: ColorOptions | undefined;
};

const BottomDecoration = ({
  Icon,
  color = "primary",
}: BottomDecorationProps) => {
  const classes = classNames(
    "sectionLabel__decoration decoration--bottom",
    `color-${color}`
  );
  return <span className={classes}>{Icon && <Icon />}</span>;
};

export default BottomDecoration;
