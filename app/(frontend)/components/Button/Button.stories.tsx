import type { Decorator, Meta, StoryObj } from '@storybook/react'
import Button from '.'

const withCentering: Decorator = (Story) => (
  <div style={{ textAlign: 'center' }}>
    <Story />
  </div>
)

const withDarkBackground: Decorator = (Story) => (
  <div style={{ backgroundColor: '#999', padding: '16px' }}>
    <Story />
  </div>
)

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'], // Uncomment if you aren't using an MDX file for docs here
}

export default meta

type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    text: 'Default',
    link: '#',
  },
}

export const DefaultLight: Story = {
  args: {
    text: 'Default Light',
    link: '#',
    theme: 'light',
  },
}
DefaultLight.decorators = [withDarkBackground]

export const DefaultLightCenter: Story = {
  args: {
    text: 'Default Light Center',
    link: '#',
    theme: 'light',
    align: 'center',
  },
}
DefaultLightCenter.decorators = [withCentering, withDarkBackground]

export const DefaultSmall: Story = {
  args: {
    text: 'Default Small',
    link: '#',
    size: 'small',
  },
}

export const DefaultSmallCenter: Story = {
  args: {
    text: 'Default Small Center',
    link: '#',
    size: 'small',
    align: 'center',
  },
}
DefaultSmallCenter.decorators = [withCentering]

export const DefaultSmallLightCenter: Story = {
  args: {
    text: 'Default Small Light Center',
    link: '#',
    size: 'small',
    theme: 'light',
    align: 'center',
  },
}
DefaultSmallLightCenter.decorators = [withCentering, withDarkBackground]

export const DefaultCenter: Story = {
  args: {
    text: 'Default Center',
    link: '#',
    align: 'center',
  },
}

export const Outline: Story = {
  args: {
    text: 'Outline',
    link: '#',
    buttonStyle: 'outline',
    size: 'large',
    theme: 'dark',
    align: 'left',
  },
}

export const OutlineLight: Story = {
  args: {
    text: 'Outline Light',
    link: '#',
    buttonStyle: 'outline',
    size: 'large',
    theme: 'light',
    align: 'left',
  },
}
OutlineLight.decorators = [withDarkBackground]

export const OutlineLightCenter: Story = {
  args: {
    text: 'Outline Light Center',
    link: '#',
    buttonStyle: 'outline',
    size: 'large',
    theme: 'light',
    align: 'center',
  },
}
OutlineLightCenter.decorators = [withDarkBackground]

export const OutlineSmall: Story = {
  args: {
    text: 'Outline Small',
    link: '#',
    buttonStyle: 'outline',
    size: 'small',
    theme: 'dark',
    align: 'left',
  },
}

export const OutlineSmallLight: Story = {
  args: {
    text: 'Outline Small Light',
    link: '#',
    buttonStyle: 'outline',
    size: 'small',
    theme: 'light',
    align: 'left',
  },
}
OutlineSmallLight.decorators = [withDarkBackground]

export const OutlineSmallLightCenter: Story = {
  args: {
    text: 'Outline Small Light Center',
    link: '#',
    buttonStyle: 'outline',
    size: 'small',
    theme: 'light',
    align: 'center',
  },
}
OutlineSmallLightCenter.decorators = [withCentering, withDarkBackground]

export const OutlineSmallCenter: Story = {
  args: {
    text: 'Outline Small Center',
    link: '#',
    buttonStyle: 'outline',
    size: 'small',
    theme: 'dark',
    align: 'center',
  },
}

export const OutlineCenter: Story = {
  args: {
    text: 'Outline Center',
    link: '#',
    buttonStyle: 'outline',
    size: 'large',
    align: 'center',
  },
}
