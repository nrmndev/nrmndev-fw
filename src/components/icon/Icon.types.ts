import { PickUtilityProps, SizeOptions } from "@uiTypes";
import { IconType } from "react-icons";

export type IconComponentProps = PickUtilityProps<
  "background" | "color" | "margin"
> & {
  icon: IconType | string; // Use IconType for react-icons
  iconSize?: SizeOptions;
  rounded?: boolean;
  variant?: "solid" | "outline";
};
