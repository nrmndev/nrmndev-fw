//import { EdgeOptions } from "types/shared";

import { ValueAndUnitProps } from "types/shared";

export type PositionOptions =
  | "absolute"
  | "relative"
  | "fixed"
  | "sticky"
  | "static";
export type PositionProps = {
  position?: {
    position: PositionOptions;
    top?: ValueAndUnitProps;
    right?: ValueAndUnitProps;
    bottom?: ValueAndUnitProps;
    left?: ValueAndUnitProps;
  };
};
