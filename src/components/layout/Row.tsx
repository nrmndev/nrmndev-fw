import { BaseProps, FlexColumnProps } from "@uiTypes";
import { propStyleHandler } from "@utils";
import classNames from "classnames";

export interface IPropsRow extends BaseProps, FlexColumnProps {}

const Row = ({
  xsColumns,
  smColumns,
  mdColumns,
  lgColumns,
  xlColumns,
  xxlColumns,
  ...rest
}: IPropsRow) => {
  const flexColumns = {
    xsColumns,
    smColumns,
    mdColumns,
    lgColumns,
    xlColumns,
    xxlColumns,
  };
  const { className } = propStyleHandler({ flexColumns });
  const classes = classNames("row", flexColumns && `flex`, className);
  return <div {...rest} className={classes}></div>;
};

export default Row;
