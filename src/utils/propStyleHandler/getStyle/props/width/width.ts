import { WidthProps, GetStyleReturnProps, ValueAndUnitProps } from "_uiTypes";
import { typeCheckers } from "_utils";

export const getWidthStyle = <T extends WidthProps>({
  width,
}: T): GetStyleReturnProps => {
  let classes: string = "";
  let inline: React.CSSProperties = {};
  if (!width || typeof width !== "object") return { classes, inline };

  if (typeCheckers.valueAndUnitProps(width)) {
    const { value, unit = "px" } = width as ValueAndUnitProps;
    inline = { width: `${value}${unit}` };
  }

  return { classes, inline };
};
