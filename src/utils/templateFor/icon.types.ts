import { IconComponentProps } from "@uiComponentTypes";

type IconKeys = "IconA" | "IconB" | "IconC";

export type IconTemplate = {
  [K in IconKeys]: IconComponentProps;
};
