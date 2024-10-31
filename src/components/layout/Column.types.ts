import { UtilityPartialProps } from "@uiTypes";

export type ColumnComponentProps = UtilityPartialProps<
  | "background"
  | "border"
  | "padding"
  | "margin"
  | "flex"
  | "position"
  | "xs"
  | "md"
  | "sm"
  | "lg"
  | "xl"
  | "xxl"
  | "display"
  //| "columnBreakpoints"
  | "children"
  | "gap"
  | "opacity",
  "section" | "article" | "div" | "header" | "footer"
>;
