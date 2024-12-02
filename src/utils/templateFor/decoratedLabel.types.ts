import { DecoratedLabelComponentProps } from "@uiComponentTypes";

type DecoratedLabelKeys =
  | "PrimaryHeading"
  | "SecondaryHeading"
  | "TertiaryHeading";

export type DecoratedLabelTemplate = {
  [K in DecoratedLabelKeys]: DecoratedLabelComponentProps;
};
