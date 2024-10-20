import { BorderProps } from "@uiTypes";
import { StyleReturnType } from "./styleReturnType";

export const getBorderStyle = <T extends BorderProps>({
  border,
}: T): StyleReturnType => {
  let classes: string = "";
  let inline: React.CSSProperties = {};

  if (typeof border === "undefined") {
    return { classes, inline };
  }

  if (["width"].some((key) => key in border)) {
    const { width, style, color } = border;
    inline = {
      borderWidth: `${width}px`,
      borderStyle: `${style ?? "solid"}`,
      borderColor: `${color ? `var(--${color})` : `var(--primary)`}`,
    };
  }

  if (["top", "right", "bottom", "left"].some((key) => key in border)) {
    const { bottom, left, right, top } = border;
    inline = {
      ...(top
        ? {
            borderTop: `${top.width}px ${top.style} ${
              top.color ? `var(--${top.color})` : `var(--primary)`
            }`,
          }
        : {}),
      ...(left
        ? {
            borderLeft: `${left.width}px ${left.style} ${
              left.color ? `var(--${left.color})` : `var(--primary)`
            }`,
          }
        : {}),
      ...(right
        ? {
            borderRight: `${right.width}px ${right.style} ${
              right.color ? `var(--${right.color})` : `var(--primary)`
            }`,
          }
        : {}),
      ...(bottom
        ? {
            borderBottom: `${bottom.width}px ${bottom.style} ${
              bottom.color ? `var(--${bottom.color})` : `var(--primary)`
            }`,
          }
        : {}),
    };
  }

  return { classes, inline };
};
