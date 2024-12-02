import type { Meta, StoryObj } from "@storybook/react";
import { Heading } from "components/component.barrel.index";
import { argTypesGenerator } from "_utils";

const meta = {
  title: "Example/Heading",
  component: Heading,
  tags: ["autodocs"],
  argTypes: {
    ...argTypesGenerator(["children"]),
    level: {
      description: "Level of the Heading",
      control: "select",
      defaultValue: { summary: 2 },
    },
  },
} satisfies Meta<typeof Heading>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  render: (args) => <Heading {...args} />,
  args: {
    level: 3,
    children: "Hello",
  },
};
