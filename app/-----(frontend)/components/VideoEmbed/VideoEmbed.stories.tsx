import type { Meta, StoryObj } from '@storybook/react'
import VideoEmbed from '.'

const meta: Meta<typeof VideoEmbed> = {
  title: 'Components/VideoEmbed',
  component: VideoEmbed,
}

export default meta

type Story = StoryObj<typeof VideoEmbed>;

export const Wistia: Story = {
  args: {
    url: 'https://helix.wistia.com/medias/ovfy3sn6fa',
  },
}
