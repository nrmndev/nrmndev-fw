import { Options } from "./Index";

type FlattenProps = keyof typeof Options;

const flattenOptions = (array: FlattenProps[]) => {
  let flattenValues: any[] = [];
  array.map((value) => flattenValues.push(...Options[value]));
  return flattenValues;
};

/**
 *
 * @param {FlattenProps} array Array of union types to be used as Controls and Description
 * @param {string} defaultValue The default value for the table
 * @returns
 */

export const typeDocGenerator = (
  array: FlattenProps[],
  defaultValue?: string
) => {
  let options: string[] = [];
  let table = {
    type: {
      summary: "",
    },
    defaultValue: { summary: defaultValue ?? undefined },
  };
  options = flattenOptions(array);
  table.type.summary = flattenOptions(array).join(" | ");

  return {
    options,
    table,
  };
};
