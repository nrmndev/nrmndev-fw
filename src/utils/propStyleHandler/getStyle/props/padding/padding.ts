import { PaddingProps, GetStyleReturnProps } from "_uiTypes";

export const getPaddingStyle = <T extends PaddingProps>({
  padding,
}: T): GetStyleReturnProps => {
  let classes: string[] = [];
  let inline: React.CSSProperties = {};

  if (typeof padding === "undefined") {
    return { classes: classes.join(" "), inline };
  }

  if (typeof padding === "string") {
    inline = {
      padding: padding === "zero" ? "0" : `var(--padding-${padding})`,
    };
  }

  if (typeof padding === "object") {
    let vPaddingStyle = {};
    let hPaddingStyle = {};

    //padding is ValueAndUnitProps
    if ("value" in padding || "unit" in padding) {
      const { value, unit = "px" } = padding;
      if (value !== undefined) {
        return {
          classes: "",
          inline: { padding: `${value}${unit}` },
        };
      }
    }

    if ("vPadding" in padding || "hPadding" in padding) {
      const { vPadding, hPadding } = padding;

      if (vPadding !== undefined) {
        if (typeof vPadding === "string") {
          vPaddingStyle = {
            paddingTop: `${
              vPadding === "zero" ? "0" : `var(--padding-${vPadding})`
            }`,
            paddingBottom: `${
              vPadding === "zero" ? "0" : `var(--padding-${vPadding})`
            }`,
          };
        } else {
          if (vPadding.value !== undefined) {
            const { value: vValue, unit: vUnit = "px" } = vPadding;
            vPaddingStyle = {
              paddingTop: `${vValue}${vUnit}`,
              paddingBottom: `${vValue}${vUnit}`,
            };
          }
        }
      }

      if (hPadding !== undefined) {
        if (typeof hPadding === "string") {
          hPaddingStyle = {
            paddingLeft: `${
              hPadding === "zero" ? "0" : `var(--padding-${hPadding})`
            }`,
            paddingRight: `${
              hPadding === "zero" ? "0" : `var(--padding-${hPadding})`
            }`,
          };
        } else {
          if (hPadding.value) {
            const { value: hValue, unit: hUnit = "px" } = hPadding;
            hPaddingStyle = {
              paddingLeft: `${hValue}${hUnit}`,
              paddingRight: `${hValue}${hUnit}`,
            };
          }
        }
      }
    }

    let topStyle = {};
    if ("top" in padding) {
      const { top } = padding;
      if (top !== undefined) {
        if (typeof top === "string") {
          topStyle = {
            paddingTop: `${top === "zero" ? "0" : `var(--padding-${top})`}`,
          };
        } else {
          if (top.value) {
            topStyle = {
              paddingTop: `${top.value}${top.unit ?? "px"}`,
            };
          }
        }
      }
    }

    let leftStyle = {};
    if ("left" in padding) {
      const { left } = padding;
      if (left !== undefined) {
        if (typeof left === "string") {
          leftStyle = {
            paddingLeft: `${left === "zero" ? "0" : `var(--padding-${left})`}`,
          };
        } else {
          if (left.value) {
            leftStyle = {
              paddingLeft: `${left.value}${left.unit ?? "px"}`,
            };
          }
        }
      }
    }

    let rightStyle = {};
    if ("right" in padding) {
      const { right } = padding;
      if (right !== undefined) {
        if (typeof right === "string") {
          rightStyle = {
            paddingRight: `${
              right === "zero" ? "0" : `var(--padding-${right})`
            }`,
          };
        } else {
          if (right.value) {
            rightStyle = {
              paddingRight: `${right.value}${right.unit ?? "px"}`,
            };
          }
        }
      }
    }

    let bottomStyle = {};
    if ("bottom" in padding) {
      const { bottom } = padding;
      if (bottom !== undefined) {
        if (typeof bottom === "string") {
          bottomStyle = {
            paddingBottom: `${
              bottom === "zero" ? "0" : `var(--padding-${bottom})`
            }`,
          };
        } else {
          if (bottom.value) {
            bottomStyle = {
              paddingBottom: `${bottom.value}${bottom.unit ?? "px"}`,
            };
          }
        }
      }
    }

    inline = {
      ...vPaddingStyle,
      ...hPaddingStyle,
      ...topStyle,
      ...leftStyle,
      ...rightStyle,
      ...bottomStyle,
    };
  }
  const sanizitizedClasses = classes.filter((c) => c !== "");
  return { classes: sanizitizedClasses.join(" "), inline };
};
