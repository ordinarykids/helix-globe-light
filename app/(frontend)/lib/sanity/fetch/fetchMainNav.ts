import { groq } from 'next-sanity'
import type LinkField from 'app/(frontend)/types/link'
import type TeaserType from 'app/(frontend)/types/teaser'
import { sanityFetch } from '../sanityClient'
import teaser from '../partials/teaser'
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
          teaser: TeaserType | null;
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
        teaser->${teaser},
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
