import "../src/styles/main.scss";
import { Preview, StoryFn } from "@storybook/react";
import { CssVariableProvider } from "../src/context/CssProvider";
import { withReactContext } from "storybook-react-context";
const preview: Preview = {
  // decorators: [
  //   (Story) => (
  //       <div className="Sample">
  //         <Story />
  //       </div>
  //     );
  // ],
  // decorators: [
  //   withReactContext({
  //     context: CssVariableProvider,
  //     contextValue: { "--color-primary": "#4CB944" },
  //     initialState: { "--color-primary": "#4CB944" }, // Initial value for the context
  //   }),
  // ],
};

export default preview;

// export default preview;

// import type { Preview } from "@storybook/react";
// import "../src/styles/main.scss";
// const preview: Preview = {
//   parameters: {
//     controls: {
//       matchers: {
//         color: /(background|color)$/i,
//         date: /Date$/i,
//       },
//     },
//     options: {
//       // The `a` and `b` arguments in this function have a type of `import('@storybook/types').IndexEntry`. Remember that the function is executed in a JavaScript environment, so use JSDoc for IntelliSense to introspect it.
//       storySort: (a, b) => {
//         a.id.includes("docs") //Always put "Docs" tab first
//           ? -1
//           : a.id === b.id
//           ? 0
//           : a.id.localeCompare(b.id, undefined, { numeric: true });
//       },
//     },
//   },
//   argTypes: {
//     children: {
//       control: { disable: true }, // Disable children globally
//       description:
//         "The content to be rendered inside the component as children.",
//       table: {
//         type: { summary: '"ReactNode" | "string" | "number" ' }, // Add a type summary for the children prop
//       },
//     },
//   },
// };

// export default preview;
