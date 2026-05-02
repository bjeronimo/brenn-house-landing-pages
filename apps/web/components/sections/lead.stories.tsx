import type { Meta, StoryObj } from "@storybook/nextjs"

import { Lead } from "./lead"

const meta: Meta<typeof Lead> = {
  title: "Sections/Lead",
  component: Lead,
  parameters: {
    layout: "fullscreen",
    viewport: { defaultViewport: "mobile1" },
  },
}

export default meta

type Story = StoryObj<typeof Lead>

export const Mobile: Story = {}

export const Desktop: Story = {
  parameters: {
    viewport: { defaultViewport: "reset" },
  },
}
