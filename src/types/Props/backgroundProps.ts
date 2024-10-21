import { ColorOptions } from "@uiTypes";

export type BackgroundAsImageProps = {
  background?: {
    image: string;
    size?:
      | "auto"
      | "cover"
      | "contain"
      | { x?: number; y?: number; unit?: "px" | "%" };
    position?:
      | "top"
      | "right"
      | "bottom"
      | "center"
      | "left"
      | { value?: number; unit?: "px" | "%" };
    repeat?:
      | "repeat"
      | "repeat-x"
      | "repeat-y"
      | "no-repeat"
      | "space"
      | "round";
    attachment?: "fixed" | "scroll" | "local";
  };
};

export type BackgroundAsColorProps = {
  background?: ColorOptions;
};
export type BackgroundProps = BackgroundAsImageProps | BackgroundAsColorProps;
