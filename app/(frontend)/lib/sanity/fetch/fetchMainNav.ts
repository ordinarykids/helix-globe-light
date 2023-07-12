import { groq } from 'next-sanity'
import type ImageField from 'app/(frontend)/types/image'
import type LinkField from 'app/(frontend)/types/link'
import { sanityFetch } from '../sanityClient'
import imgReference from '../partials/imgReference'
import link from '../partials/link'

export type MainNavCTALink = {
  title?: string | null;
  url?: LinkField;
} | null | undefined

export type MainNavigation = {
  navigationSections:
    | {
        navigationSectionPanel: {
          ctaLink?: MainNavCTALink;
          navigationLinkGroups: {
            navigationLinks: {
              _key: string;
              title: string;
              url: LinkField;
            }[];
            _key: string;
            title?: string | null;
            titlelink?: LinkField | null;
          }[];
          teaser: {
            _type: string;
            image: ImageField;
            slug: string;
            title?: string | null;
          } | null;
          hideTeaserDesktop: boolean | null;
          hideTeaserMobile: boolean | null;
        };
        _key: string;
        title: string;
      }[]
    | null;
};

const fetchMainNav = async () => {
  const query = groq`*[_type == "mainNavigation"][0]{
    navigationSections[]{
      _key,
      title,
      navigationSectionPanel {
        navigationLinkGroups[] {
          _key,
          title,
          titlelink ${link},
          navigationLinks[] {
            _key,
            title,
            url ${link},
          },
        },
        teaser->{
          'image': featuredImage.image.asset->${imgReference},
          title,
          _type,
          "slug": slug.current,
        },
        hideTeaserDesktop,
        hideTeaserMobile,
        ctaLink {
          title,
          url ${link},
        },
      },
    },
  }`
  const res = await sanityFetch<MainNavigation>(query)
  return res
}

export default fetchMainNav
