import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import fetchPageByPath from '../lib/sanity/fetch/fetchPageByPath'
import Accordion from '../components/Accordion'
import HomePageHero from '../components/HomePageHero'
import HomeHeroThreeUp from '../components/HomeHeroThreeUp'
import GeometricCTAs from '../components/GeometricCTAs'
import PageHero from '../components/PageHero'
import PartnerLogoGrid from '../components/PartnerLogoGrid/PartnerLogoGrid'
import PageSection from '../components/PageSection'
import Quote from '../components/Quote'

export async function generateMetadata(
  { params }: { params: { slug: string[] } },
): Promise<Metadata> {
  const { slug } = params
  const pagePath = slug ?? ['home']
  const pageData = await fetchPageByPath(pagePath.join('/'))

  if (!pageData) {
    return {}
  }

  const { title } = pageData

  return {
    title,
  }
}

export default async function Page({ params }: { params: { slug: string[] } }) {
  const { slug } = params
  const pagePath = slug ?? ['home']
  const pageData = await fetchPageByPath(pagePath.join('/'))

  if (!pageData) {
    notFound()
  }

  const {
    homePageHero,
    homeHeroThreeUp,
    pageHero,
    pageBuilder,
  } = pageData
  return (
    <main>
      {homePageHero && <HomePageHero {...homePageHero} />}
      {homeHeroThreeUp && <HomeHeroThreeUp {...homeHeroThreeUp} />}
      {pageHero && <PageHero {...pageHero} />}

      {pageBuilder && pageBuilder.length > 0 && pageBuilder.map((buildingBlock) => {
        switch (buildingBlock?._type) {
          case 'pageSection':
            return <PageSection key={buildingBlock._key} {...buildingBlock} />

          case 'accordion':
            return <Accordion key={buildingBlock._key} {...buildingBlock} />

          case 'geometricCTAs':
            return <GeometricCTAs key={buildingBlock._key} {...buildingBlock} />

          case 'partnerLogoGrid':
            return <PartnerLogoGrid key={buildingBlock._key} {...buildingBlock} />

          case 'quote':
            return <Quote key={buildingBlock._key} {...buildingBlock} />

          default:
            return null
        }
      })}
    </main>
  )
}
