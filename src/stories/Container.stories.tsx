import type { Meta, StoryObj } from "@storybook/react";
import { Container } from "@uiComponents";
import { argTypesGenerator, typeDocGenerator } from "@utils";

const meta = {
  title: "Example/Container",
  component: Container,
  tags: ["autodocs"],
  argTypes: {
    ...argTypesGenerator(["children"]),
    alignItems: {
      description: "Align Items of child elements",
      control: "select",
      ...typeDocGenerator(["alignOptions"]),
    },
    gap: {
      description: "Gap for grid/flex layouts",
      control: "select",
      ...typeDocGenerator(["sizeOptions"]),
    },
    justifyContent: {
      description: "Justify Content of child elements",
      control: "select",
      ...typeDocGenerator(["justifyOptions"]),
    },
    padding: {
      description: "Top/Right/Bottom/Left padding",
      control: "select",
      ...typeDocGenerator(["sizeOptions"]),
    },
    margin: {
      description: "Top/Right/Bottom/Left margin",
      control: "select",
      ...typeDocGenerator(["sizeOptions"]),
    },
  },
} satisfies Meta<typeof Container>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  render: (args) => <Container {...args} />,
  args: {
    children: "Hello",
    fluid: true,
    alignItems: "center",
    gap: "lg",
  },
};
