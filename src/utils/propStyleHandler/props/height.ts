import { HeightProps, GetStyleReturnProps, ValueAndUnitProps } from "@uiTypes";
import { typeCheckers } from "@utils";

export const getHeightStyle = <T extends HeightProps>({
  height,
}: T): GetStyleReturnProps => {
  let classes: string = "";
  let inline: React.CSSProperties = {};
  if (!height || typeof height !== "object") return { classes, inline };

  if (typeCheckers.valueAndUnitProps(height)) {
    const { value, unit = "px" } = height as ValueAndUnitProps;
    inline = { height: `${value}${unit}` };
  }

  return { classes, inline };
};
