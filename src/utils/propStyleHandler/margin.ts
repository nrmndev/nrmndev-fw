import { MarginProps, ValueAndUnitProps } from "@uiTypes";
import { StyleReturnType } from "./styleReturnType";

export const getMarginStyle = <T extends MarginProps>({
  margin,
}: T): StyleReturnType => {
  let classes: string[] = [];
  let inline: React.CSSProperties = {};

  if (typeof margin === "undefined") {
    return { classes: classes.join(" "), inline };
  }

  switch (typeof margin) {
    case "string":
      classes.push(margin === "zero" ? `m-0` : `m-${margin}`);
      break;
    case "object":
      //Margin is MarginValueAndUnitOption
      const { value, unit } = margin;
      let inlineValueAndUnitOption: React.CSSProperties = {};
      if (value) {
        inlineValueAndUnitOption = { margin: `${value}${unit ?? "px"}` };
      }

      //Margin is MarginAxisOption
      const { vMargin, hMargin } = margin;
      let vMarginOption: React.CSSProperties = {};
      if (vMargin) {
        if (typeof vMargin === "string") {
          classes.push(vMargin === "zero" ? `mv-0` : `mv-${margin}`);
        }
        if (typeof vMargin === "object") {
          vMarginOption =
            handleVMarginOption(vMargin as ValueAndUnitProps) ?? {};
        }
      }

      let hMarginOption: React.CSSProperties = {};
      if (hMargin) {
        if (typeof hMargin === "string") {
          classes.push(hMargin === "zero" ? `mh-0` : `mh-${hMargin}`);
        }
        if (typeof hMargin === "object") {
          hMarginOption =
            handleHMarginOption(hMargin as ValueAndUnitProps) ?? {};
        }
      }

      //Margin is MarginEdgeOption
      const { top, right, bottom, left } = margin;
      let topMarginOption: React.CSSProperties = {};
      if (top) {
        if (typeof top === "string") {
          classes.push(top === "zero" ? `mt-0` : `mt-${top}`);
        }
        topMarginOption = handleMarginEdgeOption({
          top: top as ValueAndUnitProps,
        });
      }

      let rightMarginOption: React.CSSProperties = {};
      if (right) {
        if (typeof right === "string") {
          classes.push(right === "zero" ? `mr-0` : `mr-${right}`);
        }
        if (typeof right === "object" && "value" in right) {
          rightMarginOption = handleMarginEdgeOption({
            right,
          });
        }
      }

      let bottomMarginOption: React.CSSProperties = {};
      if (bottom) {
        if (typeof bottom === "string") {
          classes.push(bottom === "zero" ? `mr-0` : `mr-${bottom}`);
        }
        if (typeof bottom === "object" && "value" in bottom) {
          bottomMarginOption = handleMarginEdgeOption({
            bottom,
          });
        }
      }

      let leftMarginOption: React.CSSProperties = {};
      if (left) {
        if (typeof left === "string") {
          classes.push(left === "zero" ? `mr-0` : `mr-${left}`);
        }
        if (typeof left === "object" && "value" in left) {
          leftMarginOption = handleMarginEdgeOption({
            left,
          });
        }
      }

      inline = {
        ...inlineValueAndUnitOption,
        ...vMarginOption,
        ...hMarginOption,
        ...topMarginOption,
        ...rightMarginOption,
        ...bottomMarginOption,
        ...leftMarginOption,
        ...inlineValueAndUnitOption,
      };
      break;
  }

  const sanizitizedClasses = classes.filter((c) => c !== "");
  return { classes: sanizitizedClasses.join(" "), inline };
};

const handleVMarginOption = (
  vMargin: ValueAndUnitProps
): React.CSSProperties => {
  if (!vMargin) return {};
  return {
    ...(vMargin
      ? {
          marginLeft: `${vMargin.value}${vMargin.unit}`,
          marginRight: `${vMargin.value}${vMargin.unit}`,
        }
      : {}),
  };
};

const handleHMarginOption = (
  hMargin: ValueAndUnitProps
): React.CSSProperties => {
  if (!hMargin) return {};

  return {
    ...(hMargin
      ? {
          marginTop: `${hMargin.value}${hMargin.unit}`,
          marginBottom: `${hMargin.value}${hMargin.unit}`,
        }
      : undefined),
  };
};

type MarginEdgeOption = {
  top?: ValueAndUnitProps;
  right?: ValueAndUnitProps;
  bottom?: ValueAndUnitProps;
  left?: ValueAndUnitProps;
};

const handleMarginEdgeOption = <T extends MarginEdgeOption>({
  bottom,
  left,
  right,
  top,
}: T): React.CSSProperties => {
  if (!bottom && !left && !right && !top) return {};

  if (top?.value) {
    return { marginTop: `${top.value}${top.unit ?? "px"}` };
  }

  if (right?.value) {
    return { marginRight: `${right.value}${right.unit ?? "px"}` };
  }

  if (bottom?.value) {
    return { marginBottom: `${bottom.value}${bottom.unit ?? "px"}` };
  }

  if (left?.value) {
    return { marginLeft: `${left.value}${left.unit ?? "px"}` };
  }
  return {};
};
