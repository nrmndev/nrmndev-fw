import { WidthProps, GetStyleReturnProps, ValueAndUnitProps } from "@uiTypes";
import { typeCheckers } from "@utils";

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
