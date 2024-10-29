import { PickUtilityProps } from "@uiTypes";

export type ContainerComponentProps = Partial<
  PickUtilityProps<
    | "background"
    | "border"
    | "flex"
    | "padding"
    | "color"
    | "position"
    | "width"
    | "height"
    | "margin"
    | "children"
    | "fluid"
    | "as"
    | "overlay"
  >
>;
