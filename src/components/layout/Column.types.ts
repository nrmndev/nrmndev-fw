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
> & { gap?: SizeOptions };
