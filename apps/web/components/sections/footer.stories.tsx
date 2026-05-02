import type { Meta, StoryObj } from "@storybook/nextjs"

import { Footer } from "./footer"

const meta: Meta<typeof Footer> = {
  title: "Sections/Footer",
  component: Footer,
  parameters: {
    layout: "fullscreen",
    viewport: { defaultViewport: "mobile1" },
  },
}

export default meta

type Story = StoryObj<typeof Footer>

export const Mobile: Story = {}

export const Desktop: Story = {
  parameters: {
    viewport: { defaultViewport: "reset" },
  },
}
