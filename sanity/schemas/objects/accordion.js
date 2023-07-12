import { defineArrayMember, defineField, defineType } from 'sanity'

export default defineType({
  name: 'accordion',
  type: 'object',
  title: 'Accordion',
  fields: [
    defineField({
      name: 'header',
      type: 'string',
      title: 'Header',
    }),
    defineField({
      name: 'items',
      type: 'array',
      title: 'Items',
      of: [
        defineArrayMember({
          name: 'item',
          type: 'object',
          title: 'Item',
          fields: [
            defineField({
              name: 'title',
              type: 'string',
              title: 'Title',
              codegen: { required: true },
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              title: 'Text',
              name: 'text',
              type: 'array',
              codegen: { required: true },
              validation: (Rule) => Rule.required(),
              of: [
                defineArrayMember({
                  type: 'block',
                }),
              ],
            }),
          ],
        }),
      ],
      codegen: { required: true },
      validation: (Rule) => Rule.required(),
    }),
  ],
})
