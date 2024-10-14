export type AnimationOptions =
  | "slide-ltr"
  | "slide-rtl"
  | "slide-ttb"
  | "slide-btt"
  | "fade-in-out";

interface AnimationProps {
  animation?: AnimationOptions;
}

export default AnimationProps;
