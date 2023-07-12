import type { Decorator, Meta, StoryObj } from '@storybook/react'
import PageSectionBgColorType from 'app/(frontend)/types/pageSectionBgColor'
import TwoUp from '.'
import { TwoUpProps } from './TwoUp'

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

const meta: Meta<typeof TwoUp> = {
  title: 'Components/TwoUp',
  component: TwoUp,
  parameters: {
    layout: 'fullscreen',
  },
}

export default meta

type Story = StoryObj<typeof TwoUp>;

const getArgs = (sectionBgColor: PageSectionBgColorType = 'gray'): TwoUpProps => (
  {
    image: {
      width: 501,
      aspectRatio: 1.2525,
      blurHash: 'VHNR]}od08~59y0RE69y$}-R08I?R,j@$#^exX=[WWxX',
      url: 'https://cdn.sanity.io/images/g5irbagy/staging/e4b7ab86838e65cb8cbf23bb5c469d2bfb3787de-501x400.svg',
      altText: 'Yellow triangles',
      title: null,
      height: 400,
    },
    title: 'Stratify Healthcare Risks',
    text: [
      {
        markDefs: [],
        children: [
          {
            _key: '0e96ad1c99580',
            _type: 'span',
            marks: [],
            text: 'Being able to properly stratify the major healthcare risks that threaten communities and individuals is critical in the pursuit of providing more targeted and efficient care. But providers only see a fraction of a patients’ genetic risk with current care models, and are severely limited in the scale at which they can do it.',
          },
        ],
        _type: 'block',
        style: 'normal',
        _key: '1dfac12335f4',
      },
      {
        style: 'normal',
        _key: '748e916c0926',
        markDefs: [],
        children: [
          {
            _type: 'span',
            marks: [],
            text: '',
            _key: '44c6291076a6',
          },
        ],
        _type: 'block',
      },
      {
        link: 'https://helix.com',
        text: 'Styled link',
        _key: 'c36b34470341',
        align: 'left',
        _type: 'styledLink',
      },
    ],
    imageAlignment: 'left',
    sectionBgColor,
  }
)

export const GrayBg: Story = {
  args: getArgs(),
}

export const WhiteBg: Story = {
  args: getArgs('white'),
}
WhiteBg.decorators = [whiteBg]

export const DarkBlueBg: Story = {
  args: getArgs('darkBlue'),
}
DarkBlueBg.decorators = [darkBlueBg]
