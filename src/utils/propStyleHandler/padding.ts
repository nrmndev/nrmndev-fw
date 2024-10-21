import { PaddingProps, ValueAndUnitProps } from "@uiTypes";
import { StyleReturnType } from "./styleReturnType";

export const getPaddingStyle = <T extends PaddingProps>({
  padding,
}: T): StyleReturnType => {
  let classes: string[] = [];
  let inline: React.CSSProperties = {};

  if (typeof padding === "undefined") {
    return { classes: classes.join(" "), inline };
  }

  switch (typeof padding) {
    case "string":
      classes.push(padding === "zero" ? `p-0` : `p-${padding}`);
      break;
    case "object":
      //Padding is PaddingValueAndUnitOption
      const { value, unit } = padding;
      let inlineValueAndUnitOption: React.CSSProperties = {};
      if (value) {
        inlineValueAndUnitOption = { padding: `${value}${unit ?? "px"}` };
      }

      //Padding is PaddingAxisOption
      const { vPadding, hPadding } = padding;
      let vPaddingOption: React.CSSProperties = {};
      if (vPadding) {
        if (typeof vPadding === "string") {
          classes.push(vPadding === "zero" ? `pv-0` : `pv-${vPadding}`);
        }
        if (typeof vPadding === "object") {
          vPaddingOption =
            handleVPaddingOption(vPadding as ValueAndUnitProps) ?? {};
        }
      }

      let hPaddingOption: React.CSSProperties = {};
      if (hPadding) {
        if (typeof hPadding === "string") {
          classes.push(hPadding === "zero" ? `ph-0` : `ph-${hPadding}`);
        }
        if (typeof hPadding === "object") {
          hPaddingOption =
            handleHPaddingOption(hPadding as ValueAndUnitProps) ?? {};
        }
      }

      //Padding is PaddingEdgeOption
      const { top, right, bottom, left } = padding;
      let topPaddingOption: React.CSSProperties = {};
      if (top) {
        if (typeof top === "string") {
          classes.push(top === "zero" ? `pt-0` : `pt-${top}`);
        }
        topPaddingOption = handlePaddingEdgeOption({
          top: top as ValueAndUnitProps,
        });
      }

      let rightPaddingOption: React.CSSProperties = {};
      if (right) {
        if (typeof right === "string") {
          classes.push(right === "zero" ? `pr-0` : `pr-${right}`);
        }
        if (typeof right === "object" && "value" in right) {
          rightPaddingOption = handlePaddingEdgeOption({
            right,
          });
        }
      }

      let bottomPaddingOption: React.CSSProperties = {};
      if (bottom) {
        if (typeof bottom === "string") {
          classes.push(bottom === "zero" ? `pr-0` : `pr-${bottom}`);
        }
        if (typeof bottom === "object" && "value" in bottom) {
          bottomPaddingOption = handlePaddingEdgeOption({
            bottom,
          });
        }
      }

      let leftPaddingOption: React.CSSProperties = {};
      if (left) {
        if (typeof left === "string") {
          classes.push(left === "zero" ? `pr-0` : `pr-${left}`);
        }
        if (typeof left === "object" && "value" in left) {
          leftPaddingOption = handlePaddingEdgeOption({
            left,
          });
        }
      }

      inline = {
        ...inlineValueAndUnitOption,
        ...vPaddingOption,
        ...hPaddingOption,
        ...topPaddingOption,
        ...rightPaddingOption,
        ...bottomPaddingOption,
        ...leftPaddingOption,
        ...inlineValueAndUnitOption,
      };
      break;
  }

  const sanizitizedClasses = classes.filter((c) => c !== "");
  return { classes: sanizitizedClasses.join(" "), inline };
};

// type PaddingAxis = {
//   vPadding?: ValueAndUnitProps;
//   hPadding?: ValueAndUnitProps;
// };
const handleVPaddingOption = (
  vPadding: ValueAndUnitProps
): React.CSSProperties | undefined => {
  if (!vPadding) return;
  return {
    ...(vPadding
      ? {
          paddingLeft: `${vPadding.value}${vPadding.unit}`,
          paddingRight: `${vPadding.value}${vPadding.unit}`,
        }
      : {}),
  };
};

const handleHPaddingOption = (
  hPadding: ValueAndUnitProps
): React.CSSProperties => {
  if (!hPadding) return {};
  return {
    ...(hPadding
      ? {
          paddingTop: `${hPadding.value}${hPadding.unit}`,
          paddingBottom: `${hPadding.value}${hPadding.unit}`,
        }
      : undefined),
  };
};

type PaddingEdgeOption = {
  top?: ValueAndUnitProps;
  right?: ValueAndUnitProps;
  bottom?: ValueAndUnitProps;
  left?: ValueAndUnitProps;
};

const handlePaddingEdgeOption = <T extends PaddingEdgeOption>({
  bottom,
  left,
  right,
  top,
}: T): React.CSSProperties => {
  if (!bottom && !left && !right && !top) return {};

  if (top?.value) {
    return { paddingTop: `${top.value}${top.unit ?? "px"}` };
  }

  if (right?.value) {
    return { paddingRight: `${right.value}${right.unit ?? "px"}` };
  }

  if (bottom?.value) {
    return { paddingBottom: `${bottom.value}${bottom.unit ?? "px"}` };
  }

  if (left?.value) {
    return { paddingLeft: `${left.value}${left.unit ?? "px"}` };
  }
  return {};
};
