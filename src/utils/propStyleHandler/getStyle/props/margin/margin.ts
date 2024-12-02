import { MarginProps, GetStyleReturnProps } from "_uiTypes";
import { typeCheckers } from "_utils";

export const getMarginStyle = <T extends MarginProps>({
  margin,
}: T): GetStyleReturnProps => {
  let classes: string[] = [];
  let inline: React.CSSProperties = {};

  if (typeof margin === "undefined") {
    return { classes: classes.join(" "), inline };
  }

  if (typeof margin === "string") {
    inline = { margin: margin === "zero" ? "0" : `var(--margin-${margin})` };
    //classes.push(`m-${margin === "zero" ? "0" : margin}`);
  }

  if (typeof margin === "object") {
    let marginStyle = {};

    //margin is ValueAndUnitProps
    if (typeCheckers.valueAndUnitProps(margin)) {
      const { value, unit = "px" } = margin;
      marginStyle = { margin: `${value}${unit}` };
    }
    let vMarginStyle = {};
    let hMarginStyle = {};
    if ("vMargin" in margin || "hMargin" in margin) {
      const { vMargin, hMargin } = margin;

      if (vMargin !== undefined) {
        if (typeof vMargin === "string") {
          vMarginStyle = {
            marginTop: `${
              vMargin === "zero" ? "0" : `var(--margin-${vMargin})`
            }`,
            marginBottom: `${
              vMargin === "zero" ? "0" : `var(--margin-${vMargin})`
            }`,
          };
          // classes.push(`mv-${vMargin === "zero" ? "0" : vMargin}`);
        } else {
          if (vMargin.value !== undefined) {
            const { value: vValue, unit: vUnit = "px" } = vMargin;
            vMarginStyle = {
              marginTop: `${vValue}${vUnit}`,
              marginBottom: `${vValue}${vUnit}`,
            };
          }
        }
      }

      if (hMargin !== undefined) {
        if (typeof hMargin === "string") {
          hMarginStyle = {
            marginLeft: `${
              hMargin === "zero" ? "0" : `var(--margin-${hMargin})`
            }`,
            marginRight: `${
              hMargin === "zero" ? "0" : `var(--margin-${hMargin})`
            }`,
          };
        } else {
          if (hMargin.value) {
            const { value: hValue, unit: hUnit = "px" } = hMargin;
            hMarginStyle = {
              marginLeft: `${hValue}${hUnit}`,
              marginRight: `${hValue}${hUnit}`,
            };
          }
        }
      }
    }

    let topStyle = {};
    if ("top" in margin) {
      const { top } = margin;
      if (top !== undefined) {
        if (typeof top === "string") {
          topStyle = {
            marginTop: `${top === "zero" ? "0" : `var(--margin-${top})`}`,
          };
        } else {
          if (top.value) {
            topStyle = {
              marginTop: `${top.value}${top.unit ?? "px"}`,
            };
          }
        }
      }
    }

    let leftStyle = {};
    if ("left" in margin) {
      const { left } = margin;
      if (left !== undefined) {
        if (typeof left === "string") {
          leftStyle = {
            marginLeft: `${left === "zero" ? "0" : `var(--margin-${left})`}`,
          };
        } else {
          if (left.value) {
            leftStyle = {
              marginLeft: `${left.value}${left.unit ?? "px"}`,
            };
          }
        }
      }
    }

    let rightStyle = {};
    if ("right" in margin) {
      const { right } = margin;
      if (right !== undefined) {
        if (typeof right === "string") {
          rightStyle = {
            marginRight: `${right === "zero" ? "0" : `var(--margin-${right})`}`,
          };
        } else {
          if (right.value) {
            rightStyle = {
              marginRight: `${right.value}${right.unit ?? "px"}`,
            };
          }
        }
      }
    }

    let bottomStyle = {};
    if ("bottom" in margin) {
      const { bottom } = margin;
      if (bottom !== undefined) {
        if (typeof bottom === "string") {
          bottomStyle = {
            marginBottom: `${
              bottom === "zero" ? "0" : `var(--margin-${bottom})`
            }`,
          };
        } else {
          if (bottom.value) {
            bottomStyle = {
              marginBottom: `${bottom.value}${bottom.unit ?? "px"}`,
            };
          }
        }
      }
    }

    inline = {
      ...marginStyle,
      ...vMarginStyle,
      ...hMarginStyle,
      ...topStyle,
      ...leftStyle,
      ...rightStyle,
      ...bottomStyle,
    };
  }
  const sanizitizedClasses = classes.filter((c) => c !== "");
  return { classes: sanizitizedClasses.join(" "), inline };
};

// const handleEdgeStyle = (
//   position: "top" | "right" | "bottom" | "left",
//   margin?: SizeOptions | ValueAndUnitProps | SizeOptions,
// ) => {
//   if (margin == undefined) return {};
//   if (typeof margin === "string")
//     return `m${position.charAt(0)}-${margin === "zero" ? "0" : margin}`;
//   let prop = `margin${position.charAt(0).toUpperCase() + position.slice(1)}`;
//   return {
//     [prop]: `${margin.value}${margin.unit ?? "px"}`,
//   };
// };
