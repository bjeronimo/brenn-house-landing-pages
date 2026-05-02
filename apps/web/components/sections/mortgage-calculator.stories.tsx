import type { Meta, StoryObj } from "@storybook/nextjs"

import { MortgageCalculator } from "./mortgage-calculator"

const meta: Meta<typeof MortgageCalculator> = {
  title: "Sections/MortgageCalculator",
  component: MortgageCalculator,
  parameters: {
    layout: "fullscreen",
    viewport: { defaultViewport: "mobile1" },
  },
}

export default meta

type Story = StoryObj<typeof MortgageCalculator>

export const Mobile: Story = {}

export const Desktop: Story = {
  parameters: {
    viewport: { defaultViewport: "reset" },
  },
}
