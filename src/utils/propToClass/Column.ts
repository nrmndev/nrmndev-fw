import { mergePropsAsClassNames } from "@utils";
import { ColumnProps } from "@typekits";

export const columnBreakPointClasses = (value: ColumnProps | undefined) => {
  if (value === undefined || value === null) return undefined;
  const { xs, sm, md, lg, xl, xxl } = value;
  return mergePropsAsClassNames([
    ["", xs ? "col-xs-" + xs : ""],
    ["", sm ? "col-sm-" + sm : ""],
    ["", md ? "col-md-" + md : ""],
    ["", lg ? "col-lg-" + lg : ""],
    ["", xl ? "col-xl-" + xl : ""],
    ["", xxl ? "col-xxl-" + xxl : ""],
  ]);
};
