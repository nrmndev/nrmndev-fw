import { ColumnBreakpointProps } from "@uiTypes";

const columnBreakpoints = ({
  lg,
  md,
  sm,
  xl,
  xs,
  xxl,
}: ColumnBreakpointProps): string => {
  const classes: string[] = [];

  xs ? classes.push(`col-xs-${xs}`) : undefined;
  sm ? classes.push(`col-sm-${sm}`) : undefined;
  md ? classes.push(`col-md-${md}`) : undefined;
  lg ? classes.push(`col-lg-${lg}`) : undefined;
  xl ? classes.push(`col-xs-${xl}`) : undefined;
  xxl ? classes.push(`col-xxl-${xxl}`) : undefined;
  return classes.join(" ");
};

export default columnBreakpoints;
