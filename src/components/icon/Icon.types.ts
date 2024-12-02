import { SizeOptions, TemplateProps, UtilityPartialProps } from "_uiTypes";
import { IconType } from "react-icons";

export type IconComponentProps = UtilityPartialProps<
  | "background"
  | "color"
  | "margin"
  | "border"
  | "background"
  | "rounded"
  | "font",
  "svg" | "img"
> & {
  icon?: IconType | string; // Use IconType for react-icons
  rounded?: boolean;
  variant?: "solid" | "outline" | "flat";
} & TemplateProps & { size?: Exclude<SizeOptions, "zero"> };
