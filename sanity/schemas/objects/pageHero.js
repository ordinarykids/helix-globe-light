import { defineType, defineField, defineArrayMember } from 'sanity'

const pageHero = defineType({
  name: 'pageHero',
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
      name: 'eyebrow',
      type: 'string',
      title: 'Eyebrow',
    }),
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
              { title: 'Underline', value: 'underline' },
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
      name: 'simpleHeader',
      type: 'boolean',
      title: 'Use Simple Page Header',
    }),
  ],
})

export default pageHero
