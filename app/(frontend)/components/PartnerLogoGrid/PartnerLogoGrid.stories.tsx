import type { Meta, StoryObj } from '@storybook/react'
import PartnerLogoGrid from '.'

const meta: Meta<typeof PartnerLogoGrid> = {
  title: 'Components/PartnerLogoGrid',
  component: PartnerLogoGrid,
  tags: ['autodocs'], // Uncomment if you aren't using an MDX file for docs here
  parameters: {
    layout: 'fullscreen',
  },
}

export default meta

type Story = StoryObj<typeof PartnerLogoGrid>;

export const DefaultOddLastRow: Story = {
  args: {
    header: 'Some of Our Partners',
    subheader: 'Driving collaboration and partnership across the industry:',
    logos: [
      {
        image: {
          url: 'https://cdn.sanity.io/images/g5irbagy/staging/19304ab5917fc659f9e0d4de66156068ace5b6d0-352x288.png',
          altText: 'Health Partners logo',
          title: 'Health Partners',
          height: 288,
          width: 352,
          aspectRatio: 1.2222222222222223,
          blurHash: null,
        },
        external: 'foo',
      },
      {
        image: {
          url: 'https://cdn.sanity.io/images/g5irbagy/staging/de549e24821efa8d2072d488c46921183e26ace3-352x288.png',
          altText: 'Kaiser Permanente logo',
          title: 'Kaiser Permanente',
          height: 288,
          width: 352,
          aspectRatio: 1.2222222222222223,
          blurHash: null,
        },
        fileUrl: '#',
      },
      {
        image: {
          url: 'https://cdn.sanity.io/images/g5irbagy/staging/c25068ad28b1e9025b5bef35d43ebae16ff9b80f-352x288.png',
          altText: 'Pfizer logo',
          title: 'Pfizer',
          height: 288,
          width: 352,
          aspectRatio: 1.2222222222222223,
          blurHash: null,
        },
      },
      {
        image: {
          url: 'https://cdn.sanity.io/images/g5irbagy/staging/bfd424c3a86fec51503c733f0a340a6050728540-352x288.png',
          altText: 'CDC logo',
          title: 'CDC',
          height: 288,
          width: 352,
          aspectRatio: 1.2222222222222223,
          blurHash: null,
        },
      },
      {
        image: {
          url: 'https://cdn.sanity.io/images/g5irbagy/staging/598c94d096fe50ee3d0275a6ac4d5ffb3533ef59-352x288.png',
          altText: 'Mayo Clinic logo',
          title: 'Mayo Clinic',
          height: 288,
          width: 352,
          aspectRatio: 1.2222222222222223,
          blurHash: null,
        },
      },
      {
        image: {
          url: 'https://cdn.sanity.io/images/g5irbagy/staging/9402447d864509fd01485fa9d2b8a0be07eb1948-352x288.png',
          altText: 'UAHS logo',
          title: 'UAHS Biorepository',
          height: 288,
          width: 352,
          aspectRatio: 1.2222222222222223,
          blurHash: null,
        },
      },
      {
        image: {
          url: 'https://cdn.sanity.io/images/g5irbagy/staging/361cd1b0998976bfa4d7191764f083bf2aa92456-352x288.png',
          altText: 'WellSpan Health logo',
          title: 'WellSpan Health',
          height: 288,
          width: 352,
          aspectRatio: 1.2222222222222223,
          blurHash: null,
        },
      },
      {
        image: {
          url: 'https://cdn.sanity.io/images/g5irbagy/staging/6f1e4417d552844d69efcc3e8b97291426ba4d9a-352x288.png',
          altText: 'Providence logo',
          title: 'Providence',
          height: 288,
          width: 352,
          aspectRatio: 1.2222222222222223,
          blurHash: null,
        },
      },
      {
        image: {
          url: 'https://cdn.sanity.io/images/g5irbagy/staging/e94c03ed7671369d3967cc06b927ed84092ab0be-352x288.png',
          altText: 'NIH logo',
          title: 'NIH',
          height: 288,
          width: 352,
          aspectRatio: 1.2222222222222223,
          blurHash: null,
        },
      },
      {
        image: {
          url: 'https://cdn.sanity.io/images/g5irbagy/staging/a6a44bacc280e9011c07ab975ca51a1a88d1298f-352x288.png',
          altText: 'Renown Health logo',
          title: 'Renown Health',
          height: 288,
          width: 352,
          aspectRatio: 1.2222222222222223,
          blurHash: null,
        },
      },
      {
        image: {
          url: 'https://cdn.sanity.io/images/g5irbagy/staging/2175996eb26fc156a9be4f55ca7868eb60124b51-352x288.png',
          altText: 'Memorial Hermann logo',
          title: 'Memorial Hermann',
          height: 288,
          width: 352,
          aspectRatio: 1.2222222222222223,
          blurHash: null,
        },
      },
      {
        image: {
          url: 'https://cdn.sanity.io/images/g5irbagy/staging/fb570d89935e6216ffd0db947c86228cc6fe0250-352x288.png',
          altText: 'MUSC logo',
          title: 'MUSC',
          height: 288,
          width: 352,
          aspectRatio: 1.2222222222222223,
          blurHash: null,
        },
      },
      {
        image: {
          url: 'https://cdn.sanity.io/images/g5irbagy/staging/992bdf5121ccf1226ce5fc86f8d4ac08ac46c918-352x288.png',
          altText: 'Moderna logo',
          title: 'Moderna',
          height: 288,
          width: 352,
          aspectRatio: 1.2222222222222223,
          blurHash: null,
        },
      },
    ],
  },
}

