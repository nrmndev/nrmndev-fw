import Options from "./options";

export default {
  variant: {
    name: "variant",
    control: "select",
    options: Options["sizeOptions"],
    description: "Controls the variant",
    table: {
      type: { summary: Options["variantOptions"].join("|") },
    },
  },
};
