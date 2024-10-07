import SizeTypes from "./size";

export type JustifyOptions =
  | "flex-start"
  | "center"
  | "flex-end"
  | "space-between"
  | "around"
  | "evenly";

export type AlignOptions =
  | "center"
  | "flex-end"
  | "flex-start"
  | "baseline"
  | "stretch";

export type PositionOptions = {
  top?: SizeTypes;
  right?: SizeTypes;
  bottom?: SizeTypes;
  left?: SizeTypes;
};
