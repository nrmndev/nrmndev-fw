import { EdgeOptions, SizeNegativeOptions, SizeOptions } from "@uiTypes";

export type MarginProps = {
  margin?: SizeOptions | SizeNegativeOptions | EdgeOptions;
};

/**
 * Union type representing margin properties.
 * - Use `hMargin` for horizontal margin values.
 * - Use `vMargin` for vertical margin values.\
 * - usage:
 * MarginShorthandProps - `{margin}`
 * MarginEdgeOptions - `{marginTop, marginRight, marginBottom, marginLeft}`
 * MarginAxisOptions - `{vMargin, hMargin}`
 *
 * Note: MarginDiscriminatedProps is a discriminated union of three, so they can't co-exists as props
 */

export type MarginShorthandProps = {
  margin?: SizeOptions;
  vMargin?: never;
  hMargin?: never;
  marginTop?: never;
  marginRight?: never;
  marginBottom?: never;
  marginLeft?: never;
};
export type MarginAxisProps = {
  vMargin?: SizeOptions;
  hMargin?: SizeOptions;
  margin?: never;
  marginTop?: never;
  marginRight?: never;
  marginBottom?: never;
  marginLeft?: never;
};

export type MarginEdgeProps = {
  marginTop?: SizeOptions | SizeNegativeOptions;
  marginRight?: SizeOptions | SizeNegativeOptions;
  marginBottom?: SizeOptions | SizeNegativeOptions;
  marginLeft?: SizeOptions | SizeNegativeOptions;
  vMargin?: never;
  hMargin?: never;
  margin?: never;
};

export type MarginDiscriminatedProps =
  | MarginAxisProps
  | MarginEdgeProps
  | MarginShorthandProps;
