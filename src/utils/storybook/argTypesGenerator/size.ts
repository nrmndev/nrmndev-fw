import Options from "./options";
export default {
  size: {
    name: "size",
    control: "select",
    options: Options["sizeOptions"],
    description: "Variant for size",
    table: {
      type: { summary: Options["sizeOptions"].join("|") },
    },
  },
};
