import { MediaComponentProps } from "@uiComponentTypes";

type MediaKeys =
  | "TopIconA"
  | "TopIconB"
  | "TopIconC"
  | "InlineIconA"
  | "InlineIconB"
  | "InlineIconC"
  | "RightIconA"
  | "RightIconB"
  | "RightIconC";

export type MediaTemplate = {
  [K in MediaKeys]: MediaComponentProps;
};
