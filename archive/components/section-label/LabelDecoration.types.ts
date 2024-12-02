import { UtilityPartialProps } from "@uiTypes";
import { IconType } from "react-icons";

export type LabelDecorationComponentProps = UtilityPartialProps<
  "color",
  "span"
> & {
  Icon?: IconType;
  position?: "left" | "right";
};
