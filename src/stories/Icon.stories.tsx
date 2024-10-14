import type { Meta, StoryObj } from "@storybook/react";
import { Icon } from "@uiComponents";
import { FaBeer } from "react-icons/fa";
import { typeDocGenerator } from "@utils";

const meta = {
  title: "Example/Icon",
  component: Icon,
  tags: ["autodocs"],
  parameters: {
    options: {
      showPanel: true, // Show the panel with documentation
      isToolshown: false, // Hide the stories panel
    },
  },
  argTypes: {
    variant: {
      description: "Skin of the Icon",
      control: "select",
      ...typeDocGenerator(["colorOptions", "variantOptions"], "primary"),
    },
    background: {
      description: "Background of the Icon",
      control: "select",
      ...typeDocGenerator(["colorOptions"], "primary"),
    },
    rounded: {
      description: "If rounded or not",
      control: "boolean",
      ...typeDocGenerator(["booleanTypes"], "false"),
    },
    iconSize: {
      description: "Size of the Icon",
      control: "select",
      ...typeDocGenerator(["sizeOptions"], "md"),
    },
  },
} satisfies Meta<typeof Icon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  render: (args) => <Icon {...args} />,
  args: {
    icon: FaBeer,
  },
};
export const SecondarySizeXLarge: Story = {
  render: (args) => <Icon {...args} />,
  args: {
    icon: FaBeer,
    background: "accent1",
    iconSize: "xl",
  },
};
