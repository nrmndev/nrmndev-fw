import { PickUtilityProps } from "@uiTypes";
import { IconType } from "react-icons";

export type LabelDecorationComponentProps = PickUtilityProps<"color"> & {
  Icon?: IconType;
  position?: "left" | "right";
};
