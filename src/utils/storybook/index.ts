export { default as Options } from "./argTypesGenerator/options";
export { typeDocGenerator } from "./typeDocGenerator";
export { default as argTypesGenerator } from "./argTypesGenerator";
// export { default as childrenAsPropModifier } from "./childrenAsPropModifier";

// const Options = {
//   colorOptions: ["primary", "secondary", "accent"],
//   variantOptions: [
//     "primary-outline",
//     "secondary-outline",
//     "primary-alt",
//     "secondary-alt",
//   ],
// };

// type FlattenProps = keyof typeof Options;

// const flattenOptions = (array: FlattenProps[]) => {
//   let flattenValues: string[] = [];
//   array.map((value) => flattenValues.push(...Options[value]));
//   return flattenValues;
// };

// /**
//  *
//  * @param {FlattenProps} array Array of union types to be used as Controls and Description
//  * @param {string} defaultValue The default value for the table
//  * @returns
//  */
// export const typeDocGenerator = (
//   array: FlattenProps[],
//   defaultValue?: string
// ) => {
//   let options: string[] = [];
//   let table = {
//     type: {
//       summary: "",
//     },
//     defaultValue: { summary: defaultValue ?? undefined },
//   };
//   options = flattenOptions(array);
//   table.type.summary = flattenOptions(array).join(" | ");

//   return {
//     options,
//     table,
//   };
// };
// //flattenOptions(["colorOptions"]);

// //The Shape
// // options: flattenOptions(["colorOptions", "variantOptions"]),
// // table: {
// //   type: { summary: '"number" | "IconType"' }, // Optional: specify the type summary
// //   //defaultValue: { summary: 'Default value' }, // Optional: specify default value
// // },
