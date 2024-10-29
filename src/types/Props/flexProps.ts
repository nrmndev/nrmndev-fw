export type FlexDirectionOptions =
  | "row"
  | "row-reverse"
  | "col"
  | "col-reverse";

export type JustifyContentOptions =
  | "start"
  | "end"
  | "center"
  | "between"
  | "around"
  | "evenly";

export type AlignItemsOptions =
  | "stretch"
  | "start"
  | "end"
  | "center"
  | "baseline";
export type AlignContentOptions =
  | "start"
  | "end"
  | "center"
  | "between"
  | "around"
  | "evenly"
  | "stretch";

export type FlexWrapOptions = "nowrap" | "wrap" | "wrap-reverse";

export type FlexProps = {
  flex?: {
    flexDirection?: FlexDirectionOptions;
    justifyContent?: JustifyContentOptions;
    alignItems?: AlignItemsOptions;
    alignContent?: AlignContentOptions;
    flexWrap?: FlexWrapOptions;
  };
};
