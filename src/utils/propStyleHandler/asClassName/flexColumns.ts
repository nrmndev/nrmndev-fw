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

  xsColumns && classes.push(`flex-xs-${xsColumns}`);
  smColumns && classes.push(`flex-sm-${smColumns}`);
  mdColumns && classes.push(`flex-md-${mdColumns}`);
  lgColumns && classes.push(`flex-lg-${lgColumns}`);
  xlColumns && classes.push(`flex-xl-${xlColumns}`);
  xxlColumns && classes.push(`flex-xxl-${xxlColumns}`);
  return classes.join(" ");
};

export default flexColumns;
