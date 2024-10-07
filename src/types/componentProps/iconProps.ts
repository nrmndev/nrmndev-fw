import { SizeOptions } from "types/options";
import { IconType } from "react-icons";
import {
  BackgroundProps,
  BaseProps,
  ColorProps,
  MarginProps,
  VariantProps,
} from "@proptypes";

export type IconProps = BaseProps &
  BackgroundProps &
  ColorProps &
  MarginProps &
  VariantProps & {
    icon: IconType | string; // Use IconType for react-icons
    rounded?: boolean;
    iconSize?: SizeOptions;
  };

// export default interface IconProps {
//   icon: IconType | string; // Use IconType for react-icons
//   rounded?: boolean;
//   iconSize?: SizeOptions;
// }
