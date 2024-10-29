import { PickUtilityProps } from "@uiTypes";

export type TextAsProps = {
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span";
};

export type TypographyComponentProps = PickUtilityProps<
  "color" | "text" | "margin" | "font" | "children"
> &
  TextAsProps;
