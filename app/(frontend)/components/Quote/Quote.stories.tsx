import type { Decorator, Meta, StoryObj } from '@storybook/react'
import Quote from '.'

const darkBg: Decorator = (Story) => (
  <div style={{ backgroundColor: '#373837' }}>
    <Story />
  </div>
)

const meta: Meta<typeof Quote> = {
  title: 'Components/Quote',
  component: Quote,
  parameters: {
    layout: 'fullscreen',
  },
}

export default meta

type Story = StoryObj<typeof Quote>;

const baseArgs = {
  quote: [
    {
      markDefs: [],
      children: [
        {
          text: 'The ',
          _key: 'e7be6e880a5d0',
          _type: 'span',
          marks: [],
        },
        {
          text: 'analysis',
          _key: 'd29ac0993dec',
          _type: 'span',
          marks: ['strong'],
        },
        {
          _key: '7db59807ef4e',
          _type: 'span',
          marks: [],
          text: ' of these ',
        },
        {
          marks: ['em'],
          text: 'large',
          _key: '12c5fb08ffaf',
          _type: 'span',
        },
        {
          _key: 'f6646a8f75fc',
          _type: 'span',
          marks: [],
          text: ' datasets in collaboration with Renown could help identify genetic variants that impact the risk of developing NASH and thereby advance the discovery and development of new treatments for this disease.',
        },
      ],
      _type: 'block',
      style: 'normal',
      _key: '4040e4faf920',
    },
  ],
  attribution: 'John McHutchison, AO, MD',
  title: 'Chief Scientific Officer and Head of Research and Development, Gilead Sciences',
}

export const QuoteGlobeBg: Story = {
  args: {
    ...baseArgs,
    bgImage: 'globe',
  },
}
QuoteGlobeBg.decorators = [darkBg]

export const QuoteNoBg: Story = {
  args: {
    ...baseArgs,
    bgImage: 'none',
  },
}
QuoteNoBg.decorators = [darkBg]
