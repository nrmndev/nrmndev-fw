import { BorderBaseProps, BorderIsEdgeOptions } from "@uiTypes";

type Border = BorderBaseProps & (BorderIsEdgeOptions & BorderIsEdgeOptions);
export const border = <T extends Border>(
  border: T
): React.CSSProperties | undefined => {
  if (!border) return;

  const {
    top = 0,
    right = 0,
    bottom = 0,
    left = 0,
    unit = "px",
    color = "primary",
  } = border;

  return {
    borderWidth: 0,
    ...(top ? { borderTop: `${top}${unit}` } : {}),
    ...(right ? { borderRight: `${right}${unit}` } : {}),
    ...(bottom ? { borderBottom: `${bottom}${unit}` } : {}),
    ...(left ? { borderLeft: `${left}${unit}` } : {}),
    ...(color ? { borderColor: `var(--color-${color})` } : {}),
    borderStyle: "solid",
  };
};
