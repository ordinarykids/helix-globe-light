import type { Decorator, Meta, StoryObj } from '@storybook/react'
import WideCards from '.'
import { WideCardsProps } from './WideCards'

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

const meta: Meta<typeof WideCards> = {
  title: 'Components/WideCards',
  component: WideCards,
  tags: ['autodocs'], // Uncomment if you aren't using an MDX file for docs here
  parameters: {
    layout: 'fullscreen',
  },
}

export default meta

type Story = StoryObj<typeof WideCards>;

const sharedArgs: WideCardsProps = {
  cards: [
    {
      header: 'Enrollment',
      _key: 'db39c7366b6a',
      icon: 'speechBubbles',
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
              text: 'By ',
              _key: '826bf832888c',
            },
            {
              text: 'digitizing',
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
              text: 'front-end',
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
              text: 'enrollment',
              _key: '47dd5baf96af',
            },
            {
              marks: [],
              text: ' into a ',
              _key: 'ef43a395e53d',
              _type: 'span',
            },
            {
              _key: '0f3c4561f5bd',
              _type: 'span',
              marks: ['a3811e71ffb7'],
              text: 'consumer-friendly',
            },
            {
              marks: [],
              text: ', self-service approach, we expand patient access and involvement.',
              _key: '49b0c9671f79',
              _type: 'span',
            },
          ],
          _type: 'block',
        },
      ],
    },
    {
      header: 'Consent',
      _key: 'db39c7366b6b',
      icon: 'clipboard',
      iconColor: '#F8BE08',
      text: [
        {
          _key: 'd63223ca478d',
          markDefs: [],
          children: [
            {
              _type: 'span',
              marks: [],
              text: 'All participants are electronically consented, and own their data. Helix creates a process to make that data portable.',
              _key: '4a6c56a5d8300',
            },
          ],
          _type: 'block',
          style: 'normal',
        },
        {
          style: 'normal',
          _key: 'c93ee6274092',
          markDefs: [],
          children: [
            {
              _type: 'span',
              marks: [],
              text: 'We send discrete results on actionable genetic conditions back to the EHR to ensure providers have the right information at the right time to make decisions in the care of their patients.',
              _key: '1a4bff3650e50',
            },
          ],
          _type: 'block',
        },
      ],
    },
    {
      header: 'Collection',
      _key: 'db39c7366b6c',
      icon: 'testTube',
      iconColor: '#F8BE08',
      text: [
        {
          style: 'normal',
          _key: '50c3a2b9c902',
          markDefs: [],
          children: [
            {
              _type: 'span',
              marks: [],
              text: 'To streamline collection, we meet participants where they are - collecting at home or in the clinic.',
              _key: '35f9f9f746e30',
            },
          ],
          _type: 'block',
        },
      ],
    },
    {
      header: 'Sequencing',
      _key: 'db39c7366b6d',
      icon: 'helix',
      iconColor: '#F8BE08',
      text: [
        {
          style: 'normal',
          _key: '50c3a2b9c902',
          markDefs: [],
          children: [
            {
              _type: 'span',
              marks: [],
              text: 'That sample is sent to our CLIA/CAP next-generation sequencing lab, to be sequenced with our proprietary Exome+ assay.',
              _key: '35f9f9f746e31',
            },
          ],
          _type: 'block',
        },
      ],
    },
    {
      header: 'Actionable Results',
      _key: 'db39c7366b6e',
      icon: 'computerData',
      iconColor: '#F8BE08',
      text: [
        {
          style: 'normal',
          _key: '50c3a2b9c902',
          markDefs: [],
          children: [
            {
              _type: 'span',
              marks: [],
              text: 'We send discrete results on actionable genetic conditions back to the EHR to ensure providers have the right information at the right time to make decisions in the care of their patients.',
              _key: '35f9f9f746e32',
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
  },
}
DarkBlueBg.decorators = [darkBlueBg]
