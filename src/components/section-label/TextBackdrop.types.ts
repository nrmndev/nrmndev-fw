import { SizeOptions, PickUtilityProps } from "@uiTypes";

export type TextBackdropComponentProps = PickUtilityProps<
  "color" | "opacity"
> & {
  label: string;
  size?: SizeOptions;
};
