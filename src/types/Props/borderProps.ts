import { ColorOptions, EdgeOptions, SizeOptions } from "@uiTypes";

export type BorderProps = {
  border?: BorderBaseProps & (BorderIsEdgeOptions | BorderIsSizeOptions);
};

export default BorderProps;

export type BorderBaseProps = {
  color?: ColorOptions;
  style?: "solid" | "dashed" | "dotted";
};
export type BorderIsEdgeOptions = EdgeOptions & {
  value?: never;
};

export type BorderIsSizeOptions = {
  value: SizeOptions;
} & {
  top?: never;
  right?: never;
  bottom?: never;
  left?: never;
};
