import type { Meta, StoryObj } from "@storybook/react";
import { List, ProgressBar } from "@uiComponents";
import { FaBeer } from "react-icons/fa";

const meta = {
  title: "Example/ProgressBar",
  component: ProgressBar,
  tags: ["autodocs"],
} satisfies Meta<typeof ProgressBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  render: (args) => <ProgressBar {...args} />,
  args: {
    totalProgress: 50,
    currentProgress: 35,
  },
};
