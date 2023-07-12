import { defineArrayMember, defineField, defineType } from 'sanity'

export default defineType({
  name: 'partnerLogoGrid',
  type: 'object',
  title: 'Partner Logo Grid',
  fields: [
    defineField({
      name: 'header',
      type: 'string',
      title: 'Header',
    }),
    defineField({
      name: 'subheader',
      type: 'text',
      title: 'Subheader',
      rows: 3,
    }),
    defineField({
      name: 'logos',
      type: 'array',
      title: 'Logos',
      of: [
        defineArrayMember({
          type: 'object',
          name: 'linkedLogo',
          fields: [
            defineField({
              name: 'title',
              type: 'string',
              title: 'Title',
              description: 'Edit field to replace default title',
              initialValue: 'Partner logo',
            }),
            defineField({
              name: 'logo',
              type: 'image',
              title: 'Logo',
              codegen: { required: true },
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'external',
              type: 'url',
              title: 'URL',
              hidden: ({ parent, value }) => !value && !!parent?.file,
            }),
            defineField({
              name: 'file',
              type: 'file',
              title: 'File',
              hidden: ({ parent, value }) => !value && !!parent?.external,
            }),
          ],
          preview: {
            select: {
              title: 'title',
              media: 'logo',
            },
          },
        }),
      ],
    }),
  ],
})
