import { AsImgProps, PickUtilityProps } from "@uiTypes";

export type ImageComponentProps = PickUtilityProps<
  "display" | "border" | "borderRadius" | "width" | "height"
> &
  AsImgProps;
