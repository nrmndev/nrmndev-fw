import { BaseProps } from "@uiTypes";
import classNames from "classnames";

export interface IPropsRow extends BaseProps {}

const Row = ({ ...rest }: IPropsRow) => {
  const className = classNames("row");

  return <div {...rest} className={className}></div>;
};

export default Row;
