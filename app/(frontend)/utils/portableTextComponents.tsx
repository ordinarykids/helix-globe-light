import StyledLink from '../components/StyledLink'
import { StyledLinkField } from '../components/StyledLink/StyledLink'

type TypeTheme = 'dark' | 'light'

const portableTextComponents = (theme: TypeTheme = 'dark') => (
  {
    types: {
      styledLink: ({ value }: { value: StyledLinkField}) => <StyledLink {...value} theme={theme} />,
    },
  }
)

export default portableTextComponents
