import type { Meta, StoryObj } from '@storybook/react'
import GeometricCTAs from '.'
import type { GeometricCTAsShapes } from './GeometricCTAs'

const meta: Meta<typeof GeometricCTAs> = {
  title: 'Components/GeometricCTAs',
  component: GeometricCTAs,
}

export default meta

type Story = StoryObj<typeof GeometricCTAs>;

const getCTAArgs = (shape: GeometricCTAsShapes, key: string) => (
  {
    _key: key,
    title: 'Health Systems',
    content: [
      {
        _key: '6bcf5e7a8cdb',
        _type: 'block',
        children: [
          {
            _key: '10642ec707e70',
            _type: 'span',
            marks: [],
            text: 'We partner with leading ',
          },
          {
            _key: 'e93ec9f9763a',
            _type: 'span',
            marks: [
              '44cca6263966',
            ],
            text: 'health systems',
          },
          {
            _key: '9d93b5db566b',
            _type: 'span',
            marks: [],
            text: ' to unlock the power of genomics for improved patient outcomes. By making genomics accessible and actionable, we empower health systems to deliver personalized and effective healthcare at scale, improving patient outcomes and reducing costs. Our solutions also provide health systems with the latest tools and technologies to stay at the forefront of innovation in healthcare.',
          },
        ],
        markDefs: [
          {
            _key: '44cca6263966',
            _type: 'link',
            href: 'https://helix.com',
          },
        ],
        style: 'normal',
      },
    ],
    linkText: 'Learn More',
    linkUrl: {
      link: '/test',
    },
    shape,
  }
)

export const All: Story = {
  args: {
    title: 'Healthcare Organizations We Serve',
    ctas: [
      getCTAArgs('triangle', '1'),
      getCTAArgs('hexagon', '2'),
      getCTAArgs('circle', '3'),
    ],
  },
}

export const Triangles: Story = {
  args: {
    title: 'Healthcare Organizations We Serve',
    ctas: [
      getCTAArgs('triangle', '1'),
    ],
  },
}

export const Hexagons: Story = {
  args: {
    title: 'Healthcare Organizations We Serve',
    ctas: [
      getCTAArgs('hexagon', '2'),
    ],
  },
}

export const Circles: Story = {
  args: {
    title: 'Healthcare Organizations We Serve',
    ctas: [
      getCTAArgs('circle', '3'),
    ],
  },
}
