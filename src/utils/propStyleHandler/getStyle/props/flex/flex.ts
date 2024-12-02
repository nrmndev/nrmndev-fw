import { FlexProps, GetStyleReturnProps } from "_uiTypes";

export const getFlexStyle = ({ flex }: FlexProps): GetStyleReturnProps => {
  let classes: string[] = [];
  let inline: React.CSSProperties = {};

  if (typeof flex === "undefined") {
    return { classes: "", inline };
  }

  const { alignContent, alignItems, flexDirection, flexWrap, justifyContent } =
    flex;
  inline = {
    ...(flexWrap ? { flexWrap: flexWrap } : {}),
    ...(flexDirection ? { flexDirection: flexDirection } : {}),
    ...(alignContent ? { alignContent: alignContent } : {}),
    ...(alignItems ? { alignItems: alignItems } : {}),
    ...(justifyContent ? { justifyContent: justifyContent } : {}),
  };

  return { classes: classes.join(" "), inline };
};
