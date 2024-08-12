import { ColumnProps, SpacingProps } from "@typekits";
import { MergePropsAsClassNames } from "@utils";

export interface IPropsColumn
  extends React.HTMLProps<HTMLDivElement>,
    ColumnProps,
    SpacingProps {}

const Column = ({
  xs = "",
  sm = "",
  md = "",
  lg = "",
  xl = "",
  xxl = "",
  padding = { top: "", left: "", right: "", bottom: "" },
  margin = { top: "", left: "", right: "", bottom: "" },
  ...rest
}: IPropsColumn) => {
  const classNames = MergePropsAsClassNames([
    [
      "",
      xs ? "col-xs-" + xs : "",
      sm ? "col-sm-" + sm : "",
      md ? "col-md-" + md : "",
      lg ? "col-lg-" + lg : "",
      xl ? "col-xl-" + xl : "",
      xxl ? "col-xxl-" + xxl : "",
      padding.top ? "pt-" + padding.top : "",
      padding.right ? "pr-" + padding.right : "",
      padding.bottom ? "pb-" + padding.bottom : "",
      padding.left ? "pl-" + padding.left : "",
      margin.top ? "mt-" + margin.top : "",
      margin.right ? "mr-" + margin.right : "",
      margin.bottom ? "mb-" + margin.bottom : "",
      margin.left ? "ml-" + margin.left : "",
    ],
    [rest.className ? rest.className : ""],
  ]);
  return <div {...rest} className={classNames}></div>;
};

export default Column;
