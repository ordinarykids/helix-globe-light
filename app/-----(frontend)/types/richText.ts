import type { PortableTextBlock } from '@portabletext/types'
import { StyledLinkField } from '../components/StyledLink/StyledLink'

type RichTextType = (PortableTextBlock | StyledLinkField)[]

export default RichTextType
