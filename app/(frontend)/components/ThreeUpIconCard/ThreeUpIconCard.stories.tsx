import type { Decorator, Meta, StoryObj } from '@storybook/react'
import ThreeUpIconCard from '.'
import { ThreeUpIconCardProps } from './ThreeUpIconCard'

const grayBg: Decorator = (Story) => (
  <div style={{ backgroundColor: '#f2f2f2' }}>
    <Story />
  </div>
)

const whiteBg: Decorator = (Story) => (
  <div style={{ backgroundColor: '#fff' }}>
    <Story />
  </div>
)

const darkBlueBg: Decorator = (Story) => (
  <div style={{ backgroundColor: '#262E47' }}>
    <Story />
  </div>
)

const meta: Meta<typeof ThreeUpIconCard> = {
  title: 'Components/ThreeUpIconCard',
  component: ThreeUpIconCard,
  tags: ['autodocs'], // Uncomment if you aren't using an MDX file for docs here
  parameters: {
    layout: 'fullscreen',
  },
}

export default meta

type Story = StoryObj<typeof ThreeUpIconCard>;

const sharedArgs: ThreeUpIconCardProps = {
  cards: [
    {
      header: 'Clinical Impact',
      _key: 'db39c7366b6a',
      icon: 'heart',
      iconColor: '#F8BE08',
      text: [
        {
          style: 'normal',
          _key: '50c3a2b9c902',
          markDefs: [
            {
              _type: 'link',
              href: 'https://helix.com',
              _key: 'a3811e71ffb7',
            },
          ],
          children: [
            {
              _type: 'span',
              marks: [],
              text: 'Drive ',
              _key: '826bf832888c',
            },
            {
              text: 'higher',
              _key: '833d23346fc3',
              _type: 'span',
              marks: ['strong'],
            },
            {
              _type: 'span',
              marks: [],
              text: ' ',
              _key: '2a37df73a869',
            },
            {
              _type: 'span',
              marks: ['em'],
              text: 'quality',
              _key: 'a2d58f741190',
            },
            {
              text: ' ',
              _key: 'e05b287b88d8',
              _type: 'span',
              marks: [],
            },
            {
              _type: 'span',
              marks: ['underline'],
              text: 'care',
              _key: '47dd5baf96af',
            },
            {
              marks: [],
              text: ' at ',
              _key: 'ef43a395e53d',
              _type: 'span',
            },
            {
              _key: '0f3c4561f5bd',
              _type: 'span',
              marks: ['a3811e71ffb7'],
              text: 'lower',
            },
            {
              marks: [],
              text: ' cost by identifying at-risk patients by delivering more preventative, precision care.',
              _key: '49b0c9671f79',
              _type: 'span',
            },
          ],
          _type: 'block',
        },
      ],
    },
    {
      header: 'Market Strategy',
      _key: 'db39c7366b6b',
      icon: 'lineBarChart',
      iconColor: '#F8BE08',
      text: [
        {
          style: 'normal',
          _key: '50c3a2b9c902',
          markDefs: [
            {
              _type: 'link',
              href: 'https://helix.com',
              _key: 'a3811e71ffb7',
            },
          ],
          children: [
            {
              _type: 'span',
              marks: [],
              text: 'Drive ',
              _key: '826bf832888c',
            },
            {
              text: 'higher',
              _key: '833d23346fc3',
              _type: 'span',
              marks: ['strong'],
            },
            {
              _type: 'span',
              marks: [],
              text: ' ',
              _key: '2a37df73a869',
            },
            {
              _type: 'span',
              marks: ['em'],
              text: 'quality',
              _key: 'a2d58f741190',
            },
            {
              text: ' ',
              _key: 'e05b287b88d8',
              _type: 'span',
              marks: [],
            },
            {
              _type: 'span',
              marks: ['underline'],
              text: 'care',
              _key: '47dd5baf96af',
            },
            {
              marks: [],
              text: ' at ',
              _key: 'ef43a395e53d',
              _type: 'span',
            },
            {
              _key: '0f3c4561f5bd',
              _type: 'span',
              marks: ['a3811e71ffb7'],
              text: 'lower',
            },
            {
              marks: [],
              text: ' cost by identifying at-risk patients by delivering more preventative, precision care.',
              _key: '49b0c9671f79',
              _type: 'span',
            },
          ],
          _type: 'block',
        },
      ],
    },
    {
      header: 'Research Enablement ',
      _key: 'db39c7366b6c',
      icon: 'lightbulb',
      iconColor: '#F8BE08',
      text: [
        {
          style: 'normal',
          _key: '50c3a2b9c902',
          markDefs: [
            {
              _type: 'link',
              href: 'https://helix.com',
              _key: 'a3811e71ffb7',
            },
          ],
          children: [
            {
              _type: 'span',
              marks: [],
              text: 'Drive ',
              _key: '826bf832888c',
            },
            {
              text: 'higher',
              _key: '833d23346fc3',
              _type: 'span',
              marks: ['strong'],
            },
            {
              _type: 'span',
              marks: [],
              text: ' ',
              _key: '2a37df73a869',
            },
            {
              _type: 'span',
              marks: ['em'],
              text: 'quality',
              _key: 'a2d58f741190',
            },
            {
              text: ' ',
              _key: 'e05b287b88d8',
              _type: 'span',
              marks: [],
            },
            {
              _type: 'span',
              marks: ['underline'],
              text: 'care',
              _key: '47dd5baf96af',
            },
            {
              marks: [],
              text: ' at ',
              _key: 'ef43a395e53d',
              _type: 'span',
            },
            {
              _key: '0f3c4561f5bd',
              _type: 'span',
              marks: ['a3811e71ffb7'],
              text: 'lower',
            },
            {
              marks: [],
              text: ' cost by identifying at-risk patients by delivering more preventative, precision care.',
              _key: '49b0c9671f79',
              _type: 'span',
            },
          ],
          _type: 'block',
        },
      ],
    },
  ],
}

export const WhiteBg: Story = {
  args: {
    ...sharedArgs,
    sectionBgColor: 'white',
  },
}
WhiteBg.decorators = [whiteBg]

export const GrayBg: Story = {
  args: {
    ...sharedArgs,
  },
}
GrayBg.decorators = [grayBg]

export const DarkBlueBg: Story = {
  args: {
    ...sharedArgs,
    sectionBgColor: 'darkBlue',
  },
}
DarkBlueBg.decorators = [darkBlueBg]
