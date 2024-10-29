import { GetStyleReturnProps, GapProps } from "@uiTypes";
import { typeCheckers } from "../typeCheckers";

export const getGapStyle = <T extends GapProps>({
  gap,
}: T): GetStyleReturnProps => {
  let classes: string[] = [];
  let inline: React.CSSProperties = {};

  if (typeof gap === "undefined") {
    return { classes: classes.join(" "), inline };
  }

  if (typeof gap === "string") {
    classes.push(`g-${gap === "zero" ? "0" : gap}`);
  }

  if (typeof gap === "object") {
    //margin is ValueAndUnitProps

    if (typeCheckers.valueAndUnitProps(gap)) {
      const { value, unit = "px" } = gap;
      return {
        classes: "",
        inline: { gap: `${value}${unit}` },
      };
    }
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
