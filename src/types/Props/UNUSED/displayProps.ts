export type DisplayOptions = Exclude<
  React.CSSProperties["display"],
  | "-moz-initial"
  | "-webkit-match-parent"
  | "-ms-grid"
  | "-ms-flexbox"
  | "-ms-inline-flexbox"
  | "-ms-inline-grid"
  | "-webkit-flex"
  | "-webkit-inline-flex"
>;

export type DisplayProps = {
  display?: DisplayOptions;
};
