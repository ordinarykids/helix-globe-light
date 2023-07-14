import type { Meta, StoryObj } from '@storybook/react'
import InteractiveSphere3 from '.'

const meta: Meta<typeof InteractiveSphere3> = {
  title: 'Components/InteractiveSphere3',
  component: InteractiveSphere3,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    backgrounds: { disable: true },
  },
}

export default meta

type Story = StoryObj<typeof InteractiveSphere3>;

export const Default: Story = {
  args: {
    text: 'Hello World!',
  },
}
