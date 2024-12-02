import { ColumnItemsProps, GetStyleReturnProps } from "_uiTypes";
export const getColumnItemsStyle = (
  columnItems: ColumnItemsProps["columnItems"]
): GetStyleReturnProps => {
  let classes: string[] = [];
  let inline: React.CSSProperties = {};

  if (typeof columnItems === "undefined") {
    return { classes: "", inline };
  }

  const { lg, md, sm, xl, xs, xxl } = columnItems;
  xs ? classes.push(`flex-xs-${xs}`) : ``;
  sm ? classes.push(`flex-sm-${sm}`) : ``;
  md ? classes.push(`flex-md-${md}`) : ``;
  lg ? classes.push(`flex-lg-${lg}`) : ``;
  xl ? classes.push(`flex-xl-${xl}`) : ``;
  xxl ? classes.push(`flex-xxl-${xxl}`) : ``;

  return { classes: classes.join(" "), inline };
};
