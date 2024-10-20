import { ColorOptions, IncrementOf5Options, SizeOptions } from "@uiTypes";
import classNames from "classnames";

type TextBackdropProps = {
  label: string;
  opacity?: IncrementOf5Options;
  color?: ColorOptions;
  size?: SizeOptions;
};

const TextBackdrop = ({
  label,
  opacity = 10,
  color = "primary",
  size = "md",
}: TextBackdropProps) => {
  const classes = classNames(
    "sectionLabel__backdrop",
    `opacity-${opacity}`,
    `color-${color}`,
    `sectionLabel__backdrop--${size}`
  );
  return <span className={classes}>{label}</span>;
};

export default TextBackdrop;
