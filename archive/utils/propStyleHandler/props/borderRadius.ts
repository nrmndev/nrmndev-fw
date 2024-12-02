import { BorderRadiusProps, GetStyleReturnProps } from "@uiTypes";

export const getBorderRadiusStyle = <
  T extends BorderRadiusProps["borderRadius"]
>(
  borderRadius?: T
): GetStyleReturnProps => {
  let classes: string = "";
  let inline: React.CSSProperties = {};

  if (typeof borderRadius === "undefined") {
    return { classes, inline };
  }

  switch (typeof borderRadius) {
    case "string":
      classes += `br-${borderRadius}`;
      break;
    case "object":
      const {
        topRight: tR,
        topLeft: tL,
        bottomRight: bR,
        bottomLeft: bL,
        unit = "px",
      } = borderRadius;
      inline = {
        ...(tR ? { borderTopRightRadius: `${tR}${unit}` } : {}),
        ...(tL ? { borderTopLeftRadius: `${tL}${unit}` } : {}),
        ...(bR ? { borderBottomRightRadius: `${bR}${unit}` } : {}),
        ...(bL ? { borderBottomLeftRadius: `${bL}${unit}` } : {}),
      };
      break;
  }

  return { classes, inline };
};
