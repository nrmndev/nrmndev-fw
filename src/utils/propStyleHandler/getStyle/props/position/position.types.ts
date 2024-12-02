import { ValueAndUnitProps } from "_uiTypes";

export type PositionOptions = Exclude<
  React.CSSProperties["position"],
  "-moz-initial" | "-webkit-sticky"
>;
export type PositionProps = {
  position?: {
    position: PositionOptions;
    top?: ValueAndUnitProps;
    right?: ValueAndUnitProps;
    bottom?: ValueAndUnitProps;
    left?: ValueAndUnitProps;
    zIndex?: number;
  };
};
