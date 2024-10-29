import { PickUtilityProps, SizeOptions } from "@uiTypes";

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
  | "children"
> & { gap?: SizeOptions };
