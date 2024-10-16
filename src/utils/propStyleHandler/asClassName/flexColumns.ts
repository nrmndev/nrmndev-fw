import { FlexColumnProps } from "@uiTypes";

const flexColumns = ({
  xlColumns,
  lgColumns,
  mdColumns,
  smColumns,
  xsColumns,
  xxlColumns,
}: FlexColumnProps): string => {
  const classes: string[] = [];

  xsColumns ? classes.push(`flex-xs-${xsColumns}`) : undefined;
  smColumns ? classes.push(`flex-sm-${smColumns}`) : undefined;
  mdColumns ? classes.push(`flex-md-${mdColumns}`) : undefined;
  lgColumns ? classes.push(`flex-lg-${lgColumns}`) : undefined;
  xlColumns ? classes.push(`flex-xl-${xlColumns}`) : undefined;
  xxlColumns ? classes.push(`flex-xxl-${xxlColumns}`) : undefined;
  return classes.join(" ");
};

export default flexColumns;
