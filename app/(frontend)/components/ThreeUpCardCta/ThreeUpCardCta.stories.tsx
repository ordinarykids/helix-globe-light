import type { Meta, StoryObj } from '@storybook/react'
import ThreeUpCardCta from '.'

const meta: Meta<typeof ThreeUpCardCta> = {
  title: 'Components/ThreeUpCardCta',
  component: ThreeUpCardCta,
  tags: ['autodocs'], // Uncomment if you aren't using an MDX file for docs here
  parameters: {
    layout: 'fullscreen',
  },
}

export default meta

type Story = StoryObj<typeof ThreeUpCardCta>;

export const ThreeUpCardCtaStory: Story = {
  args: {
    ctas: [
      {
        _key: '5ade475331ed',
        _type: 'blogPost',
        image: {
          url: 'https://cdn.sanity.io/images/g5irbagy/staging/526b351808562325eab086dbb3a33d303f0d9a2f-1440x810.jpg',
          altText: 'A female doctor looks at a clipboard held by a male doctor',
          title: 'Two doctors',
          height: 656,
          width: 748,
          aspectRatio: 1.1402439024390243,
          blurHash: 'eoPi@mo#t7xu_4yEs+RjWXs.-=M|t7t7Mxn#WCofV@Rjx^t6RjR*Ri',
        },
        title: 'Healthy Nevada Project with Renown Health',
        slug: 'this-is-a-blog-post-with-a-title',
      },
      {
        _key: 'cf1fdc09fdd7',
        _type: 'blogPost',
        image: {
          height: 656,
          width: 748,
          aspectRatio: 1.1402439024390243,
          blurHash: 'eSOzlDSb~q?b-=-XxbxutQIn~XM{Rja{IUo{IUM{oMxb?I%3M{M{oy',
          url: 'https://cdn.sanity.io/images/g5irbagy/staging/526b351808562325eab086dbb3a33d303f0d9a2f-1440x810.jpg',
          altText: null,
          title: null,
        },
        title: 'How Memorial Hermann is Bringing Precision Medicine to Texans with Population Genomics',
        slug: 'this-is-a-blog-post-with-a-title',
      },
      {
        _key: 'a97aff563802',
        _type: 'blogPost',
        image: null,
        title: 'HealthPartners testimonial',
        slug: 'this-is-a-blog-post-with-a-title',
      },
    ],
  },
}
