import { BaseProps, FlexColumnProps, FlexProps, PositionProps } from "@uiTypes";
import { propStyleHandler } from "@utils";
import classNames from "classnames";
import { UtilityStyledComponent } from "components/utility-styled-component";

export interface IPropsRow
  extends BaseProps,
    FlexColumnProps,
    FlexProps,
    PositionProps {}

const Row = (props: IPropsRow) => {
  // const flexColumns = {
  //   xsColumns,
  //   smColumns,
  //   mdColumns,
  //   lgColumns,
  //   xlColumns,
  //   xxlColumns,
  // };
  // const { className } = propStyleHandler({ flexColumns, flex });
  //const classes = classNames("row", className);
  return (
    <UtilityStyledComponent
      as="div"
      {...props}
      className={"row"}
    ></UtilityStyledComponent>
  );
};

export default Row;
