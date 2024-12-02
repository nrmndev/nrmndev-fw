import { ContainerComponentProps } from "@uiComponentTypes";

type ContainerKeys = "Container1" | "Container2";

export type ContainerTemplate = {
  [K in ContainerKeys]: ContainerComponentProps;
};
