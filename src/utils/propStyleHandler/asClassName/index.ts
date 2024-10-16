import { flexClasses } from "./flex";
import flexColumns from "./flexColumns";
import { colorClasses } from "./color";
import { marginClasses } from "./margin";
import { textClasses } from "./text";
import columnBreakpoints from "./columnBreakpoints";
import { displayClasses } from "./display";
export type { AllMarginProps } from "./margin";
const propToClass = {
  flexColumns,
  flex: flexClasses,
  columnBreakpoints,
  color: colorClasses,
  margin: marginClasses,
  text: textClasses,
  display: displayClasses,
};

export default propToClass;
