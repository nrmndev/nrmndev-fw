import { ColumnBreakpointOptions, GetStyleReturnProps } from "_uiTypes";

export const getColumnBreakPointStyle = ({
  lg,
  md,
  sm,
  xl,
  xs,
  xxl,
}: ColumnBreakpointOptions): GetStyleReturnProps => {
  const classes: string[] = [];
  const inline: React.CSSProperties = {};
  if (!xs && !sm && !md && !lg && !xl && !xxl) return { classes: "", inline };

  const breakpoints = [
    { size: "xs", value: xs },
    { size: "sm", value: sm },
    { size: "md", value: md },
    { size: "lg", value: lg },
    { size: "xl", value: xl },
    { size: "xxl", value: xxl },
  ];

  breakpoints.forEach(({ size, value }) => {
    if (value) {
      classes.push(`col-${size}-${value}`);
    }
  });

  return { classes: classes.join(" "), inline };
};
