import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'threeUpCard',
  title: '3-up Card',
  type: 'object',
  fields: [
    defineField({
      name: 'image',
      type: 'image',
      title: 'Image',
    }),
    defineField({
      name: 'header',
      type: 'string',
      title: 'Header',
    }),
    defineField({
      name: 'buttonText',
      type: 'string',
      title: 'Button Text',
    }),
    defineField({
      name: 'buttonUrl',
      type: 'link',
      title: 'Button URL',
    }),
  ],
})
