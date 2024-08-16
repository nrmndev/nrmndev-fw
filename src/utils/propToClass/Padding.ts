import { mergePropsAsClassNames } from "@utils";
import { PositionUnionTypes, SizeUnionTypes } from "@typekits";

// : {
//   (value: PositionUnionTypes): string | undefined;
//   (value: SizeUnionTypes): string | undefined;
// }
export const paddingClasses = (value: PositionUnionTypes | SizeUnionTypes) => {
  if (typeof value === "string") {
    return value;
  } else {
    const { top, right, bottom, left } = value;
    return (
      mergePropsAsClassNames([
        ["", top ? "pt-" + top : ""],
        ["", right ? "pr-" + right : ""],
        ["", bottom ? "pb-" + bottom : ""],
        ["", left ? "pl-" + left : ""],
      ]) ?? undefined
    );
  }
};
