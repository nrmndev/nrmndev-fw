import { SpreadClassNameAsProps } from "@utils/SpreadClassNameAsProps";
import { IconBaseProps } from "types/Index";
import { ImCogs } from "react-icons/im";

interface IProps extends IconBaseProps {
  background?: "primary" | "secondary" | "accent" | "";
  variant?:
    | "primary"
    | "secondary"
    | "primary-outline"
    | "secondary-outline"
    | "primary-alt"
    | "secondary-alt";
  rounded?: boolean;
}

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
}: IProps) => {
  const classNames = SpreadClassNameAsProps([
    "icon",
    variant,
    rounded ? "rounded" : "",
    background ? background : "",
  ]);

  return (
    <span {...classNames}>
      {typeof Icon === "string" ? <img src={Icon} /> : <Icon />}
    </span>
  );
};

export default Icon;
