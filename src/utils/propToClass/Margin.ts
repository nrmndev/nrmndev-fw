import { PositionUnionTypes, SizeUnionTypes } from "@typekits";
import { mergePropsAsClassNames } from "@utils";

export const marginClasses = (
  value: PositionUnionTypes | SizeUnionTypes | undefined
) => {
  if (!value) return;
  if (typeof value === "string") {
    return value;
  } else {
    const { top, right, bottom, left } = value;
    return (
      mergePropsAsClassNames([
        ["", top ? "mt-" + top : ""],
        ["", right ? "mr-" + right : ""],
        ["", bottom ? "mb-" + bottom : ""],
        ["", left ? "ml-" + left : ""],
      ]) ?? undefined
    );
  }
};
