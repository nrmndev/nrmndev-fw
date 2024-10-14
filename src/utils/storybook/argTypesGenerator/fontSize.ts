import Options from "./options";
export const sizeOptions = ["xs", "sm", "md", "lg", "xl", "xxl"];
export default {
  fontSize: {
    name: "fontSize",
    control: "select",
    options: Options["sizeOptions"],
    description: "Controls the fontSize",
    table: {
      type: {
        summary: Options["sizeOptions"].join(" | ").concat(" | {unit,value}"),
      },
    },
  },
};
