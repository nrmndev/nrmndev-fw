import { ColumnProps } from "@typekits";
import { MergePropsAsClassNames } from "@utils";

export interface IPropsColumn
  extends React.HTMLProps<HTMLDivElement>,
    ColumnProps {}

const Column = ({
  xs = "",
  sm = "",
  md = "",
  lg = "",
  xl = "",
  xxl = "",
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
    ],
    [rest.className ? rest.className : ""],
  ]);
  return <div {...rest} className={classNames}></div>;
};

export default Column;
