import { ValueAndUnitProps } from "@uiTypes";

export const checkValue = (
  value?: ValueAndUnitProps["value"],
  unit: ValueAndUnitProps["unit"] = "px"
): string => {
  if (value === undefined || value === null) return "";
  if (value === 0) return "0";
  return `${value}${unit}`;
};
