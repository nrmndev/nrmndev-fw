import { ColorOptions, SizeOptions, IncrementOf5Options } from "@uiTypes";

export type TextBackdropComponentProps = {
  label: string;
  opacity?: IncrementOf5Options;
  color?: ColorOptions;
  size?: SizeOptions;
};
