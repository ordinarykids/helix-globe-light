import type { Meta, StoryObj } from '@storybook/react'
import IconCard from '.'

const meta: Meta<typeof IconCard> = {
  title: 'Components/IconCard',
  component: IconCard,
}

export default meta

type Story = StoryObj<typeof IconCard>;

export const Example: Story = {
  args: {
    icon: 'helix',
    header: 'Versatile Exome+® Assay',
    subheader: 'Go beyond GWAS',
    text: [
      {
        style: 'normal',
        _key: '3f8856cfedbd',
        _type: 'block',
        children: [
          {
            _key: 'ac6de81f91930',
            _type: 'span',
            marks: [],
            text: 'Panel-grade ',
          },
          {
            _key: '97f8756fe01b',
            _type: 'span',
            marks: ['strong'],
            text: 'clinical',
          },
          {
            _type: 'span',
            marks: [],
            text: ' exome ',
            _key: '54a69fed1541',
          },
          {
            _type: 'span',
            marks: ['em'],
            text: 'provides',
            _key: '832612aaac1e',
          },
          {
            marks: [],
            text: ' the ',
            _key: 'b6e4470719de',
            _type: 'span',
          },
          {
            _type: 'span',
            marks: ['underline'],
            text: 'performance',
            _key: '76af070e7f1e',
          },
          {
            text: ' of a ',
            _key: '2a5bf5a7a080',
            _type: 'span',
            marks: [],
          },
          {
            _type: 'span',
            marks: ['9d868ca31098'],
            text: 'targeted',
            _key: '1de6d87584cc',
          },
          {
            _type: 'span',
            marks: [],
            text: ' panel, the breadth of a microarray, and the completeness of an exome — all in one assay',
            _key: '24f1578ee1a8',
          },
        ],
        markDefs: [
          {
            href: 'https://helix.com',
            _key: '9d868ca31098',
            _type: 'link',
          },
        ],
      },
    ],
  },
}
