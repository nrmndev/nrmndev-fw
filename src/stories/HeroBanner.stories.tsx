import type { Meta, StoryObj } from "@storybook/react";
import { HeroBanner } from "components/component.barrel.index";

const meta = {
  title: "Example/HeroBanner",
  component: HeroBanner,
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    //layout: "fullscreen",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof HeroBanner>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  render: (args) => <HeroBanner {...args} />,
  args: {
    // level: 3,
    // children: "Hello",
  },
};
