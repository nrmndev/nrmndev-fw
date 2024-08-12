import { MergePropsAsClassNames } from "@utils";
import { BackgroundProps, IconProps, VariantProps } from "@typekits";
import { ImCogs } from "react-icons/im";

interface IProps
  extends React.HTMLProps<HTMLDivElement>,
    BackgroundProps,
    IconProps,
    VariantProps {}

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
  ...rest
}: IProps) => {
  const combinedClassName = MergePropsAsClassNames([
    ["icon", variant, rounded ? "rounded" : "", background ? background : ""],
    [rest.className ? rest.className : ""],
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
