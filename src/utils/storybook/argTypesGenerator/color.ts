import Options from "./options";

// export const colorOptions = [
//   "primary",
//   "secondary",
//   "accent1",
//   "accent2",
//   "accent3",
//   "white",
//   "black",
//   "light",
//   "dark",
// ];
export default {
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
