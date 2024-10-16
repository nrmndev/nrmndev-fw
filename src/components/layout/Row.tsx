import { BaseProps, FlexColumnProps, FlexProps } from "@uiTypes";
import { propStyleHandler } from "@utils";
import classNames from "classnames";

export interface IPropsRow extends BaseProps, FlexColumnProps, FlexProps {}

const Row = ({
  xsColumns,
  smColumns,
  mdColumns,
  lgColumns,
  xlColumns,
  xxlColumns,
  flex,
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
  const { className } = propStyleHandler({ flexColumns, flex });
  const classes = classNames("row", className);
  return <div {...rest} className={classes}></div>;
};

export default Row;
