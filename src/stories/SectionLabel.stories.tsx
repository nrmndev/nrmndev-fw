import type { Meta, StoryObj } from "@storybook/react";
import { SectionLabel } from "@uiComponents";

const meta = {
  title: "Example/SectionLabel",
  component: SectionLabel,
  tags: ["autodocs"],
} satisfies Meta<typeof SectionLabel>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Center: Story = {
  render: (args) => <SectionLabel {...args} />,
  args: {
    label: "Sample Label in the center of the section",
    position: "center",
  },
};
export const Left: Story = {
  render: (args) => <SectionLabel {...args} />,
  args: {
    label: "Sample Label on the left of the section",
    position: "left",
  },
};

export const Right: Story = {
  render: (args) => <SectionLabel {...args} />,
  args: {
    label: "Sample Label on the right of the section",
    position: "right",
  },
};
