import { ColorOptions, TemplateProps, UtilityPartialProps } from "_uiTypes";
import { IconType } from "react-icons";

type ListOptions = "ol" | "ul";

type Items = {
  label: string | JSX.Element;
  children?: [{ label: string }];
};

export type ListComponentProps = UtilityPartialProps<
  "color" | "text" | "font" | "display" | "margin" | "padding",
  "ol" | "ul"
> & {
  // display?:
  //   | "inline-flex"
  //   | "inline-flex-space-between"
  //   | "block"
  //   | "grid-2-columns"
  //   | "grid-3-columns"
  //   | "grid-4-columns";
  icon?: IconType;
  iconSize?: number;
  iconColor?: ColorOptions;
  items?: Items[];
  listType?: ListOptions;
} & TemplateProps;
