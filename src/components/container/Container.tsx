import { ColumnBaseProps } from "@typekits";
import { MergePropsAsClassNames } from "@utils";

type IProps = React.HTMLProps<HTMLDivElement> & { fluid?: boolean };

const Container = ({ children, fluid = false, ...rest }: IProps) => {
  const classNames = MergePropsAsClassNames([
    [rest.className ? rest.className : ""],
    ["", fluid ? "container--fluid" : "container"],
  ]);
  return (
    <div className={classNames} {...rest}>
      {children}
    </div>
  );
};

interface IPropsColumn
  extends React.HTMLProps<HTMLDivElement>,
    ColumnBaseProps {}

Container.Column = ({
  xs = "",
  sm = "",
  md = "",
  lg = "",
  xl = "",
  ...rest
}: IPropsColumn) => {
  const classNames = MergePropsAsClassNames([
    [
      "",
      "col-xs-" + xs,
      "col-sm-" + sm,
      "col-md-" + md,
      "col-lg-" + lg,
      "col-xl-" + xl,
    ],
    [rest.className ? rest.className : ""],
  ]);
  return <div {...rest} className={classNames}></div>;
};

interface IPropsRow extends React.HTMLProps<HTMLDivElement> {}

Container.Row = ({ ...rest }: IPropsRow) => {
  const classNames = MergePropsAsClassNames([
    ["row"],
    [rest.className ? rest.className : ""],
  ]);

  return <div {...rest} className={classNames}></div>;
};

export default Container;
