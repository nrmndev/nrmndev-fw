import { BaseProps, ColumnProps, SpacingProps } from "@typekits";
import { mergePropsAsClassNames, propToClass } from "@utils";

export interface IPropsColumn extends BaseProps, ColumnProps, SpacingProps {}

const Column = ({
  xs = undefined,
  sm = undefined,
  md = undefined,
  lg = undefined,
  xl = undefined,
  xxl = undefined,
  padding = undefined,
  margin = undefined,
  //padding = { top: "", left: "", right: "", bottom: "" },
  //margin = { top: "", left: "", right: "", bottom: "" },
  ...rest
}: IPropsColumn) => {
  const classNames = mergePropsAsClassNames([
    ["", propToClass("columnBreakpoints", { xs, sm, md, lg, xl, xxl }) ?? ""],
    ["", propToClass("padding", padding) ?? ""],
    ["", propToClass("margin", margin) ?? ""],
    [rest.className ?? ""],
  ]);
  return <div {...rest} className={classNames}></div>;
};

export default Column;
