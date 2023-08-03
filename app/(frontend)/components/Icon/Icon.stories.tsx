import type { Meta, StoryObj } from '@storybook/react'
import Icon from '.'

const meta: Meta<typeof Icon> = {
  title: 'Components/Icon',
  component: Icon,
}

export default meta

type Story = StoryObj<typeof Icon>;

export const Clipboard: Story = {
  args: {
    icon: 'clipboard',
  },
}

export const ComputerData: Story = {
  args: {
    icon: 'computerData',
  },
}

export const DataFolders: Story = {
  args: {
    icon: 'dataFolders',
  },
}

export const Heart: Story = {
  args: {
    icon: 'heart',
  },
}

export const Helix: Story = {
  args: {
    icon: 'helix',
  },
}

export const IncreasingBarChart: Story = {
  args: {
    icon: 'increasingBarChart',
  },
}

export const Laptop: Story = {
  args: {
    icon: 'laptop',
  },
}

export const Lightbulb: Story = {
  args: {
    icon: 'lightbulb',
  },
}

export const LineBarChart: Story = {
  args: {
    icon: 'lineBarChart',
  },
}

export const MagnifyingGlass: Story = {
  args: {
    icon: 'magnifyingGlass',
  },
}

export const Network: Story = {
  args: {
    icon: 'network',
  },
}

export const ShieldPlusSign: Story = {
  args: {
    icon: 'shieldPlusSign',
  },
}

export const SpeechBubbles: Story = {
  args: {
    icon: 'speechBubbles',
  },
}

export const TestTube: Story = {
  args: {
    icon: 'testTube',
  },
}

export const Timer: Story = {
  args: {
    icon: 'timer',
  },
}
