import { defineArrayMember, defineField, defineType } from 'sanity'

export default defineType({
  name: 'geometricCTA',
  title: 'Geometric CTA',
  type: 'object',
  initialValue: {
    shape: 'circle',
  },
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      title: 'Title',
    }),
    defineField({
      title: 'Content',
      name: 'content',
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
    defineField({
      name: 'linkText',
      type: 'string',
      title: 'Link Text',
    }),
    defineField({
      name: 'linkUrl',
      type: 'link',
      title: 'Link URL',
    }),
    defineField({
      title: 'Background Shape',
      name: 'shape',
      type: 'string',
      options: {
        list: [
          { title: 'Pink circle', value: 'circle' },
          { title: 'Green Hexagon', value: 'hexagon' },
          { title: 'Yellow Triangle', value: 'triangle' },
        ],
      },
      codegen: { required: true },
      validation: (Rule) => Rule.required(),
    }),
  ],
})
