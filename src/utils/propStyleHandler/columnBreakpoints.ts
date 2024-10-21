import { ColumnBreakpointProps } from "@uiTypes";
import { StyleReturnType } from "./styleReturnType";

export const getColumnBreakPointStyle = ({
  lg,
  md,
  sm,
  xl,
  xs,
  xxl,
}: ColumnBreakpointProps): StyleReturnType => {
  const classes: string[] = [];
  const inline: React.CSSProperties = {};
  if (!xs && !sm && !md && !lg && !xl && !xxl) return { classes: "", inline };

  xs ? classes.push(`col-xs-${xs}`) : undefined;
  sm ? classes.push(`col-sm-${sm}`) : undefined;
  md ? classes.push(`col-md-${md}`) : undefined;
  lg ? classes.push(`col-lg-${lg}`) : undefined;
  xl ? classes.push(`col-xs-${xl}`) : undefined;
  xxl ? classes.push(`col-xxl-${xxl}`) : undefined;
  return { classes: classes.join(" "), inline };
};
