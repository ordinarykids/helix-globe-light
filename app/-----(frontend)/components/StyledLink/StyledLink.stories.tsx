import type { Decorator, Meta, StoryObj } from '@storybook/react'
import StyledLink from '.'

const centered: Decorator = (Story) => (
  <div style={{ textAlign: 'center' }}>
    <Story />
  </div>
)

const darkBg: Decorator = (Story) => (
  <div style={{ backgroundColor: '#262E47', padding: '20px' }}>
    <Story />
  </div>
)

const meta: Meta<typeof StyledLink> = {
  title: 'Components/StyledLink',
  component: StyledLink,
  tags: ['autodocs'], // Uncomment if you aren't using an MDX file for docs here
}

export default meta

type Story = StoryObj<typeof StyledLink>;

export const Default: Story = {
  args: {
    text: 'Contact Us',
    link: 'https://aleph.dev/fun',
  },
}

export const Centered: Story = {
  args: {
    text: 'Learn More',
    link: 'https://aleph.dev/fun',
    align: 'center',
  },
}
Centered.decorators = [centered]

export const Light: Story = {
  args: {
    text: 'Learn More',
    link: 'https://aleph.dev/fun',
    align: 'left',
    theme: 'light',
  },
}
Light.decorators = [darkBg]

export const LightCentered: Story = {
  args: {
    text: 'Learn More',
    link: 'https://aleph.dev/fun',
    align: 'center',
    theme: 'light',
  },
}
LightCentered.decorators = [darkBg, centered]
