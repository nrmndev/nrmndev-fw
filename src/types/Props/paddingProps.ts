import { SizeNegativeOptions, SizeOptions, ValueAndUnitProps } from "@uiTypes";

/**
 * Union type representing Padding properties.
 * - Use `hPadding` for horizontal Padding values.
 * - Use `vPadding` for vertical Padding values.\
 * - usage:
 * PaddingShorthandProps - `{Padding}`
 * PaddingEdgeOptions - `{PaddingTop, PaddingRight, PaddingBottom, PaddingLeft}`
 * PaddingAxisOptions - `{vPadding, hPadding}`
 *
 * Note: MarginDiscriminatedProps is a discriminated union of three, so they can't co-exists as props
 */

export type PaddingAxisOptions = {
  vPadding?: SizeOptions | ValueAndUnitProps;
  hPadding?: SizeOptions | ValueAndUnitProps;
  top?: never;
  right?: never;
  bottom?: never;
  left?: never;
  value?: never;
  unit?: never;
};

export type PaddingEdgeOptions = {
  top?: SizeOptions | SizeNegativeOptions | ValueAndUnitProps;
  right?: SizeOptions | SizeNegativeOptions | ValueAndUnitProps;
  bottom?: SizeOptions | SizeNegativeOptions | ValueAndUnitProps;
  left?: SizeOptions | SizeNegativeOptions | ValueAndUnitProps;
  vPadding?: never;
  hPadding?: never;
  value?: never;
  unit?: never;
};

export type PaddingValueUnitOptions = {
  top?: never;
  right?: never;
  bottom?: never;
  left?: never;
  vPadding?: never;
  hPadding?: never;
} & ValueAndUnitProps;

export type PaddingProps = {
  padding?:
    | SizeOptions
    | PaddingAxisOptions
    | PaddingEdgeOptions
    | PaddingValueUnitOptions;
};
