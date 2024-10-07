import { EdgeOptions } from "@uiTypes";

export const margin = <T extends EdgeOptions>(
  margin: T
): React.CSSProperties | undefined => {
  if (!margin) return;
  const { top = 0, right = 0, bottom = 0, left = 0, unit = "px" } = margin;
  return {
    ...(top ? { marginTop: `${top}${unit}` } : {}),
    ...(right ? { marginRight: `${right}${unit}` } : {}),
    ...(bottom ? { marginBottom: `${bottom}${unit}` } : {}),
    ...(left ? { marginLeft: `${left}${unit}` } : {}),
  };
};
