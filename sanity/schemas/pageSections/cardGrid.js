import { defineArrayMember, defineField, defineType } from 'sanity'

export default defineType({
  name: 'cardGrid',
  type: 'object',
  title: 'Card Grid',
  fields: [
    defineField({
      name: 'cards',
      type: 'array',
      title: 'Cards',
      of: [defineArrayMember({ type: 'iconCard' })],
      codegen: { required: true },
      validation: (Rule) => Rule.required(),
    }),
  ],
})
