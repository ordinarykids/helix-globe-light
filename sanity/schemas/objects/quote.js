import { defineType, defineField, defineArrayMember } from 'sanity'

const quote = defineType({
  name: 'quote',
  type: 'object',
  title: 'Quote/Testimonial',
  initialValue: {
    bgImage: 'globe',
  },
  fields: [
    defineField({
      name: 'quote',
      type: 'array',
      title: 'Quote',
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
            ],
            annotations: [],
          },
          lists: [],
        }),
      ],
      codegen: { required: true },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'attribution',
      type: 'string',
      title: 'Attribution',
    }),
    defineField({
      name: 'title',
      type: 'string',
      title: 'Title',
    }),
    {
      title: 'Background Image',
      name: 'bgImage',
      type: 'string',
      options: {
        list: [
          { title: 'None', value: 'none' },
          { title: 'Globe', value: 'globe' },
        ],
      },
      codegen: { required: true },
      validation: (Rule) => Rule.required(),
    },
  ],
})

export default quote
