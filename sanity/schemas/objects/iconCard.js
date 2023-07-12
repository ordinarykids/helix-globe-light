import { defineArrayMember, defineField, defineType } from 'sanity'

export default defineType({
  name: 'iconCard',
  title: 'Icon Card',
  type: 'object',
  initialValue: {
    icon: 'helix',
  },
  fields: [
    defineField({
      title: 'Icon',
      name: 'icon',
      type: 'icon',
    }),
    defineField({
      name: 'header',
      type: 'string',
      title: 'Header',
    }),
    defineField({
      name: 'subheader',
      type: 'string',
      title: 'Subheader',
    }),
    defineField({
      title: 'Text',
      name: 'text',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'block',
          styles: [
            { title: 'Normal', value: 'normal' },
          ],
          marks: {
            decorators: [
              { title: 'Strong', value: 'strong' },
              { title: 'Emphasis', value: 'em' },
              { title: 'Underline', value: 'underline' },
            ],
          },
          lists: [],
        }),
      ],
    }),
  ],
})
