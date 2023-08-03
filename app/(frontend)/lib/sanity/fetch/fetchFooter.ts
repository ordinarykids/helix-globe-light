import { groq } from 'next-sanity'
import type LinkField from 'app/(frontend)/types/link'
import { sanityFetch } from '../sanityClient'
import link from '../partials/link'

export type FooterNavigation = {
  navigationSections:
    | {
        navigationLinks: {
          _key: string;
          title: string;
          url: LinkField;
        }[];
        _key: string;
        title?: string | null;
      }[]
    | null;
}

export type FooterContent =
  | {
      certifications?: string[];
      contactInfo?: string;
      copyrightCompany?: string;
      copyrightDescription?: string;
      copyrightStartYear?: string;
      legalLinks?:
      | {
        _key: string;
        title: string;
        url: LinkField;
        }[]
      | null;
      linkedInLink?: string;
      tagline?: string;
      twitterLink?: string;
    }
  | undefined
  | null

export type FooterQuery = {
  footerNav: FooterNavigation
  footerContent: FooterContent
}

const fetchFooter = async () => {
  const query = groq`{
    "footerNav": *[_type == "footerNavigation"][0]{
      navigationSections[]{
        _key,
        title,
        navigationLinks[] {
          _key,
          title,
          url ${link},
        },
      },
    },
    "footerContent": *[_type == "footerContent"][0]{
      ...,
      legalLinks[] {
        _key,
        title,
        url ${link},
      },
    },
  }`
  const res = await sanityFetch<FooterQuery>(query)
  return res
}

export default fetchFooter
