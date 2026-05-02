import type { Meta, StoryObj } from "@storybook/nextjs"

import { Testimonials } from "./testimonials"

const meta: Meta<typeof Testimonials> = {
  title: "Sections/Testimonials",
  component: Testimonials,
  parameters: {
    layout: "fullscreen",
    viewport: { defaultViewport: "mobile1" },
  },
}

export default meta

type Story = StoryObj<typeof Testimonials>

export const Mobile: Story = {}

export const Desktop: Story = {
  parameters: {
    viewport: { defaultViewport: "reset" },
  },
}
