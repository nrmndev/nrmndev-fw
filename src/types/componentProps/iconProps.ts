import { SizeOptions } from "@uiTypes";
import { IconType } from "react-icons";
import {
  BackgroundProps,
  BaseProps,
  ColorProps,
  MarginProps,
} from "@proptypes";

export type IconProps = BaseProps &
  BackgroundProps &
  ColorProps &
  MarginProps & {
    variant?: "solid" | "outline";
    icon: IconType | string; // Use IconType for react-icons
    rounded?: boolean;
    iconSize?: SizeOptions;
  };

// export default interface IconProps {
//   icon: IconType | string; // Use IconType for react-icons
//   rounded?: boolean;
//   iconSize?: SizeOptions;
// }
