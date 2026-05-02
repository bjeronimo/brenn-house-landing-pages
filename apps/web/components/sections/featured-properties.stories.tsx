import type { Meta, StoryObj } from "@storybook/nextjs"

import { FeaturedProperties } from "./featured-properties"

const meta: Meta<typeof FeaturedProperties> = {
  title: "Sections/FeaturedProperties",
  component: FeaturedProperties,
  parameters: {
    layout: "fullscreen",
    viewport: { defaultViewport: "mobile1" },
  },
}

export default meta

type Story = StoryObj<typeof FeaturedProperties>

export const Mobile: Story = {}

export const Desktop: Story = {
  parameters: {
    viewport: { defaultViewport: "reset" },
  },
}
