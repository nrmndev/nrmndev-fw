import {
  BorderEdgeOptions,
  BorderOptions,
  BorderProps,
  GetStyleReturnProps,
} from "@uiTypes";
import { isPropAbsent } from "@utils";

export const getBorderStyle = <T extends BorderProps>({
  border,
}: T): GetStyleReturnProps => {
  let classes: string = "";
  let inline: React.CSSProperties = {};

  if (typeof border === "undefined") {
    return { classes, inline };
  }

  if (isPropAbsent<BorderEdgeOptions>(border, ["width", "style", "color"])) {
    const { left, right, top, bottom } = border as BorderEdgeOptions;

    const handleValue = (val: BorderOptions): string => {
      const { width, style = "solid", color = "primary" } = val;
      return `${width}px ${style} ${`var(--${color})`}`;
    };

    inline = {
      ...(top ? { borderTop: handleValue(top) } : {}),
      ...(left ? { borderLeft: handleValue(left) } : {}),
      ...(right ? { borderRight: handleValue(right) } : {}),
      ...(bottom ? { borderBottom: handleValue(bottom) } : {}),
    };
  }

  if (isPropAbsent<BorderOptions>(border, ["top", "right", "bottom", "left"])) {
    const {
      width,
      style = "solid",
      color = "primary",
    } = border as BorderOptions;

    inline = {
      borderWidth: `${width}px`,
      borderStyle: `${style}`,
      borderColor: `var(--${color})`,
    };
  }

  return { classes, inline };
};
