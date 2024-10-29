import {
  PositionProps,
  ValueAndUnitProps,
  GetStyleReturnProps,
} from "@uiTypes";
import { checkValue } from "@utils";

export const getPositionStyle = ({
  position,
}: PositionProps): GetStyleReturnProps => {
  let classes: string = "";
  let inline: React.CSSProperties = {};

  if (typeof position === "undefined") {
    return { classes, inline };
  }
  //if (isOfType<PositionProps["position"]>(position)) {
  const { top, right, bottom, left, position: pos } = position;

  const createStyle = (direction: string, value?: ValueAndUnitProps) => {
    if (!value?.value) return {};
    return { [direction]: checkValue(value.value, value.unit) };
  };

  inline = {
    position: pos,
    ...createStyle("top", top),
    ...createStyle("right", right),
    ...createStyle("bottom", bottom),
    ...createStyle("left", left),
  };
  // }

  return { classes, inline };
};
// export const checkValue = (
//   value?: ValueAndUnitProps["value"],
//   unit: ValueAndUnitProps["unit"] = "px"
// ): string => {
//   if (!value) return "";
//   if (value === 0) return "0";
//   return `${value}${unit}`;
// };
