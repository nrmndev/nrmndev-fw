import { isPropPresent } from "./isPropPresent";

export const isPropAbsent = <T>(
  value: unknown,
  props: (keyof T)[] = []
): value is T => {
  return !isPropPresent(value, props);
};
