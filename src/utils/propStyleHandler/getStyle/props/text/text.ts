import { TextProps, GetStyleReturnProps } from "_uiTypes";

export const getTextStyle = <T extends TextProps>({
  text,
}: T): GetStyleReturnProps => {
  let classes: string = "";
  let inline: React.CSSProperties = {};

  if (!text) {
    return { classes, inline };
  }

  const { align, decoration, transform } = text;
  let textArray: string[] = [];
  inline = {
    ...(align ? { textAlign: align } : {}),
    ...(decoration ? { textDecoration: decoration } : {}),
    ...(transform ? { textTransform: transform } : {}),
  };
  // align ? textArray.push(`text-${align}`) : ``;
  // decoration ? textArray.push(`text-${decoration}`) : ``;
  // transform ? textArray.push(`text-${transform}`) : ``;
  return { classes: textArray.join(" "), inline };
};
