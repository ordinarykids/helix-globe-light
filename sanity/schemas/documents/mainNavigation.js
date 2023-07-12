import { defineArrayMember, defineType } from 'sanity'
import navigationSection from '../objects/navigationSection'

export default defineType({
  name: 'mainNavigation',
  type: 'document',
  title: 'Main Navigation',
  fields: [
    {
      name: 'navigationSections',
      type: 'array',
      title: 'Navigation Sections',
      of: [defineArrayMember(navigationSection)],
    },
  ],
  preview: {
    prepare() {
      return {
        title: 'Main Nav',
      }
    },
  },
})
