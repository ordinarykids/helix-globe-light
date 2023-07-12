import { defineField } from 'sanity'

export default defineField({
  name: 'navigationSection',
  title: 'Navigation Section',
  type: 'object',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Section Title',
      codegen: { required: true },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'navigationSectionPanel',
      type: 'navigationSectionPanel',
      title: 'Navigation Section Panel',
      codegen: { required: true },
      validation: (Rule) => Rule.required(),
    },
  ],
})
