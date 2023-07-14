import type { Meta, StoryObj } from '@storybook/react'
import InteractiveSphere2 from '.'

const meta: Meta<typeof InteractiveSphere2> = {
  title: 'Components/InteractiveSphere2',
  component: InteractiveSphere2,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    backgrounds: { disable: true },
  },
}

export default meta

type Story = StoryObj<typeof InteractiveSphere2>;

export const Default: Story = {
  args: {
    text: 'Hello World!',
  },
}
