import { FlexColumnProps } from "@uiTypes";
import { StyleReturnType } from "./styleReturnType";

export const getFlexColumnStyle = (
  flexColumns?: FlexColumnProps
): StyleReturnType => {
  let classes: string[] = [];
  let inline: React.CSSProperties = {};

  if (typeof flexColumns === "undefined") {
    return { classes: "", inline };
  }
  const { lgColumns, mdColumns, smColumns, xlColumns, xsColumns, xxlColumns } =
    flexColumns;

  xsColumns ? classes.push(`flex-xs-${xsColumns}`) : ``;
  smColumns ? classes.push(`flex-sm-${smColumns}`) : ``;
  mdColumns ? classes.push(`flex-md-${mdColumns}`) : ``;
  lgColumns ? classes.push(`flex-lg-${lgColumns}`) : ``;
  xlColumns ? classes.push(`flex-xl-${xlColumns}`) : ``;
  xxlColumns ? classes.push(`flex-xxl-${xxlColumns}`) : ``;
  return { classes: classes.join(" "), inline };
};
