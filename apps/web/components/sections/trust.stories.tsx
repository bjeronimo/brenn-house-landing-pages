import type { Meta, StoryObj } from "@storybook/nextjs"

import { Trust } from "./trust"

const meta: Meta<typeof Trust> = {
  title: "Sections/Trust",
  component: Trust,
  parameters: {
    layout: "fullscreen",
    viewport: { defaultViewport: "mobile1" },
  },
}

export default meta

type Story = StoryObj<typeof Trust>

export const Mobile: Story = {}

export const Desktop: Story = {
  parameters: {
    viewport: { defaultViewport: "reset" },
  },
}