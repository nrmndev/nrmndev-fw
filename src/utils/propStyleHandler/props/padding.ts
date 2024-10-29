import { PaddingProps, GetStyleReturnProps } from "@uiTypes";

export const getPaddingStyle = <T extends PaddingProps>({
  padding,
}: T): GetStyleReturnProps => {
  let classes: string[] = [];
  let inline: React.CSSProperties = {};

  if (typeof padding === "undefined") {
    return { classes: classes.join(" "), inline };
  }

  if (typeof padding === "string") {
    classes.push(`p-${padding === "zero" ? "0" : padding}`);
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
          classes.push(`pv-${vPadding === "zero" ? "0" : vPadding}`);
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
          classes.push(`ph-${hPadding === "zero" ? "0" : hPadding}`);
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
          classes.push(`pt-${top === "zero" ? "0" : top}`);
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
          classes.push(`pl-${left === "zero" ? "0" : left}`);
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
          classes.push(`pr-${right === "zero" ? "0" : right}`);
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
          classes.push(`pb-${bottom === "zero" ? "0" : bottom}`);
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
