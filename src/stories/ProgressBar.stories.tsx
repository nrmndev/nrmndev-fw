import type { Meta, StoryObj } from "@storybook/react";
import { ProgressBar } from "components/component.barrel.index";

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
    total: 50,
    current: 35,
  },
};
