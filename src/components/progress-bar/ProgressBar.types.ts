import { UtilityPartialProps } from "@uiTypes";

export type ProgressBarComponentProps = UtilityPartialProps<
  "padding" | "margin" | "width" | "color",
  "span"
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
