import { mergePropsAsClassNames } from "@utils";
import { ColumnTypes } from "@typekits";

export const columnBreakPointClasses = (value: ColumnTypes | undefined) => {
  if (!value) return;
  return (
    mergePropsAsClassNames([
      ["", value.xs ? "col-xs-" + value.xs : ""],
      ["", value.sm ? "col-sm-" + value.sm : ""],
      ["", value.md ? "col-md-" + value.md : ""],
      ["", value.lg ? "col-lg-" + value.lg : ""],
      ["", value.xl ? "col-xl-" + value.xl : ""],
      ["", value.xxl ? "col-xxl-" + value.xxl : ""],
    ]) ?? undefined
  );
};
