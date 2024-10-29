/**
 * Type Predicate utility function to narrow down your type checking, often used when there is a discriminating props present in union
 * @param value key-value pair Props
 * @param props Array of string Props
 * @returns `true` if atleast one of the key in the array is present
 *
 * @example
 * if (isPropPresent<BorderEdgeOptions>(border, ["width", "style", "color"])) {
 *  console.log("Props width, style or color is present");
 * } else {
 *  console.log("Props width, style and color are all not present");
 * }
 */

export const isPropPresent = <T>(
  value: unknown,
  props: (keyof T)[] = []
): value is T => {
  if (typeof value !== "object" || value === null) {
    return false;
  }

  // Get the keys of T
  const keys = Object.keys(value) as (keyof T)[];
  // console.log(keys);
  // Check if at least one valid key exists in the object
  const hasValidKey = keys.some((key) => key in value);

  //Check if invalidProps are present from value
  const propIsPresent = keys.some((key) => props.includes(key));
  //console.log(`hasInvalidProperties: ${hasInvalidProperties}`);
  return hasValidKey && propIsPresent;
};
