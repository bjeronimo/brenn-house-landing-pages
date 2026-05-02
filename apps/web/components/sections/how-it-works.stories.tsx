import type { Meta, StoryObj } from "@storybook/nextjs"

import { HowItWorks } from "./how-it-works"

const meta: Meta<typeof HowItWorks> = {
  title: "Sections/HowItWorks",
  component: HowItWorks,
  parameters: {
    layout: "fullscreen",
    viewport: { defaultViewport: "mobile1" },
  },
}

export default meta

type Story = StoryObj<typeof HowItWorks>

export const Mobile: Story = {}

export const Desktop: Story = {
  parameters: {
    viewport: { defaultViewport: "reset" },
  },
}