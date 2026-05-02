import type { Meta, StoryObj } from "@storybook/nextjs"

import { Faq } from "./faq"

const meta: Meta<typeof Faq> = {
  title: "Sections/Faq",
  component: Faq,
  parameters: {
    layout: "fullscreen",
    viewport: { defaultViewport: "mobile1" },
  },
}

export default meta

type Story = StoryObj<typeof Faq>

export const Mobile: Story = {}

export const Desktop: Story = {
  parameters: {
    viewport: { defaultViewport: "reset" },
  },
}
