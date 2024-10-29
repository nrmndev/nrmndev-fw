import { ColorOptions } from "@uiTypes";

/**
 * Union type representing border properties.
 * - Use `hBorder` for horizontal border values.
 * - Use `vBorder` for vertical border values.\
 * - usage:
 * BorderShorthandProps - `{border}`
 * BorderEdgeOptions - `{borderTop, borderRight, borderBottom, borderLeft}`
 *
 * Note: BorderDiscriminatedProps is a discriminated union of three, so they can't co-exists as props
 */

export type BorderBaseOptions = {
  width: number;
  color?: ColorOptions;
  style?: "solid" | "dashed" | "dotted";
};
export type BorderEdgeOptions = {
  top?: BorderBaseOptions;
  right?: BorderBaseOptions;
  bottom?: BorderBaseOptions;
  left?: BorderBaseOptions;
  width?: never;
  color?: never;
  style?: never;
};

export type BorderOptions = {
  top?: never;
  right?: never;
  bottom?: never;
  left?: never;
} & BorderBaseOptions;

export type BorderProps = {
  border?: BorderEdgeOptions | BorderOptions;
};
