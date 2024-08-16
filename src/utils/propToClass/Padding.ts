import { mergePropsAsClassNames } from "@utils";
import { PositionUnionTypes, SizeUnionTypes } from "@typekits";

export const paddingClasses = (
  value: PositionUnionTypes | SizeUnionTypes | undefined
) => {
  if (value === undefined || value === null) return undefined;

  if (typeof value === "string") return value;

  const { top, right, bottom, left } = value;
  return mergePropsAsClassNames([
    ["", top ? "pt-" + top : ""],
    ["", right ? "pr-" + right : ""],
    ["", bottom ? "pb-" + bottom : ""],
    ["", left ? "pl-" + left : ""],
  ]);
};
