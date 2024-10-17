import { propStyleHandler } from "@utils";
import { ImCogs } from "react-icons/im";
import classNames from "classnames";

import { MarginDiscriminatedProps, SizeOptions } from "@uiTypes";
import { IconType } from "react-icons";
import { BackgroundProps, BaseProps, ColorProps } from "@proptypes";

export type IconComponentProps = Omit<BaseProps, "children"> &
  BackgroundProps &
  ColorProps &
  MarginDiscriminatedProps & {
    icon: IconType | string; // Use IconType for react-icons
    rounded?: boolean;
    iconSize?: SizeOptions;
    variant?: "solid" | "outline";
  };

/**
 *
 * @param {IconType | string} icon The Icon to display.
 * @param {"primary" | "secondary | "primary-outline" | "secondary-outline"} variant Icon Skin
 * @returns Icon Element
 */

const Icon = (props: IconComponentProps) => {
  const {
    icon: Icon = ImCogs,
    color = "primary",
    background,
    variant = "solid",
    rounded = false,
    iconSize = "sm",
    margin,
    className: userStyle,
    ...rest
  } = props;

  const propStyle = propStyleHandler({ margin });

  const className = classNames(
    userStyle,
    "icon",
    `icon-${variant}`,
    `${variant === "outline" ? `icon--${color}` : ""}`,
    `color-${color}`,
    background && "bg-" + background,
    iconSize && "icon--" + iconSize,
    rounded && `icon--rounded`,
    propStyle.className
  );

  return (
    <span {...rest} className={className}>
      {typeof Icon === "string" ? (
        <img src={Icon} className="icon__image" />
      ) : (
        <Icon />
      )}
    </span>
  );
};

export default Icon;
