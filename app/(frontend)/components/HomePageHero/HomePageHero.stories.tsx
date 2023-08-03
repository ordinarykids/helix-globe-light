import type { Meta, StoryObj } from '@storybook/react'
import HomePageHero from '.'

const meta: Meta<typeof HomePageHero> = {
  title: 'Components/HomePageHero',
  component: HomePageHero,
  tags: ['autodocs'], // Uncomment if you aren't using an MDX file for docs here
}

export default meta

type Story = StoryObj<typeof HomePageHero>;

export const HomePage: Story = {
  args: {
    header: 'Weaving Genomics into the Fabric of Healthcare',
    subheader: [
      {
        children: [
          {
            _key: 'c5080bab2071',
            _type: 'span',
            marks: [],
            text: 'Helix transforms health organizations to leverage the power of genomics across their enterprise; creating strategic value and fueling future growth.',
          },
        ],
        _type: 'block',
        markDefs: [],
        style: 'normal',
        _key: 'c5080bab2071',
      },
    ],
    buttonText: 'Contact Us',
    buttonLink: {
      link: 'https://helix.com',
      externalUrl: 'https://helix.com',
    },
  },
}
