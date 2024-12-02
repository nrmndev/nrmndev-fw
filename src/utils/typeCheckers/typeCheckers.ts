import { ValueAndUnitProps } from "_uiTypes";

export const typeCheckers = {
  valueAndUnitProps: isValueAndUnitProps,
};
function isValueAndUnitProps(prop: any): prop is ValueAndUnitProps {
  return (
    typeof prop === "object" &&
    prop !== null && // Check that prop is not null
    "value" in prop &&
    (typeof prop.value === "number" || prop.value === 0) && // Allow 0 as a valid number
    typeof prop.value !== "undefined" && // Value must not be undefined
    (typeof prop.unit === "undefined" || typeof prop.unit === "string") // Optional check for unit
  );
}
