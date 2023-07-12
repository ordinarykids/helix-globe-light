import { defineArrayMember, defineField, defineType } from 'sanity'

export default defineType({
  name: 'richText',
  type: 'object',
  title: 'Rich Text',
  fields: [
    defineField({
      title: 'Text',
      name: 'text',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'block',
        }),
        defineArrayMember({
          type: 'styledLink',
        }),
      ],
    }),
  ],
})
