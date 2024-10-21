import {
  AlignContentOptions,
  AlignItemsOptions,
  FlexDirectionOptions,
  FlexWrapOptions,
  JustifyContentOptions,
} from "@uiTypes";
import { StyleReturnType } from "./styleReturnType";

type Flex = {
  flexDirection?: FlexDirectionOptions;
  justifyContent?: JustifyContentOptions;
  alignItems?: AlignItemsOptions;
  alignContent?: AlignContentOptions;
  flexWrap?: FlexWrapOptions;
};

export const getFlexStyle = (flex?: Flex): StyleReturnType => {
  let classes: string[] = [];
  let inline: React.CSSProperties = {};

  if (typeof flex === "undefined") {
    return { classes: "", inline };
  }

  const { alignContent, alignItems, flexDirection, flexWrap, justifyContent } =
    flex;
  flexDirection ? classes.push(`flex-${flexDirection}`) : ``;
  alignContent ? classes.push(`content-${alignContent}`) : ``;
  alignItems ? classes.push(`items-${alignItems}`) : ``;
  flexWrap ? classes.push(`flex-${flexWrap}`) : ``;
  justifyContent ? classes.push(`justify-${justifyContent}`) : ``;

  return { classes: classes.join(" "), inline };
};
