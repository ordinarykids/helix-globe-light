import type { Meta, StoryObj } from '@storybook/react'

import LayoutGrid from './LayoutGrid'

const meta: Meta<typeof LayoutGrid> = {
  title: 'Global Styles/Grid System',
  component: LayoutGrid,
  // tags: ['autodocs'],
  // argTypes: {
  //   backgroundColor: {
  //     control: 'color',
  //   },
  // },
  parameters: {
    layout: 'fullscreen',
    controls: {
      exclude: /.*/g,
    },
    docs: {
      source: {
        code: null,
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof LayoutGrid>;

// More on writing stories with args: https://storybook.js.org/docs/7.0/react/writing-stories/args
export const Grid: Story = {}

export const Columns: Story = {
  args: {
    showColumnMixins: true,
  },
}
