import { defineField } from 'sanity'

export default defineField({
  name: 'navigationLink',
  title: 'Link',
  type: 'object',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
      codegen: { required: true },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'url',
      type: 'link',
      title: 'URL',
      codegen: { required: true },
      validation: (Rule) => Rule.required(),
    },
  ],
})
