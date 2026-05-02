import type { Meta, StoryObj } from "@storybook/nextjs"

import { About } from "./about"

const meta: Meta<typeof About> = {
  title: "Sections/About",
  component: About,
  parameters: {
    layout: "fullscreen",
    viewport: { defaultViewport: "mobile1" },
  },
}

export default meta

type Story = StoryObj<typeof About>

export const Mobile: Story = {}

export const Desktop: Story = {
  parameters: {
    viewport: { defaultViewport: "reset" },
  },
}