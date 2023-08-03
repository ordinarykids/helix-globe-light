import type { Meta, StoryObj } from '@storybook/react'
import HubspotForm from '.'

const meta: Meta<typeof HubspotForm> = {
  title: 'Components/HubspotForm',
  component: HubspotForm,
  tags: ['autodocs'], // Uncomment if you aren't using an MDX file for docs here
  parameters: {
    layout: 'fullscreen',
  },
}

export default meta

type Story = StoryObj<typeof HubspotForm>;

export const HubspotFormStory: Story = {
  args: {
    header: 'What Makes Helix Different',
    text: [
      {
        _key: '7fb9782f2e2d',
        markDefs: [
          {
            _key: '57514589bbd1',
            _type: 'link',
            href: 'https://helix.com',
          },
        ],
        children: [
          {
            _type: 'span',
            marks: ['strong'],
            text: 'Sign',
            _key: 'dfbf8a016d600',
          },
          {
            _type: 'span',
            marks: [],
            text: ' ',
            _key: '5e02c94f7858',
          },
          {
            _type: 'span',
            marks: ['em'],
            text: 'up',
            _key: '81668e33ad56',
          },
          {
            _type: 'span',
            marks: [],
            text: ' ',
            _key: 'a95aabeffcd5',
          },
          {
            _type: 'span',
            marks: ['underline'],
            text: 'today',
            _key: 'a1b402ad9516',
          },
          {
            _type: 'span',
            marks: [],
            text: ' to ',
            _key: 'd9f7176e72a1',
          },
          {
            marks: ['57514589bbd1'],
            text: 'receive',
            _key: 'da620a592f75',
            _type: 'span',
          },
          {
            _key: 'ee1c4979773b',
            _type: 'span',
            marks: [],
            text: ' updates about Helix, including blogs, events, news, press releases, and more.',
          },
        ],
        _type: 'block',
        style: 'normal',
      },
    ],
    hubspotFormId: '51310905-3edc-46df-9fe8-9301b64ee10a', // Test form ID with many types of fields
  },
}
