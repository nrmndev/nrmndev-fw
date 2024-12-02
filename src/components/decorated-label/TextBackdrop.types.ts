import { SizeOptions, UtilityPartialProps } from "_uiTypes";

export type TextBackdropComponentProps = UtilityPartialProps<
  "color" | "opacity",
  "span"
> & {
  label: string;
  size?: SizeOptions;
};
