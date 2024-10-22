import {
  BaseProps,
  ColorProps,
  MarginProps,
  PaddingProps,
  WidthProps,
} from "@uiTypes";

export type ProgressBarComponentProps = BaseProps &
  PaddingProps &
  MarginProps &
  WidthProps &
  ColorProps & {
    label?: string;
    labelPosition?: "top" | "bottom";
    total: number;
    current: number;
    showProgress?: boolean;
    format?: "percentage" | "whole";
    variant?: "striped" | "solid";
    children?: never;
  };
