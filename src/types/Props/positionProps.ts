//import { EdgeOptions } from "types/shared";

export type PositionOptions =
  | "absolute"
  | "relative"
  | "fixed"
  | "sticky"
  | "static";
export type PositionProps = {
  position?: {
    position: PositionOptions;
    top?: number;
    right?: number;
    bottom?: number;
    left?: number;
    unit?: "px" | "rem" | "%" | "em";
  };
};
