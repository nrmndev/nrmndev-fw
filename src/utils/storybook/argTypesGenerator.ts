import { Options } from ".";

// type ArgType<T extends string> = {
//   [key in T]: {
//     name: string;
//     control: {
//       disable: boolean;
//     };
//     description: string;
//     table: {
//       type: {
//         summary: string;
//       };
//     };
//   };
// };

const children = {
  children: {
    name: "children",
    control: { disable: true },
    description: "The content of the component.",
    table: {
      type: { summary: `node` },
    },
  },
};

const color = {
  color: {
    name: "color",
    control: "select",
    options: Options["colorOptions"],
    description: "The content of the component.",
    table: {
      type: { summary: Options["colorOptions"].join("|") },
    },
  },
};

const fontSize = {
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

const size = {
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

const padding = {
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

const margin = {
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

const variant = {
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

const argTypesRecord: Record<string, any> = {
  children,
  color,
  size,
  padding,
  margin,
  variant,
  fontSize,
};
// Create a record of argument types
// const argTypesRecord: Record<string, ArgType> = {
//   children: children,
//   color: color,
// };

type ArgTypesGenerator =
  | "color"
  | "children"
  | "size"
  | "padding"
  | "margin"
  | "variant"
  | "fontSize";

const argTypesGenerator = (args: ArgTypesGenerator[]) => {
  let argTypes: any = {};

  args.map((arg) => {
    argTypes = { ...argTypes, ...argTypesRecord[arg] };
  });
  //console.log(argTypes);
  return argTypes;
};

export default argTypesGenerator;
