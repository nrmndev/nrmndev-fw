import Options from "./options";

export default {
  margin: {
    name: "margin",
    control: "select",
    options: Options["sizeOptions"],
    description: "Controls the margin",
    table: {
      type: { summary: `"string" | "object"` },
    },
  },
};
