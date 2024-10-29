import { AsProps, PickUtilityProps } from "@uiTypes";

export type ColumnComponentProps = PickUtilityProps<
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
  | "opacity"
> &
  AsProps<"section" | "article" | "div" | "header" | "footer">;
