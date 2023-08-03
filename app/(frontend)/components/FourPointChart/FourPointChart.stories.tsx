import type { Meta, StoryObj } from '@storybook/react'
import FourPointChart from '.'

const meta: Meta<typeof FourPointChart> = {
  title: 'Components/FourPointChart',
  component: FourPointChart,
  tags: ['autodocs'], // Uncomment if you aren't using an MDX file for docs here
  parameters: {
    layout: 'fullscreen',
  },
}

export default meta

type Story = StoryObj<typeof FourPointChart>;

export const FourPointChartStory: Story = {
  args: {
    header: 'What Makes Helix Different',
    points: [
      {
        _key: 'db39c7366b6a',
        title: 'Established Turnkey Process ',
        text: 'Customized to your organization',
      },
      {
        _key: 'db39c7366b6b',
        title: 'Industry Leading Experts',
        text: 'Integrated project team to drive performance',
      },
      {
        _key: 'db39c7366b6c',
        title: 'Innovation and Transformation',
        text: 'Sequence Once, Query Often model unlocks perpetual value',
      },
      {
        _key: 'db39c7366b6d',
        title: 'Clinically Focused Value Minded',
        text: 'Strategic partnership model designed with shared economics',
      },
    ],
  },
}
