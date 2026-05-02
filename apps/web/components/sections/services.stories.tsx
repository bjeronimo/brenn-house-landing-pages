import type { Meta, StoryObj } from "@storybook/nextjs"

import { Services } from "./services"

const meta: Meta<typeof Services> = {
  title: "Sections/Services",
  component: Services,
  parameters: {
    layout: "fullscreen",
    viewport: { defaultViewport: "mobile1" },
  },
}

export default meta

type Story = StoryObj<typeof Services>

export const Mobile: Story = {}

export const Desktop: Story = {
  parameters: {
    viewport: { defaultViewport: "reset" },
  },
}