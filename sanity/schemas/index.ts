// Document schemas
import blogPost from './documents/blogPost'
import category from './documents/category'
import mainNavigation from './documents/mainNavigation'
import page from './documents/page'
import tag from './documents/tag'

// Fields
import icon from './fields/icon'
import pageBuilder from './fields/pageBuilder'

// Object schemas
import accordion from './objects/accordion'
import button from './objects/button'
import featuredImage from './objects/featuredImage'
import homeHeroThreeUp from './objects/homeHeroThreeUp'
import homePageHero from './objects/homePageHero'
import geometricCTA from './objects/geometricCTA'
import geometricCTAs from './objects/geometricCTAs'
import iconCard from './objects/iconCard'
import link from './objects/link'
import navigationSectionPanel from './objects/navigationSectionPanel'
import partnerLogoGrid from './objects/partnerLogoGrid'
import pageHero from './objects/pageHero'
import pageSection from './objects/pageSection'
import quote from './objects/quote'
import seo from './objects/seo'
import styledLink from './objects/styledLink'
import threeUpCard from './objects/threeUpCard'

// Page sections
import cardGrid from './pageSections/cardGrid'
import twoUp from './pageSections/twoUp'
import richText from './pageSections/richText'
import videoEmbed from './pageSections/videoEmbed'

// eslint-disable-next-line import/prefer-default-export
export const schemaTypes = [
  accordion,
  page,
  blogPost,
  button,
  cardGrid,
  category,
  featuredImage,
  homeHeroThreeUp,
  homePageHero,
  geometricCTA,
  geometricCTAs,
  iconCard,
  icon,
  link,
  mainNavigation,
  navigationSectionPanel,
  partnerLogoGrid,
  pageBuilder,
  pageHero,
  pageSection,
  quote,
  richText,
  seo,
  styledLink,
  tag,
  threeUpCard,
  twoUp,
  videoEmbed,
]
