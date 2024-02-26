import type { Meta, StoryObj } from "@storybook/react";
import Light from "../components/Light";
import "../index.css";

const meta: Meta<typeof Light> = {
  component: Light,
  title: "Light",
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Red: Story = {
  args: {
    bg: "bg-red-500",
  },
};

export const Yellow: Story = {
  args: {
    bg: "bg-yellow-300",
  },
};

export const Blue: Story = {
  args: {
    bg: "bg-blue-500",
  },
};

export const Groupped: Story = {
  render: (_) => (
    <div className="flex flex-col gap-2 bg-gray-800 w-fit px-2 py-2">
      <Light bg="bg-red-500" />
      <Light bg="bg-yellow-300" />
      <Light bg="bg-green-500" />
    </div>
  ),
};
