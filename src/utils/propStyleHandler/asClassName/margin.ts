import { SizeNegativeOptions, SizeOptions } from "@uiTypes";

export type AllMarginProps = {
  margin?: SizeOptions;
  vMargin?: SizeOptions;
  hMargin?: SizeOptions;
  marginTop?: SizeOptions | SizeNegativeOptions;
  marginRight?: SizeOptions | SizeNegativeOptions;
  marginBottom?: SizeOptions | SizeNegativeOptions;
  marginLeft?: SizeOptions | SizeNegativeOptions;
};

export const marginClasses = (color: AllMarginProps): string => {
  const {
    hMargin,
    vMargin,
    margin,
    marginTop,
    marginRight,
    marginBottom,
    marginLeft,
  } = color;
  let classes: string[] = [];
  hMargin && classes.push(`mh-${hMargin === "zero" ? "zero" : hMargin}`);
  vMargin && classes.push(`mv-${vMargin === "zero" ? "zero" : vMargin}`);
  margin && classes.push(`m-${margin === "zero" ? "zero" : margin}`);
  marginTop && classes.push(`mt-${marginTop === "zero" ? "zero" : marginTop}`);
  marginRight &&
    classes.push(`mr-${marginRight === "zero" ? "zero" : marginRight}`);
  marginBottom &&
    classes.push(`mb-${marginBottom === "zero" ? "zero" : marginBottom}`);
  marginLeft &&
    classes.push(`ml-${marginLeft === "zero" ? "zero" : marginLeft}`);
  return classes.join(" ");
};
