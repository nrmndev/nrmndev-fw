import { OverlayProps, PickUtilityProps } from "@uiTypes";

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
  >
> & { fluid?: boolean } & OverlayProps & {
    as?: keyof React.JSX.IntrinsicElements;
  };
