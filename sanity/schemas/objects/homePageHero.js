import { defineType, defineField, defineArrayMember } from 'sanity'

const homePageHero = defineType({
  name: 'homePageHero',
  type: 'object',
  title: 'Hero',
  fieldsets: [
    {
      name: 'button',
      title: 'Button',
      options: {
        collapsible: true,
        collapsed: true,
      },
    }],
  fields: [
    defineField({
      name: 'header',
      type: 'text',
      title: 'Header',
      rows: 3,
    }),
    defineField({
      name: 'subheader',
      type: 'array',
      title: 'Subheader',
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
    }),
    defineField({
      name: 'buttonText',
      type: 'string',
      title: 'Button Text',
      fieldset: 'button',
    }),
    defineField({
      name: 'buttonLink',
      type: 'link',
      title: 'Button Link',
      fieldset: 'button',
    }),
    defineField({
      name: 'image',
      type: 'image',
      title: 'Image',
    }),
    defineField({
      name: 'media',
      type: 'url', // pending final file format
      title: 'Media',
      description: 'Add file url to override image',
    }),
  ],
})

export default homePageHero
