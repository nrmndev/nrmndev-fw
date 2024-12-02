export type FlexDirectionOptions = Exclude<
  React.CSSProperties["flexDirection"],
  "-moz-initial"
>;

export type JustifyContentOptions = Exclude<
  React.CSSProperties["justifyContent"],
  "-moz-initial"
>;

export type AlignItemsOptions = Exclude<
  React.CSSProperties["alignItems"],
  "-moz-initial"
>;
export type AlignContentOptions = Exclude<
  React.CSSProperties["alignContent"],
  "-moz-initial"
>;

export type FlexWrapOptions = Exclude<
  React.CSSProperties["flexWrap"],
  "-moz-initial"
>;

export type FlexProps = {
  flex?: {
    flexDirection?: FlexDirectionOptions;
    justifyContent?: JustifyContentOptions;
    alignItems?: AlignItemsOptions;
    alignContent?: AlignContentOptions;
    flexWrap?: FlexWrapOptions;
  };
};
