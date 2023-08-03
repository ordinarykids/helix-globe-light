import { groq } from 'next-sanity'
import { AccordionField } from 'app/(frontend)/components/Accordion/Accordion'
import { HomePageHeroType } from '@/app/(frontend)/components/HomePageHero/HomePageHero'
import { HomeHeroThreeUpType } from '@/app/(frontend)/components/HomeHeroThreeUp/HomeHeroThreeUp'
import { GeometricCTAsProps } from 'app/(frontend)/components/GeometricCTAs/GeometricCTAs'
import { PageHeroType } from '@/app/(frontend)/components/PageHero/PageHero'
import { PartnerLogoGridProps } from '@/app/(frontend)/components/PartnerLogoGrid/PartnerLogoGrid'
import { PageSectionProps } from 'app/(frontend)/components/PageSection/PageSection'
import { QuoteField } from 'app/(frontend)/components/Quote/Quote'
import { sanityFetch } from '../sanityClient'
import imgReference from '../partials/imgReference'
import link from '../partials/link'

interface Key {
  _key: string,
}

interface GeometricCTAsField extends Key, GeometricCTAsProps {
  _type: 'geometricCTAs'
}

interface PageSectionField extends Key, PageSectionProps {
  _type: 'pageSection'
}

interface PartnerLogoGridField extends Key, PartnerLogoGridProps {
  _type: 'partnerLogoGrid'
}

type PageByPath = {
  title: string | null
  homePageHero: HomePageHeroType | null,
  homeHeroThreeUp: HomeHeroThreeUpType | null,
  pageHero: PageHeroType | null,
  pageBuilder: (
    | AccordionField
    | GeometricCTAsField
    | PartnerLogoGridField
    | PageSectionField
    | QuoteField
  )[] | null
}

const fetchPageByPath = async (pagePath: string) => {
  const query = groq`*[_type == "page" && slug.current == $pagePath][0]{
    title,
    'homePageHero': hero {
      header,
      subheader,
      media,
      buttonText,
      buttonLink ${link},
      'image': image.asset->${imgReference},
    },
    homeHeroThreeUp {
      ...,
      ctas[] {
        ...,
        'image': image.asset->${imgReference},
        buttonUrl ${link},
      }
    },
    pageHero {
      ...,
      buttonLink ${link},
      'image': image.asset->${imgReference},
    },
    pageBuilder[] {
      ...,
      _type == 'geometricCTAs' => {
        ...,
        ctas[] {
          ...,
          linkUrl ${link},
        }
      },
      _type == 'partnerLogoGrid' => {
        ...,
        logos[] {
          ...,
          'fileUrl': file.asset->url,
          'image': logo.asset->${imgReference},
        }
      },
      _type == 'pageSection' => {
        ...,
        innerBlocks[] {
          ...,
          _type == 'twoUp' => {
            ...,
            'image': image.asset->${imgReference},
          },
        },
      },
    },
  }`
  const res = await sanityFetch<PageByPath>(query, { pagePath })
  return res
}

export default fetchPageByPath
