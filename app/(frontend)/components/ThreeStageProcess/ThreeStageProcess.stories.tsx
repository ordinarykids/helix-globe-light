import type { Decorator, Meta, StoryObj } from '@storybook/react'
import ThreeStageProcess from '.'

const grayBg: Decorator = (Story) => (
  <div style={{ backgroundColor: '#f2f2f2' }}>
    <Story />
  </div>
)

const meta: Meta<typeof ThreeStageProcess> = {
  title: 'Components/ThreeStageProcess',
  component: ThreeStageProcess,
  parameters: {
    layout: 'fullscreen',
  },
}

export default meta

type Story = StoryObj<typeof ThreeStageProcess>;

const portableText = [
  {
    _key: '003c9a8178d7',
    markDefs: [
      { _type: 'link', href: 'https://helix.com', _key: '77a562f8e62c' },
    ],
    children: [
      {
        marks: [],
        text: 'Use ',
        _key: 'cd8acc6687900',
        _type: 'span',
      },
      {
        text: 'genomics',
        _key: 'cb5348846953',
        _type: 'span',
        marks: ['strong'],
      },
      {
        marks: [],
        text: ' to ',
        _key: '82407347d29f',
        _type: 'span',
      },
      {
        _type: 'span',
        marks: ['em'],
        text: 'identify',
        _key: 'e9ee9b06146c',
      },
      {
        marks: [],
        text: ' better ',
        _key: '18fb0f3fcbaa',
        _type: 'span',
      },
      {
        text: 'patient',
        _key: '987f182a1ff7',
        _type: 'span',
        marks: ['underline'],
      },
      {
        text: ' populations to ',
        _key: '7178b4ebe74f',
        _type: 'span',
        marks: [],
      },
      {
        marks: ['77a562f8e62c'],
        text: 'accelerate',
        _key: '1989fc71994f',
        _type: 'span',
      },
      {
        _type: 'span',
        marks: [],
        text: ' enrollment and reduce trial length. Develop better patients analytics to prepare for both market access and product launch plans.',
        _key: '7d58c266b448',
      },
    ],
    _type: 'block',
    style: 'normal',
  },
]

export const Docs: Story = {
  args: {
    header: 'Accelerate Your Efforts Across the Drug Development Process',
    stages: [
      {
        _type: 'stage',
        description: portableText,
        _key: '767603757de6',
        title: 'Discovery & Preclinical',
        active: true,
        icon: 'magnifyingGlass',
      },
      {
        _type: 'stage',
        description: portableText,
        _key: '767603757de7',
        title: 'Clinical Development',
        subtitle: 'Phase I - Phase II - Phase III',
        active: false,
        icon: 'shieldPlusSign',
      },
      {
        _type: 'stage',
        description: portableText,
        _key: '767603757de8',
        title: 'Commercialization',
        subtitle: 'Phase IV',
        active: false,
        icon: 'increasingBarChart',
      },
    ],
  },
}
Docs.decorators = [grayBg]
