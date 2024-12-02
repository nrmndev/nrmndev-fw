import { AsImgProps, TemplateProps, UtilityComponentProps } from "@uiTypes";

export type ImageComponentProps = UtilityComponentProps<"img"> &
  AsImgProps &
  TemplateProps;
