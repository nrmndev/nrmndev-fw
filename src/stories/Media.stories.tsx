import type { Meta, StoryObj } from "@storybook/react";
import { Media } from "@uiComponents";
import { FaBeer } from "react-icons/fa";
import { typeDocGenerator } from "./utility/Index";

const meta = {
  title: "Example/Media",
  component: Media,
  tags: ["autodocs"],
  argTypes: {
    iconSize: {
      description: "Size of the Icon",
      control: "select",
      ...typeDocGenerator(["sizeOptions"], "md"),
    },
    body: {
      description: "Body content of the media",
      control: { disable: true },
    },
    heading: {
      description: "Heading Content of the media",
    },
    roundedIcon: {
      description: "Rounded Icon or flat",
    },
    link: {
      description: "Link of media, must be valid URL",
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
    body: <>Sample Body</>,
    heading: "Sample Heading",
    iconSize: "lg",
    roundedIcon: true,
    icon: FaBeer,
  },
};
