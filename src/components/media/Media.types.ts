import { PickUtilityProps } from "@uiTypes";
import { IconComponentProps } from "@uiComponentTypes";
import { TypographyComponentProps } from "@uiComponentTypes";

export type MediaComponentProps = PickUtilityProps<
  "background" | "border" | "color" | "padding" | "borderRadius"
> & {
  icon: IconComponentProps & {
    position?: "top-left" | "left" | "right" | "top-center" | "top-right";
  };
  heading: TypographyComponentProps;
  body: TypographyComponentProps;
};
