import type { Meta, StoryObj } from "@storybook/nextjs"

import { Blog } from "./blog"

const meta: Meta<typeof Blog> = {
  title: "Sections/Blog",
  component: Blog,
  parameters: {
    layout: "fullscreen",
    viewport: { defaultViewport: "mobile1" },
  },
}

export default meta

type Story = StoryObj<typeof Blog>

export const Mobile: Story = {}

export const Desktop: Story = {
  parameters: {
    viewport: { defaultViewport: "reset" },
  },
}
