import Options from "./options";

export default {
  textTransform: {
    name: "textTransform",
    control: "select",
    options: Options["textTransformOptions"],
    description: `Controls text transform. This prop uses \`textTransformProps\`, which accepts values from \`textTransformOptions\` (a union of predefined alignment values). For more info visit API Documentation: [textTransform](https://nrmndev-fw.ngsilvestre.com)`,
    table: {
      type: {
        summary: `textTransformOptions`,
      },
    },
  },
};
