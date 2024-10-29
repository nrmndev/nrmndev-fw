import { PickUtilityProps } from "@uiTypes";

export type ProgressBarComponentProps = PickUtilityProps<
  "padding" | "margin" | "width" | "color"
> & {
  label?: string;
  labelPosition?: "top" | "bottom";
  total: number;
  current: number;
  showProgress?: boolean;
  format?: "percentage" | "whole";
  variant?: "striped" | "solid";
  children?: never;
};
