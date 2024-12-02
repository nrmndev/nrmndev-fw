import type { Meta, StoryObj } from "@storybook/react";
import { Media } from "components/component.barrel.index";
import { FaBeer } from "react-icons/fa";

const meta = {
  title: "Example/Media",
  component: Media,
  tags: ["autodocs"],
  argTypes: {
    body: {
      description: "Body content of the media",
      control: { disable: true },
    },
    heading: {
      description: "Heading Content of the media",
    },

    icon: {
      description: "react-icons",
      control: { disable: true },
    },
  },
} satisfies Meta<typeof Media>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  render: (args) => <Media {...args} />,
  args: {
    body: { children: <>Sample Body</> },
    heading: { children: "Sample Heading" },
    icon: { icon: FaBeer },
  },
};
