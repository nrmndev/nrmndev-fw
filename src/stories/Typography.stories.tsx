import type { Meta, StoryObj } from "@storybook/react";
import { Typography } from "components/component.barrel.index";
import { argTypesGenerator } from "_utils";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Example/Typography",
  component: Typography,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    // 👇 All Button stories expect a label arg
    // Make 'label' non-editable by hiding it
    //children: childrenAsPropModifier(),
    //...() => argTypesGenerator(["color", "children"]),
    ...argTypesGenerator(["children", "color"]),
    // children: {
    //   name: "children",
    //   control: { disable: true },
    //   description: "The content of the component.",
    //   table: {
    //     type: { summary: `node` },
    //   },
    // },
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  // args: { onClick: fn() },
} satisfies Meta<typeof Typography>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const AsParagraph: Story = {
  args: {
    as: "p",
    children: "Typography rendered as paragraph",
    color: "primary",
  },
};

export const AsH1: Story = {
  args: {
    children: "Typography rendered as H1",
    as: "h1",
  },
};

export const AsH2: Story = {
  args: {
    children: "Typography rendered as H2",
    as: "h2",
  },
};
export const AsH3: Story = {
  args: {
    children: "Typography rendered as H3",
    as: "h3",
  },
};
export const AsH4: Story = {
  args: {
    children: "Typography rendered as H4",
    as: "h4",
  },
};
export const AsH5: Story = {
  args: {
    children: "Typography rendered as H5",
    as: "h5",
  },
};
export const AsH6: Story = {
  args: {
    children: "Typography rendered as H6",
    as: "h6",
  },
};
export const AsSpan: Story = {
  args: {
    children: "Typography rendered as span",
    as: "span",
  },
};
