import { paddingClasses } from "./padding";
import { marginClasses } from "./margin";
import {
  FlexBoxProps,
  SizeUnionTypes,
  PositionUnionTypes,
  ColumnProps,
} from "@typekits";
import { columnBreakPointClasses } from "./column";
import { flexBoxClasses } from "./flexBox";

//type AcceptableProps = PaddingProps & MarginProps & ColumnBreakpointProps & FlexBoxProps;

// Mapping of class generation functions to their respective property types
type ClassesMap = {
  padding?: SizeUnionTypes | PositionUnionTypes;
  margin?: SizeUnionTypes | PositionUnionTypes;
  flexBox?: FlexBoxProps;
  columnBreakPoints?: ColumnProps;
};

// Mapping of class generation functions to their respective property types
const classes: {
  [K in keyof ClassesMap]: (value: ClassesMap[K]) => string | undefined;
} = {
  padding: paddingClasses,
  margin: marginClasses,
  flexBox: flexBoxClasses,
  columnBreakPoints: columnBreakPointClasses,
};

/**
 * Converts a property and its value to a custom utility class.
 * @param key - The key representing the type of class to generate.
 * @param value - The value to be used in class generation.
 * @returns The generated class name or undefined if no class is generated.
 * @example
 * // For padding with a size value
 * propToClass('padding', "sm"); // Returns the corresponding class name for 'p-sm'
 * // For margin with a object value
 * propToClass('margin', {top: "sm", bottom: "md"}); // Returns the corresponding class name for 'mt-sm mb-md'
 *
 */

function propToClass<K extends keyof ClassesMap>(
  key: K,
  value: ClassesMap[K]
): string | undefined {
  // Return undefined for null or undefined values
  if (value === undefined || value === null) return undefined; // Handles both null and undefined

  // If the value is a string, return it directly
  if (typeof value === "string") return value;

  // Ensure the class function exists and call it with the value
  const classFunction = classes[key];
  if (classFunction) {
    return classFunction(value);
  }

  // Optionally log an error if the class function is not found
  console.warn(`No class function found for key: ${key}`);
  return undefined;
}

export default propToClass;
