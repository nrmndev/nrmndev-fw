import { UtilityPartialProps } from "@uiTypes";
import { IconComponentProps } from "@uiComponentTypes";
import { TypographyComponentProps } from "@uiComponentTypes";

export type MediaComponentProps = UtilityPartialProps<
  "background" | "border" | "color" | "padding" | "borderRadius",
  "div"
> & {
  icon: IconComponentProps & {
    position?: "top-left" | "left" | "right" | "top-center" | "top-right";
  };
  heading: TypographyComponentProps;
  body: TypographyComponentProps;
};
