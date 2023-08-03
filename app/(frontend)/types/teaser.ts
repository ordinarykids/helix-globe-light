import type ImageField from './image'

interface TeaserType {
  _type: string
  image: ImageField
  slug: string
  title?: string | null
}

export default TeaserType
