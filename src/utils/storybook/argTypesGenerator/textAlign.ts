import Options from "./options";

export default {
  textAlign: {
    name: "textAlign",
    control: "select",
    options: Options["textAlignOptions"],
    description: `Controls text align. This prop uses \`textAlignProps\`, which accepts values from \`textAlignOptions\` (a union of predefined alignment values). For more info visit API Documentation: [textAlign](https://nrmndev-fw.ngsilvestre.com)`,
    table: {
      type: {
        summary: `[textAlignOptions]`,
      },
    },
  },
};
