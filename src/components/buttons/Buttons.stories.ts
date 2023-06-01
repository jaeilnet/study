import type { Meta, StoryObj } from "@storybook/react";

import Buttons from "./";

const meta: Meta<typeof Buttons> = {
  title: "Button",
  component: Buttons,
  argTypes: {
    color: {
      options: [["red", "blue", "green"]],
    },
    label: {
      name: "string",
    },
  },
};

export default meta;

type Story = StoryObj<typeof Buttons>;

export const Red: Story = {
  args: {
    color: "red",
    label: "Story book Red Color",
  },
  parameters: {
    layout: "centered",
  },
};

export const Green: Story = {
  args: {
    color: "green",
    label: "Button Test",
  },
};

export const Blue: Story = {
  args: {
    color: "blue",
    label: "Button Test",
  },
};

// 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;
