import {
  FontProps,
  ValueAndUnitProps,
  GetStyleReturnProps,
  FontAsObjectProps,
} from "@uiTypes";
import { typeCheckers } from "@utils";

export const getFontStyle = <T extends FontProps>({
  font,
}: T): GetStyleReturnProps => {
  let classes: string[] = [];
  let inline: React.CSSProperties = {};

  if (typeof font === "undefined") {
    return { classes: "", inline };
  }

  if (typeof font === "string") {
    inline = { fontSize: `var(--font-${font})` };
    return { classes: "", inline };
    //classes.push(`font-${font}`);
  }

  if (typeof font === "object" && "size" in font) {
    let valueOfSize: string = "";
    const { size } = font;
    if (size) {
      if (typeof size === "string") {
        inline = { fontSize: `var(--font-${size})` };
        return { classes: "", inline };
      }
      if (typeCheckers.valueAndUnitProps(size)) {
        const { family, lineHeight, style, weight, size } =
          font as FontAsObjectProps;
        const { value, unit = "px" } = size as ValueAndUnitProps;
        valueOfSize = `${value}${unit}`;

        // inline = {
        //   font: `${style ? `${style} ` : ``}${
        //     weight ? `${weight} ` : ``
        //   }${valueOfSize}${lineHeight ? `/${lineHeight}` : ``} ${family}`,
        // };

        inline = {
          ...(family ? { fontFamily: family } : {}),
          ...(lineHeight ? { lineHeight: lineHeight } : {}),
          ...(style ? { fontStyle: style } : {}),
          ...(weight ? { fontWeight: weight } : {}),
          fontSize: valueOfSize,
          //...(size ? { fontSize: valueOfSize } : {}),
        };
      }
    }
  }

  return { classes: classes.join(" "), inline };
};
