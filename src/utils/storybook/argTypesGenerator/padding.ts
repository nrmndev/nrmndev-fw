import Options from "./options";

export default {
  padding: {
    name: "padding",
    control: "select",
    options: Options["sizeOptions"],
    description: "Controls the padding",
    table: {
      type: { summary: `"string" | "object"` },
    },
  },
};
