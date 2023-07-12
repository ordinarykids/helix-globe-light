interface IImageField {
  altText?: string | null
  title?: string | null
  url: string
  width: number
  height: number
  aspectRatio: number
  blurHash: string | null
}

type ImageField = IImageField | null

export default ImageField
