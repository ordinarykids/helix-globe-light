import { SanityCodegenConfig } from '@sanity-codegen/cli'

const config: SanityCodegenConfig = {
  output: 'types/sanity-codegen/sanity-codegen.d.ts',
  include: ['./app/\\(frontend\\)/**/*.{js,jsx,ts,tsx}'],
}

export default config
