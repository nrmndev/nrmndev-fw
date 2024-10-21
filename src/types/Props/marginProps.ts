import { SizeNegativeOptions, SizeOptions, ValueAndUnitProps } from "@uiTypes";

// export type MarginProps = {
//   margin?: SizeOptions | SizeNegativeOptions | EdgeOptions;
// };

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

export type MarginAxisOptions = {
  vMargin?: SizeOptions | ValueAndUnitProps;
  hMargin?: SizeOptions | ValueAndUnitProps;
  top?: never;
  right?: never;
  bottom?: never;
  left?: never;
  value?: never;
  unit?: never;
};

export type MarginEdgeOptions = {
  top?: SizeOptions | SizeNegativeOptions | ValueAndUnitProps;
  right?: SizeOptions | SizeNegativeOptions | ValueAndUnitProps;
  bottom?: SizeOptions | SizeNegativeOptions | ValueAndUnitProps;
  left?: SizeOptions | SizeNegativeOptions | ValueAndUnitProps;
  vMargin?: never;
  hMargin?: never;
  value?: never;
  unit?: never;
};

export type MarginValueUnitOptions = {
  top?: never;
  right?: never;
  bottom?: never;
  left?: never;
  vMargin?: never;
  hMargin?: never;
} & ValueAndUnitProps;

export type MarginProps = {
  margin?:
    | SizeOptions
    | MarginAxisOptions
    | MarginEdgeOptions
    | MarginValueUnitOptions;
};
