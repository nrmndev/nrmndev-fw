import { IconType } from "react-icons";
import { ColorOptions, OpacityOptions, SizeOptions } from "types/options";

type DecorationsProps = {
  decoration?: {
    top?: { color?: ColorOptions; Icon?: IconType };
    right?: { color?: ColorOptions; Icon?: IconType };
    bottom?: { color?: ColorOptions; Icon?: IconType };
    left?: { color?: ColorOptions; Icon?: IconType };
    textBackdrop?: {
      size?: SizeOptions;
      opacity?: OpacityOptions;
      color?: ColorOptions;
      label: string;
    };
  };
};

export type SectionLabelProps = { label?: string } & DecorationsProps;