export const EvenLastRow: Story = {
  args: {
    header: 'Some of Our Partners',
    subheader: 'Driving collaboration and partnership across the industry:',
    logos: [
      {
        image: {
          url: 'https://cdn.sanity.io/images/g5irbagy/staging/19304ab5917fc659f9e0d4de66156068ace5b6d0-352x288.png',
          altText: 'Health Partners logo',
          title: 'Health Partners',
          height: 288,
          width: 352,
          aspectRatio: 1.2222222222222223,
          blurHash: null,
        },
        external: 'foo',
      },
      {
        image: {
          url: 'https://cdn.sanity.io/images/g5irbagy/staging/de549e24821efa8d2072d488c46921183e26ace3-352x288.png',
          altText: 'Kaiser Permanente logo',
          title: 'Kaiser Permanente',
          height: 288,
          width: 352,
          aspectRatio: 1.2222222222222223,
          blurHash: null,
        },
        fileUrl: '#',
      },
      {
        image: {
          url: 'https://cdn.sanity.io/images/g5irbagy/staging/c25068ad28b1e9025b5bef35d43ebae16ff9b80f-352x288.png',
          altText: 'Pfizer logo',
          title: 'Pfizer',
          height: 288,
          width: 352,
          aspectRatio: 1.2222222222222223,
          blurHash: null,
        },
      },
      {
        image: {
          url: 'https://cdn.sanity.io/images/g5irbagy/staging/bfd424c3a86fec51503c733f0a340a6050728540-352x288.png',
          altText: 'CDC logo',
          title: 'CDC',
          height: 288,
          width: 352,
          aspectRatio: 1.2222222222222223,
          blurHash: null,
        },
      },
      {
        image: {
          url: 'https://cdn.sanity.io/images/g5irbagy/staging/598c94d096fe50ee3d0275a6ac4d5ffb3533ef59-352x288.png',
          altText: 'Mayo Clinic logo',
          title: 'Mayo Clinic',
          height: 288,
          width: 352,
          aspectRatio: 1.2222222222222223,
          blurHash: null,
        },
      },
      {
        image: {
          url: 'https://cdn.sanity.io/images/g5irbagy/staging/9402447d864509fd01485fa9d2b8a0be07eb1948-352x288.png',
          altText: 'UAHS logo',
          title: 'UAHS Biorepository',
          height: 288,
          width: 352,
          aspectRatio: 1.2222222222222223,
          blurHash: null,
        },
      },
      {
        image: {
          url: 'https://cdn.sanity.io/images/g5irbagy/staging/361cd1b0998976bfa4d7191764f083bf2aa92456-352x288.png',
          altText: 'WellSpan Health logo',
          title: 'WellSpan Health',
          height: 288,
          width: 352,
          aspectRatio: 1.2222222222222223,
          blurHash: null,
        },
      },
      {
        image: {
          url: 'https://cdn.sanity.io/images/g5irbagy/staging/6f1e4417d552844d69efcc3e8b97291426ba4d9a-352x288.png',
          altText: 'Providence logo',
          title: 'Providence',
          height: 288,
          width: 352,
          aspectRatio: 1.2222222222222223,
          blurHash: null,
        },
      },
      {
        image: {
          url: 'https://cdn.sanity.io/images/g5irbagy/staging/e94c03ed7671369d3967cc06b927ed84092ab0be-352x288.png',
          altText: 'NIH logo',
          title: 'NIH',
          height: 288,
          width: 352,
          aspectRatio: 1.2222222222222223,
          blurHash: null,
        },
      },
      {
        image: {
          url: 'https://cdn.sanity.io/images/g5irbagy/staging/a6a44bacc280e9011c07ab975ca51a1a88d1298f-352x288.png',
          altText: 'Renown Health logo',
          title: 'Renown Health',
          height: 288,
          width: 352,
          aspectRatio: 1.2222222222222223,
          blurHash: null,
        },
      },
      {
        image: {
          url: 'https://cdn.sanity.io/images/g5irbagy/staging/2175996eb26fc156a9be4f55ca7868eb60124b51-352x288.png',
          altText: 'Memorial Hermann logo',
          title: 'Memorial Hermann',
          height: 288,
          width: 352,
          aspectRatio: 1.2222222222222223,
          blurHash: null,
        },
      },
      {
        image: {
          url: 'https://cdn.sanity.io/images/g5irbagy/staging/fb570d89935e6216ffd0db947c86228cc6fe0250-352x288.png',
          altText: 'MUSC logo',
          title: 'MUSC',
          height: 288,
          width: 352,
          aspectRatio: 1.2222222222222223,
          blurHash: null,
        },
      },
      {
        image: {
          url: 'https://cdn.sanity.io/images/g5irbagy/staging/992bdf5121ccf1226ce5fc86f8d4ac08ac46c918-352x288.png',
          altText: 'Moderna logo',
          title: 'Moderna',
          height: 288,
          width: 352,
          aspectRatio: 1.2222222222222223,
          blurHash: null,
        },
      },
      {
        image: {
          url: 'https://cdn.sanity.io/images/g5irbagy/staging/fb570d89935e6216ffd0db947c86228cc6fe0250-352x288.png',
          altText: 'MUSC logo',
          title: 'MUSC',
          height: 288,
          width: 352,
          aspectRatio: 1.2222222222222223,
          blurHash: null,
        },
      },
    ],
  },
}
