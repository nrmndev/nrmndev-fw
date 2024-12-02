import {
  ColorProps,
  BackgroundProps,
  TranslateProps,
  IncrementOf5Options,
  TransitionProps,
} from "_uiTypes";

export type AnimationOptions = {
  opacity?: IncrementOf5Options;
  scale?: number;
} & BackgroundProps &
  TranslateProps &
  TransitionProps &
  ColorProps;

export type AnimationSettings = {
  start?: AnimationOptions;
  end?: AnimationOptions;
};

export type InViewOptions = AnimationOptions & {
  threshold: IncrementOf5Options;
};
export type AnimationProps = {
  animation?: {
    hover?: AnimationOptions;
    inView?: AnimationOptions & { threshold: IncrementOf5Options };
  };
};
