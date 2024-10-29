export const isOfType = <T>(value: any): value is T => {
  if (typeof value !== "object" || value === null) {
    return false;
  }

  // Get the keys of T
  const keys = Object.keys(value) as (keyof T)[];

  //console.log({ value: value, keys: keys });
  return keys.every((key) => key in value);
};
