import { Image, UtilityStyledComponent } from "@uiComponents";
import classNames from "classnames";
import { ImCogs } from "react-icons/im";
import { IconComponentProps } from "@uiComponentTypes";
import { forwardRef } from "react";

const Icon = (props: IconComponentProps, ref?: React.Ref<HTMLSpanElement>) => {
  const {
    icon: Icon = ImCogs,
    iconSize = "sm",
    rounded = false,
    variant = "solid",
    ...utilityProps
  } = props;

  const className = classNames(
    "icon",
    `icon-${variant}`,
    `${variant === "outline" ? `icon--${utilityProps.color}` : ""}`,
    iconSize && "icon--" + iconSize,
    rounded && `icon--rounded`
  );

  return (
    <UtilityStyledComponent
      as="span"
      {...utilityProps}
      className={className}
      ref={ref}
    >
      {typeof Icon === "string" ? (
        <Image src={Icon} className="icon__image" />
      ) : (
        <Icon />
      )}
    </UtilityStyledComponent>
  );
};

export default forwardRef(Icon);
