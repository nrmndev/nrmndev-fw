import { FontProps, ValueAndUnitProps, GetStyleReturnProps } from "@uiTypes";
import { isOfType } from "@utils";

export const getFontStyle = <T extends FontProps>({
  font,
}: T): GetStyleReturnProps => {
  let classes: string[] = [];
  let inline: React.CSSProperties = {};

  if (typeof font === "undefined") {
    return { classes: "", inline };
  }

  if (typeof font === "string") {
    classes.push(`font-${font}`);
  }

  if (typeof font === "object" && "size" in font) {
    const { size } = font;
    let valueOfSize: string = isOfType<ValueAndUnitProps>(size)
      ? `${size.value}${size.unit}`
      : `var(--font-md)`;

    const {
      family = "Montserrat",
      lineHeight = undefined,
      style = undefined,
      weight = undefined,
    } = font;
    inline = {
      font: `${style ? `${style} ` : ``}${
        weight ? `${weight} ` : ``
      }${valueOfSize}${lineHeight ? `/${lineHeight}` : ``} ${family}`,
    };
  }

  return { classes: classes.join(" "), inline };
};
