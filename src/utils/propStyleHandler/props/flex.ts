import { FlexProps, GetStyleReturnProps } from "@uiTypes";

export const getFlexStyle = (flex?: FlexProps["flex"]): GetStyleReturnProps => {
  let classes: string[] = [];
  let inline: React.CSSProperties = {};

  if (typeof flex === "undefined") {
    return { classes: "", inline };
  }

  const { alignContent, alignItems, flexDirection, flexWrap, justifyContent } =
    flex;
  flexWrap ? classes.push(`flex-${flexWrap}`) : ``;
  flexDirection ? classes.push(`flex-${flexDirection}`) : ``;
  alignContent ? classes.push(`content-${alignContent}`) : ``;
  alignItems ? classes.push(`items-${alignItems}`) : ``;
  justifyContent ? classes.push(`justify-${justifyContent}`) : ``;

  return { classes: classes.join(" "), inline };
};
