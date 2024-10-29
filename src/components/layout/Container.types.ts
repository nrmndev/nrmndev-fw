import { AsProps, PickUtilityProps } from "@uiTypes";

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
    | "borderRadius"
    | "overlay"
  >
> &
  AsProps<"div" | "section" | "article" | "footer" | "header">;
