import { defineField, defineArrayMember } from 'sanity'
import navigationLinkGroup from './navigationLinkGroup'

export default defineField({
  name: 'navigationSectionPanel',
  title: 'Navigation Section Panel',
  type: 'object',
  fields: [
    {
      name: 'navigationLinkGroups',
      type: 'array',
      title: 'Link Groups',
      of: [defineArrayMember(navigationLinkGroup)],
      codegen: { required: true },
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'Teaser',
      name: 'teaser',
      type: 'reference',
      to: [{ type: 'blogPost' }],
    },
    {
      title: 'Hide teaser on desktop',
      name: 'hideTeaserDesktop',
      type: 'boolean',
    },
    {
      title: 'Hide teaser on mobile',
      name: 'hideTeaserMobile',
      type: 'boolean',
    },
    {
      name: 'ctaLink',
      title: 'CTA Link',
      type: 'object',
      fields: [
        {
          name: 'title',
          type: 'string',
          title: 'Title',
        },
        {
          name: 'url',
          type: 'link',
          title: 'URL',
        },
      ],
    },
  ],
})
