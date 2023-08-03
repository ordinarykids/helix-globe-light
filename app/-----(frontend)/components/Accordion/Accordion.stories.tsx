import type { Decorator, Meta, StoryObj } from '@storybook/react'
import Accordion from '.'

const darkBg: Decorator = (Story) => (
  <div style={{ backgroundColor: '#262e47' }}>
    <Story />
  </div>
)

const meta: Meta<typeof Accordion> = {
  title: 'Components/Accordion',
  component: Accordion,
  parameters: {
    layout: 'fullscreen',
  },
}

export default meta

type Story = StoryObj<typeof Accordion>;

const portableText = [
  {
    _key: '003c9a8178d7',
    markDefs: [
      { _type: 'link', href: 'https://helix.com', _key: '0720f3309692' },
    ],
    children: [
      {
        marks: [],
        text: 'Exome+® ',
        _key: 'cd8acc6687900',
        _type: 'span',
      },
      {
        text: 'sequencing',
        _key: 'cb5348846953',
        _type: 'span',
        marks: ['strong'],
      },
      {
        marks: [],
        text: ' ',
        _key: '82407347d29f',
        _type: 'span',
      },
      {
        _type: 'span',
        marks: ['em'],
        text: 'data',
        _key: 'e9ee9b06146c',
      },
      {
        marks: [],
        text: ' ',
        _key: '18fb0f3fcbaa',
        _type: 'span',
      },
      {
        text: 'plus',
        _key: '987f182a1ff7',
        _type: 'span',
        marks: ['underline'],
      },
      {
        text: ' ',
        _key: '7178b4ebe74f',
        _type: 'span',
        marks: [],
      },
      {
        marks: ['strike-through'],
        text: 'longitudinal',
        _key: 'd183e0b485a9',
        _type: 'span',
      },
      {
        _type: 'span',
        marks: [],
        text: ' EHRs on ',
        _key: '7d58c266b448',
      },
      {
        _type: 'span',
        marks: ['0720f3309692'],
        text: 'recontactable',
        _key: 'cc98858b2d8d',
      },
      {
        marks: [],
        text: ' individuals enables:',
        _key: '15de199fd203',
        _type: 'span',
      },
    ],
    _type: 'block',
    style: 'normal',
  },
  {
    style: 'normal',
    _key: 'f759d9f36eda',
    listItem: 'bullet',
    markDefs: [],
    children: [
      {
        _key: '5a1b6d6d68c2',
        _type: 'span',
        marks: [],
        text: 'Identification of promising targets and biomarkers for drug candidates',
      },
    ],
    level: 1,
    _type: 'block',
  },
  {
    level: 1,
    _type: 'block',
    style: 'normal',
    _key: '7d071fdad0b3',
    listItem: 'bullet',
    markDefs: [],
    children: [
      {
        _type: 'span',
        marks: [],
        text: 'Validation of candidates of interest in custom cohorts and independent dataset(s)',
        _key: '0cd9e7f8da01',
      },
    ],
  },
]

export const Accordion4Items: Story = {
  args: {
    header: 'What We Do',
    items: [
      {
        _type: 'item',
        text: portableText,
        _key: '767603757de6',
        title: 'Target Identification & Validation',
      },
      {
        _type: 'item',
        text: portableText,
        _key: '767603757de7',
        title: 'Clinical Trial Solutions',
      },
      {
        _type: 'item',
        text: portableText,
        _key: '767603757de8',
        title: 'Real-World Evidence and Insights',
      },
      {
        _type: 'item',
        text: portableText,
        _key: '767603757de8',
        title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      },
    ],
  },
}
Accordion4Items.decorators = [darkBg]

export const Accordion3Items: Story = {
  args: {
    header: 'What We Do',
    items: [
      {
        _type: 'item',
        text: portableText,
        _key: '767603757de6',
        title: 'Target Identification & Validation',
      },
      {
        _type: 'item',
        text: portableText,
        _key: '767603757de7',
        title: 'Clinical Trial Solutions',
      },
      {
        _type: 'item',
        text: portableText,
        _key: '767603757de8',
        title: 'Real-World Evidence and Insights',
      },
    ],
  },
}
Accordion3Items.decorators = [darkBg]

export const Accordion2Items: Story = {
  args: {
    header: 'What We Do',
    items: [
      {
        _type: 'item',
        text: portableText,
        _key: '767603757de6',
        title: 'Target Identification & Validation',
      },
      {
        _type: 'item',
        text: portableText,
        _key: '767603757de7',
        title: 'Clinical Trial Solutions',
      },
    ],
  },
}
Accordion2Items.decorators = [darkBg]

export const Accordion1Item: Story = {
  args: {
    header: 'What We Do',
    items: [
      {
        _type: 'item',
        text: portableText,
        _key: '767603757de6',
        title: 'Target Identification & Validation',
      },
    ],
  },
}
Accordion1Item.decorators = [darkBg]
