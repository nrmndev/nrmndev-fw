import { SizeOptions, UtilityPartialProps } from "@uiTypes";
import { IconType } from "react-icons";

export type IconComponentProps = UtilityPartialProps<
  "background" | "color" | "margin",
  "svg" | "img"
> & {
  icon: IconType | string; // Use IconType for react-icons
  iconSize?: SizeOptions;
  rounded?: boolean;
  variant?: "solid" | "outline";
};
