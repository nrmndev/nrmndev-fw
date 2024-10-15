import {
  BackgroundProps,
  BaseProps,
  BorderProps,
  ColumnProps,
  FlexProps,
  SpacingProps,
} from "@uiTypes";
import { propStyleHandler } from "@utils";
import classNames from "classnames";

export interface ColumnComponentProps
  extends BaseProps,
    BackgroundProps,
    BorderProps,
    ColumnProps,
    SpacingProps,
    FlexProps {}

const Column = ({
  xs,
  sm,
  md,
  lg,
  xl,
  xxl,
  background,
  border,
  padding,
  margin,
  flex,
  ...rest
}: ColumnComponentProps) => {
  const { className, inline } = propStyleHandler({
    userStyle: rest.style,
    background,
    flex,
    border,
    margin,
    padding,
  });
  const combinedClasses = classNames(
    //flex ? "col" : "",
    "col",
    xs ? `col-xs-${xs}` : "",
    sm ? `col-sm-${sm}` : "",
    md ? `col-md-${md}` : "",
    lg ? `col-lg-${lg}` : "",
    xl ? `col-xl-${xl}` : "",
    xxl ? `col-xxl-${xxl}` : "",
    className,
    rest.className
  );
  return <div {...rest} className={combinedClasses} style={inline}></div>;
};

export default Column;
