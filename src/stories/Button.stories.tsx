import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "@uiComponents";
import { FaBeer } from "react-icons/fa";
import { MemoryRouter } from "react-router-dom";
import { argTypesGenerator, typeDocGenerator } from "@utils";

const meta = {
  title: "Example/Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {
    ...argTypesGenerator(["children"]),
    as: {
      description: "Polymorphic button can be rendered as:",
      control: "select",
      ...typeDocGenerator(["buttonAs"], "button"),
    },
    display: {
      description: "Variant Style of the button",
      control: "select",
      options: ["block", "inline-block"],
      table: {
        type: { summary: `"block" | "inline-block"` },
      },
    },
    variant: {
      description: "Variant Style of the button",
      control: "select",
      options: ["outline", "solid"],
      table: {
        type: { summary: `"outline" | "solid"` },
      },
    },
    ...argTypesGenerator(["color", "fontSize", "size", "padding", "margin"]),
    // color: {
    //   description: "Color Style of the button",
    //   control: "select",
    //   ...typeDocGenerator(["colorOptions"], "primary"),
    // },
    // size: {
    //   description: "Size of the button",
    //   control: "select",
    //   ...typeDocGenerator(["sizeOptions"], "md"),
    // },

    // padding: {
    //   description: `Padding of the button.
    //     Value can be string (unit is px) or object (use "unit" to modify unit).
    //     Refer to ...`,
    //   control: "select",
    //   ...typeDocGenerator(["sizeOptions"], "md"),
    // },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const AsButton: Story = {
  render: (args) => (
    <MemoryRouter>
      <Button {...args} />
    </MemoryRouter>
  ),
  args: {
    as: "button",
    children: <FaBeer />,
    variant: "solid-primary",
    size: "md",
    //padding: "sm",
    fontSize: { value: 100 },
    color: "white",
    margin: { top: 10, bottom: 10 },
  },
};
export const WithObjectProps: Story = {
  render: (args) => <Button {...args} />,
  args: {
    children: "Button with utility values as object",
    color: "white",
    padding: { top: 20, right: 30, bottom: 20, left: 30, unit: "px" },
    fontSize: { value: 3.5, unit: "rem" },
    margin: { top: 5, right: 5, bottom: 5, left: 5 },
    onClick: () => {},
  },
};
export const AsNavLink: Story = {
  render: (args) => (
    <MemoryRouter>
      <Button {...args} />
    </MemoryRouter>
  ),
  args: {
    as: "navLink",
    children: "Button as Anchor Link",
    to: "",
  },
};
