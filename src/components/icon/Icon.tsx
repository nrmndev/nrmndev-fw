import { mergePropsAsClassNames } from "@utils";
import { BackgroundProps, BaseProps, IconProps, VariantProps } from "@typekits";
import { ImCogs } from "react-icons/im";

interface IProps extends BaseProps, BackgroundProps, IconProps, VariantProps {}

/**
 *
 * @param {IconType | string} icon React-icons or {PathToImage}
 * @param {"primary" | "secondary | "primary-outline | "secondary-outline"} variant Icon Skin
 * @returns Icon Element
 */

const Icon = ({
  icon: Icon = ImCogs,
  variant = "primary",
  background = "",
  rounded = false,
  iconSize = "sm",
  ...rest
}: IProps) => {
  const combinedClassName = mergePropsAsClassNames([
    [
      "icon",
      variant,
      rounded ? "rounded" : "",
      background ? background : "",
      iconSize ? iconSize : "",
    ],

    [rest.className ?? ""],
  ]);

  return (
    <span {...rest} className={combinedClassName}>
      {typeof Icon === "string" ? (
        <img src={Icon} className="icon__image" />
      ) : (
        <Icon />
      )}
    </span>
  );
};

export default Icon;
