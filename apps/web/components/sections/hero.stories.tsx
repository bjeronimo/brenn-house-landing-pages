import type { Meta, StoryObj } from "@storybook/nextjs"

import { Hero } from "./hero"

const meta: Meta<typeof Hero> = {
  title: "Sections/Hero",
  component: Hero,
  parameters: {
    layout: "fullscreen",
    viewport: { defaultViewport: "mobile1" },
  },
}

export default meta

type Story = StoryObj<typeof Hero>

export const Default: Story = {}
