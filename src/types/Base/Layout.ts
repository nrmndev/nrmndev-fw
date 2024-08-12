import SizeTypes from "./Sizes";

export type JustifyTypes =
  | "flex-start"
  | "center"
  | "flex-end"
  | "space-between"
  | "around"
  | "evenly"
  | "";

export type AlignTypes =
  | "center"
  | "flex-end"
  | "flex-start"
  | "baseline"
  | "stretch"
  | "";

export type PositionTypes = {
  top?: SizeTypes;
  right?: SizeTypes;
  bottom?: SizeTypes;
  left?: SizeTypes;
};
