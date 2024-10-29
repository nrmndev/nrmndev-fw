import { ColorOptions, ColorProps, TextProps } from "@uiTypes";
import { IconType } from "react-icons";

type ListOptions = "ordered-list" | "unordered-list";

type Items = {
  label: string | JSX.Element;
  children?: [{ label: string }];
};

export type ListComponentProps = TextProps &
  ColorProps & {
    display?:
      | "inline-flex"
      | "inline-flex-space-between"
      | "block"
      | "grid-2-columns"
      | "grid-3-columns"
      | "grid-4-columns";
    icon?: IconType;
    iconSize?: number;
    iconColor?: ColorOptions;
    items?: Items[];
    listType?: ListOptions;
  };
