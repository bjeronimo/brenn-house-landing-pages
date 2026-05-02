import type { Meta, StoryObj } from "@storybook/nextjs"

import { Cta } from "./cta"

const meta: Meta<typeof Cta> = {
  title: "Sections/Cta",
  component: Cta,
  parameters: {
    layout: "fullscreen",
    viewport: { defaultViewport: "mobile1" },
  },
}

export default meta

type Story = StoryObj<typeof Cta>

export const Mobile: Story = {}

export const Desktop: Story = {
  parameters: {
    viewport: { defaultViewport: "reset" },
  },
}
