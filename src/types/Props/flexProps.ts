import {
  AlignContentOptions,
  AlignItemsOptions,
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

export default FlexProps;
