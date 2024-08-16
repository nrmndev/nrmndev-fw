import { BaseProps, ColumnProps, FlexBoxProps, SpacingProps } from "@typekits";
import { mergePropsAsClassNames, propToClass } from "@utils";

export interface IPropsColumn
  extends BaseProps,
    ColumnProps,
    SpacingProps,
    FlexBoxProps {}

const Column = ({
  xs,
  sm,
  md,
  lg,
  xl,
  xxl,
  padding,
  margin,
  justifySelf,
  alignSelf,
  ...rest
}: IPropsColumn) => {
  const classNames = mergePropsAsClassNames([
    ["", propToClass("columnBreakPoints", { xs, sm, md, lg, xl, xxl }) ?? ""],
    ["", propToClass("padding", padding) ?? ""],
    ["", propToClass("margin", margin) ?? ""],
    ["", propToClass("flexBox", { justifySelf, alignSelf }) ?? ""],
    ["", propToClass("margin", margin) ?? ""],
    [rest.className ?? ""],
  ]);
  return <div {...rest} className={classNames}></div>;
};

export default Column;
