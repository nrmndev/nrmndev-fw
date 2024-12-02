import type { Meta, StoryObj } from "@storybook/react";
import { List } from "components/component.barrel.index";
import { FaBeer } from "react-icons/fa";
import { typeDocGenerator } from "_utils";

const meta = {
  title: "Example/List",
  component: List,
  tags: ["autodocs"],

  argTypes: {
    iconSize: {
      description: "Size of the Icon",
      control: "number",
    },
    iconColor: {
      description: "Color of the Icon",
      control: "select",
      ...typeDocGenerator(["colorOptions"], "primary"),
    },
    listType: {
      description: "List type",
      control: "select",
      ...typeDocGenerator(["listTypeOptions"], "ordered-list"),
    },
    items: {
      description:
        "Array of list items. Use [{label:string}] and/or [{label:string,children:[{label:string}]}]",
      control: { disable: true },
      // table: {
      //   defaultValue: { summary: "-" },
      // },
    },
    icon: {
      description: "react-icons",
      control: { disable: true },
    },
  },
} satisfies Meta<typeof List>;

export default meta;
type Story = StoryObj<typeof meta>;

export const UnorderedList: Story = {
  render: (args) => <List {...args} />,
  args: {
    listType: "unordered-list",
    //items: [{ label: "List Item 1" }, { label: "List Item 2" }],
  },
};
export const OrderedList: Story = {
  render: (args) => <List {...args} />,
  args: {
    listType: "ordered-list",
    items: [{ label: "List Item 1" }, { label: "List Item 2" }],
  },
};

export const ListWithListStyleIcon: Story = {
  render: (args) => <List {...args} />,
  args: {
    icon: FaBeer,
    items: [{ label: "List Item 1" }, { label: "List Item 2" }],
  },
};

export const ListInlineFlex: Story = {
  render: (args) => <List {...args} />,
  args: {
    display: "inline-flex",
    items: [{ label: "List Item 1" }, { label: "List Item 2" }],
  },
};

export const ListInlineFlexSpaceBetween: Story = {
  render: (args) => <List {...args} />,
  args: {
    display: "inline-flex-space-between",
    items: [{ label: "List Item 1" }, { label: "List Item 2" }],
  },
};
