import { SizeOptions, UtilityPartialProps } from "@uiTypes";

export type TextBackdropComponentProps = UtilityPartialProps<
  "color" | "opacity",
  "span"
> & {
  label: string;
  size?: SizeOptions;
};
