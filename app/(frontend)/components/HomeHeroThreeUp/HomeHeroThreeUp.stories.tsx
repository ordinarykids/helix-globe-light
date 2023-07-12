import type { Meta, StoryObj } from '@storybook/react'
import HomeHeroThreeUp from '.'

const meta: Meta<typeof HomeHeroThreeUp> = {
  title: 'Components/HomeHeroThreeUp',
  component: HomeHeroThreeUp,
  tags: ['autodocs'], // Uncomment if you aren't using an MDX file for docs here
}

export default meta

type Story = StoryObj<typeof HomeHeroThreeUp>;

export const HomeHeroThreeUpStory: Story = {
  args: {
    header: 'Who We Work With',
    ctas: [
      {
        image: {
          url: 'https://cdn.sanity.io/images/g5irbagy/staging/e97e0ebbb51c68f7a03433b85fba83c021d12482-748x656.png',
          altText: 'A female doctor looks at a clipboard held by a male doctor',
          title: 'Two doctors',
          height: 656,
          width: 748,
          aspectRatio: 1.1402439024390243,
          blurHash: 'eoPi@mo#t7xu_4yEs+RjWXs.-=M|t7t7Mxn#WCofV@Rjx^t6RjR*Ri',
        },
        header: 'Health Systems',
        _key: 'db39c7366b6a',
        buttonUrl: { link: 'test-2/test-child', externalUrl: null },
        buttonText: 'Learn More',
      },
      {
        buttonText: 'Learn More',
        image: {
          height: 656,
          width: 748,
          aspectRatio: 1.1402439024390243,
          blurHash: 'eSOzlDSb~q?b-=-XxbxutQIn~XM{Rja{IUo{IUM{oMxb?I%3M{M{oy',
          url: 'https://cdn.sanity.io/images/g5irbagy/staging/a63ee6faf8964851fc1eddf6b9f656a4bdb6638f-748x656.png',
          altText: null,
          title: null,
        },
        header: 'Life Sciences',
        _key: '3f9384d684b2',
        buttonUrl: { link: null, externalUrl: 'https://helix.com' },
      },
      {
        buttonText: 'Learn More',
        image: {
          width: 748,
          aspectRatio: 1.1402439024390243,
          blurHash: 'eZQ++?VF_NyDS}%#XRa|xaMxX-pIt7VsR5VYiwV[S2yC-;WBIUozkC',
          url: 'https://cdn.sanity.io/images/g5irbagy/staging/9ca72f05206e682a0cf3ec6f49fb53bd9679ace9-748x656.png',
          altText: null,
          title: null,
          height: 656,
        },
        header: 'Public Health',
        _key: '27f8d9aed3b9',
        buttonUrl: { externalUrl: null, link: 'test-2' },
      },
    ],
  },
}
