import type { Decorator, Meta, StoryObj } from '@storybook/react'
import PageSectionImage from '.'

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

const meta: Meta<typeof PageSectionImage> = {
  title: 'Components/PageSectionImage',
  component: PageSectionImage,
  parameters: {
    layout: 'fullscreen',
  },
}

export default meta

type Story = StoryObj<typeof PageSectionImage>;

const args = {
  image: {
    aspectRatio: 1.5741869918699187,
    blurHash: 'VGI#=h_4%K%MD%%gIoR+D%%ND#-;-;Mxj^IUxuocxuRj',
    url: 'https://cdn.sanity.io/images/g5irbagy/staging/8acfb0978b3dcdddc2f940a3cb1510929f797a68-1549x984.png',
    altText: 'Map of the United States showing partners in TX, NV, MN, PA, and SC',
    title: null,
    height: 984,
    width: 1549,
  },
}

export const GrayBg: Story = {
  args,
}

export const WhiteBg: Story = {
  args,
}
WhiteBg.decorators = [whiteBg]

export const DarkBlueBg: Story = {
  args,
}
DarkBlueBg.decorators = [darkBlueBg]
