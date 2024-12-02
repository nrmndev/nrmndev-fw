import { NumberRange0to360, Position3DOptions } from "_uiTypes";

export type RotateOptions = {
  x?: NumberRange0to360;
  y?: NumberRange0to360;
  z?: NumberRange0to360;
};
export type TransformProps = {
  transform?: {
    translate?: Position3DOptions;
    scale?: number;
    rotate?: RotateOptions;
  };

  // skew?: { x?: number | string; y?: number | string };
  // perspective?: string;
  // matrix?: string;
  // other transform-related properties
};
