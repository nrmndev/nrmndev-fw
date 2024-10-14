import { ColorOptions } from "@uiTypes";

export const colorClasses = (color: ColorOptions): string => {
  switch (color) {
    case "gradient-1":
    case "gradient-2":
    case "gradient-3":
      return `bg-clip-${color}`;
    default:
      return `color-${color}`;
  }
};
