import { defineArrayMember, defineField, defineType } from 'sanity'

export default defineType({
  name: 'twoUp',
  type: 'object',
  title: '2-Up',
  initialValue: {
    imageAlignment: 'left',
  },
  fields: [
    defineField({
      title: 'Image',
      name: 'image',
      type: 'image',
    }),
    defineField({
      title: 'Title',
      name: 'title',
      type: 'string',
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
        {
          type: 'styledLink',
        },
      ],
    }),
    defineField({
      name: 'imageAlignment',
      type: 'string',
      title: 'Image Alignment',
      options: {
        list: [
          { title: 'Left', value: 'left' },
          { title: 'Right', value: 'right' },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'imagePaddingOverride',
      type: 'number',
      title: 'Image Padding Override',
      description: 'Default padding around image is 40px. Add a max percentage override here of 45 up to two decimal places for large screen widths.',
      validation: (Rule) => Rule.precision(2).min(0).max(45),
    }),
  ],
})
