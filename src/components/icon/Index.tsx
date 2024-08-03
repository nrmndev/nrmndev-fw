import { SpreadClassNameAsProps } from "@utils/SpreadClassNameAsProps";
import { IconType } from "react-icons";
import { ImCogs } from "react-icons/im";

interface IProps {
  icon: IconType | string;
  variant:
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
  rounded = false,
}: IProps) => {
  const props = SpreadClassNameAsProps([
    "icon",
    variant,
    rounded ? "rounded" : "",
  ]);

  return (
    <span {...props}>
      {typeof Icon === "string" ? <img src={Icon} /> : <Icon />}
    </span>
  );
};

export default Icon;
