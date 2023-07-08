import type { Meta, StoryObj } from "@storybook/react";

import { CcButton } from "./CcButton";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof CcButton> = {
  title: "atom/CcButton",
  component: CcButton,
  tags: ["autodocs"],
  argTypes: {
    theme: {
      description: "Theme of CcButton",
      options: ["primary", "secondary"],
      control: { type: "radio" },
    },
  },
};

export default meta;
type Story = StoryObj<typeof CcButton>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  args: {
    theme: "primary",
    label: "CcButton",
  },
};

export const Secondary: Story = {
  args: {
    theme: "secondary",
    label: "CcButton",
  },
};
