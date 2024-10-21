import fontSize from "utils/storybook/argTypesGenerator/fontSize";
import { getBackgroundStyle } from "./background";
import { getBorderStyle } from "./border";
import { getBorderRadiusStyle } from "./borderRadius";
import { getColorStyle } from "./color";
import { getColumnBreakPointStyle } from "./columnBreakpoints";
import { getDisplayStyle } from "./display";
import { getFlexStyle } from "./flex";
import { getFlexColumnStyle } from "./flexColumn";
import { getMarginStyle } from "./margin";
import { getPaddingStyle } from "./padding";
import { getTextStyle } from "./text";
import { getWidthStyle } from "./width";
import { getFontSizeStyle } from "./fontSize";
import { getHeightStyle } from "./height";
import { getPositionStyle } from "./position";

export type StyleReturnType = {
  inline: React.CSSProperties;
  classes: string;
};

export const getStyle = {
  margin: getMarginStyle,
  padding: getPaddingStyle,
  text: getTextStyle,
  width: getWidthStyle,
  color: getColorStyle,
  background: getBackgroundStyle,
  border: getBorderStyle,
  borderRadius: getBorderRadiusStyle,
  columnBreakPoint: getColumnBreakPointStyle,
  display: getDisplayStyle,
  flex: getFlexStyle,
  flexColumns: getFlexColumnStyle,
  fontSize: getFontSizeStyle,
  height: getHeightStyle,
  position: getPositionStyle,
};
