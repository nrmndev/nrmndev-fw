import {
  IncrementOf5Options,
  BackgroundProps,
  BorderProps,
  ColorOptions,
  Position3DOptions,
  TransitionOptions,
} from "_uiTypes";
type AnimationOptions =
  | "lighten"
  | "darken"
  | "enlarge"
  | "shadowed"
  | "moveUp"
  | "moveDown"
  | "moveRight"
  | "moveLeft";

export type HoverProps = {
  hover?: {
    color?: ColorOptions;
    background?: BackgroundProps["background"];
    border?: BorderProps["border"];
    animation?: AnimationOptions[];
    opacity?: IncrementOf5Options;
    translate?: Position3DOptions;
    transition?: TransitionOptions;
  };
};
