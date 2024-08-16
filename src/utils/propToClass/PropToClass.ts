import { paddingClasses } from "./Padding";
import { marginClasses } from "./Margin";
import {
  MarginProps,
  PaddingProps,
  ColumnBreakpointProps,
  // ColumnTypes,
  // SizeUnionTypes,
  // PositionUnionTypes,
} from "@typekits";
import { columnBreakPointClasses } from "./Column";

type AcceptableProps = PaddingProps & MarginProps & ColumnBreakpointProps;

// type ClassesMap = {
//   padding: SizeUnionTypes | PositionUnionTypes;
//   margin: SizeUnionTypes | PositionUnionTypes;
//   columnBreakPoints: ColumnTypes;
// };

// Add pointer inside classes function having the key used in action.value (which used in prop)
const classes: {
  [K in keyof AcceptableProps]: (
    value: AcceptableProps[K]
  ) => string | undefined;
} = {
  padding: paddingClasses,
  margin: marginClasses,
  columnBreakpoints: columnBreakPointClasses,
};

function propToClass<K extends keyof AcceptableProps>(
  key: K,
  value: AcceptableProps[K]
): string | undefined {
  console.log(value);
  if (!value) return;
  if (typeof value === "string") {
    return value;
  } else {
    return classes[key]?.(value!) ?? undefined;
  }
}

export default propToClass;

// propToClass("margin", "lg");
// propToClass("padding", { bottom: "lg", right: "lg" });
// propToClass("columnBreakPoints", { xl: 3, sm: 12 });
// function classGenerator<T extends PropTypes>(action: T): string | undefined {
//   let classNames: string | undefined = "";
//   if (typeof action.value === "string") {
//     classNames = action.value;
//   } else {
//     classNames = classes[action.property](action.value) ?? undefined;
//   }
//   return classNames;
// }

// Type 'K' cannot be used to index type '
// {
//   padding: ({ top, right, bottom, left, }: PositionUnionTypes) => string | undefined;
//   margin: ({ top, right, bottom, left, }: PositionUnionTypes) => string | undefined;
//   columnBreakPoints: ({ xs, sm, md, lg, xl, xxl, }: ColumnTypes) => string | undefined;
// }'
