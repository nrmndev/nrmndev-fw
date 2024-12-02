import { ColorOptions } from "_uiTypes";

export type BackgroundAsImageProps = {
  background?: {
    image: string;
    size?:
      | "auto"
      | "cover"
      | "contain"
      | "inherit"
      | "initial"
      | "revert"
      | "revert-layer"
      | "unset"
      | { x?: number; y?: number; unit?: "px" | "%" };
    position?:
      | "top"
      | "right"
      | "bottom"
      | "center"
      | "left"
      | { value?: number; unit?: "px" | "%" };
    repeat?: Exclude<
      React.CSSProperties["backgroundRepeat"],
      "-moz-initial" | "-webkit-match-parent"
    >;
    attachment?: Exclude<
      React.CSSProperties["backgroundAttachment"],
      "-moz-initial" | "-webkit-match-parent"
    >;
  };
};

export type BackgroundAsColorProps = {
  background?: ColorOptions;
};
export type BackgroundProps = BackgroundAsImageProps | BackgroundAsColorProps;
