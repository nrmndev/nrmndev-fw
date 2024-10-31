import { AsImgProps, UtilityPartialProps } from "@uiTypes";

export type ImageComponentProps = UtilityPartialProps<
  "display" | "border" | "borderRadius" | "width" | "height",
  "img"
> &
  AsImgProps;
