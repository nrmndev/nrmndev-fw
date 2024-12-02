import { MarginProps, GetStyleReturnProps } from "@uiTypes";
import { typeCheckers } from "../typeCheckers";

export const getMarginStyle = <T extends MarginProps>({
  margin,
}: T): GetStyleReturnProps => {
  let classes: string[] = [];
  let inline: React.CSSProperties = {};

  if (typeof margin === "undefined") {
    return { classes: classes.join(" "), inline };
  }

  if (typeof margin === "string") {
    classes.push(`m-${margin === "zero" ? "0" : margin}`);
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
          classes.push(`mv-${vMargin === "zero" ? "0" : vMargin}`);
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
          classes.push(`mh-${hMargin === "zero" ? "0" : hMargin}`);
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
          classes.push(`mt-${top === "zero" ? "0" : top}`);
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
          classes.push(`ml-${left === "zero" ? "0" : left}`);
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
          classes.push(`mr-${right === "zero" ? "0" : right}`);
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
          classes.push(`mb-${bottom === "zero" ? "0" : bottom}`);
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
