import { defineField, defineArrayMember } from 'sanity'
import navigationLink from './navigationLink'

export default defineField({
  name: 'navigationLinkGroup',
  title: 'Link Group',
  type: 'object',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Group Title',
    },
    {
      name: 'titlelink',
      type: 'link',
      title: 'Group Title Link',
    },
    {
      name: 'navigationLinks',
      type: 'array',
      title: 'Links',
      of: [defineArrayMember(navigationLink)],
      codegen: { required: true },
      validation: (Rule) => Rule.required(),
    },
  ],
  preview: {
    select: {
      title: 'title',
      navigationLink0Title: 'navigationLinks.0.title',
      navigationLink1Title: 'navigationLinks.1.title',
      navigationLink2Title: 'navigationLinks.2.title',
      navigationLink3Title: 'navigationLinks.3.title',
      navigationLink4Title: 'navigationLinks.4.title',
    },
    prepare: ({
      title,
      navigationLink0Title,
      navigationLink1Title,
      navigationLink2Title,
      navigationLink3Title,
      navigationLink4Title,
    }) => {
      const links = [
        navigationLink0Title,
        navigationLink1Title,
        navigationLink2Title,
        navigationLink3Title,
        navigationLink4Title,
      ].filter(Boolean)
      const linksCombined = links.join(', ')
      return {
        title: title || `${linksCombined}...`,
      }
    },
  },
})
