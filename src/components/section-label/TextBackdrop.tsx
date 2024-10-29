import classNames from "classnames";
import { UtilityStyledComponent } from "@uiComponents";
import { TextBackdropComponentProps } from "@uiComponentTypes";

const TextBackdrop = ({
  label,
  opacity = 10,
  size = "md",
  ...utilityProps
}: TextBackdropComponentProps) => {
  const classes = classNames(
    "sectionLabel__backdrop",
    `opacity-${opacity}`,
    `sectionLabel__backdrop--${size}`
  );
  return (
    <UtilityStyledComponent as="span" className={classes} {...utilityProps}>
      {label}
    </UtilityStyledComponent>
  );
};

export default TextBackdrop;
