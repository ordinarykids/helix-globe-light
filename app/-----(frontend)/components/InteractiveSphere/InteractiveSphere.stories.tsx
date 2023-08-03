import type { Meta, StoryObj } from '@storybook/react'
import InteractiveSphere from '.'

const meta: Meta<typeof InteractiveSphere> = {
  title: 'Components/InteractiveSphere',
  component: InteractiveSphere,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    backgrounds: { disable: true },
  },
}

export default meta

type Story = StoryObj<typeof InteractiveSphere>;

export const Default: Story = {
  args: {
    text: 'Hello World!',
  },
}
