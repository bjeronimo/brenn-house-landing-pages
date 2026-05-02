import type { Meta, StoryObj } from "@storybook/nextjs"

import { Stats } from "./stats"

const meta: Meta<typeof Stats> = {
  title: "Sections/Stats",
  component: Stats,
  parameters: {
    layout: "fullscreen",
    viewport: { defaultViewport: "mobile1" },
  },
}

export default meta

type Story = StoryObj<typeof Stats>

export const Mobile: Story = {}

export const Desktop: Story = {
  parameters: {
    viewport: { defaultViewport: "reset" },
  },
}
