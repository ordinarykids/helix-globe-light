import type { Meta, StoryObj } from '@storybook/react'
import PageHero from '.'

const meta: Meta<typeof PageHero> = {
  title: 'Components/PageHero',
  component: PageHero,
  tags: ['autodocs'], // Uncomment if you aren't using an MDX file for docs here
  parameters: {
    layout: 'fullscreen',
  },
}

export default meta

type Story = StoryObj<typeof PageHero>;

const baseArgs = {
  eyebrow: 'Life Sciences',
  header: 'From Discovery to Commercialization',
  subheader: [
    {
      children: [
        {
          _key: 'c5080bab2071',
          _type: 'span',
          marks: [],
          text: 'Helping life sciences companies bring innovative, personalized therapies to patients faster through the application of real-world clinico-genomic data and our extensive health systems network.',
        },
      ],
      _type: 'block',
      markDefs: [],
      style: 'normal',
      _key: 'c5080bab2071',
    },
  ],
  image: {
    width: 902,
    aspectRatio: 1.1275,
    blurHash: 'eAD,u-.700^,wi00M4~X4nklyU4-00xuMf_M-;%Mt7t7IBxuaMWBoy',
    url: 'https://cdn.sanity.io/images/g5irbagy/staging/ef27f715b7698a036969ae5265b4451659d565f0-902x800.png',
    altText: null,
    title: null,
    height: 800,
  },
  buttonText: 'Contact Us',
  buttonLink: {
    link: 'test-2',
    externalUrl: 'null',
  },
}

export const Hero: Story = {
  args: baseArgs,
}

export const SimpleHeader: Story = {
  args: {
    ...baseArgs,
    simpleHeader: true,
  },
}
