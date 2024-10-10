import {
  AlignContentOptions,
  AlignItemsOptions,
  ColumnOptions,
  FlexDirectionOptions,
  FlexWrapOptions,
  JustifyContentOptions,
} from "types/options";

type FlexProps = {
  flex?: {
    flexDirection?: FlexDirectionOptions;
    justifyContent?: JustifyContentOptions;
    alignItems?: AlignItemsOptions;
    alignContent?: AlignContentOptions;
    flexWrap?: FlexWrapOptions;
  };
};

export type FlexColumnProps = {
  xsColumns?: ColumnOptions;
  smColumns?: ColumnOptions;
  mdColumns?: ColumnOptions;
  lgColumns?: ColumnOptions;
  xlColumns?: ColumnOptions;
  xxlColumns?: ColumnOptions;
};
export default FlexProps;
