import {
  AlignContentOptions,
  AlignItemsOptions,
  FlexDirectionOptions,
  FlexWrapOptions,
  JustifyContentOptions,
} from "@uiTypes";

type Flex = {
  flexDirection?: FlexDirectionOptions;
  justifyContent?: JustifyContentOptions;
  alignItems?: AlignItemsOptions;
  alignContent?: AlignContentOptions;
  flexWrap?: FlexWrapOptions;
};

export const flexClasses = (flex: Flex): string[] | undefined => {
  if (!flex) return undefined;
  let className = [];
  if (flex) {
    const {
      alignContent,
      alignItems,
      flexDirection,
      flexWrap,
      justifyContent,
    } = flex;
    alignContent && className.push(`content-${alignContent}`);
    alignItems && className.push(`items-${alignItems}`);
    flexDirection && className.push(`flex-${flexDirection}`);
    flexWrap && className.push(`flex-${flexWrap}`);
    justifyContent && className.push(`justify-${justifyContent}`);
  }
  return className;
};
