import { NumberRange0to360, Position3DOptions } from "_uiTypes";

export type TransformRotateOptions = {
  x?: NumberRange0to360;
  y?: NumberRange0to360;
  z?: NumberRange0to360;
};

export type TransformProps = {
  transform?: {
    translate?: Position3DOptions;
    scale?: number;
    rotate?: TransformRotateOptions;
  };

  // skew?: { x?: number | string; y?: number | string };
  // perspective?: string;
  // matrix?: string;
  // other transform-related properties
};