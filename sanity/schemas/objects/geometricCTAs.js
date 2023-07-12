import { defineArrayMember, defineField, defineType } from 'sanity'

export default defineType({
  name: 'geometricCTAs',
  title: 'Geometric CTAs',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      title: 'Title',
    }),
    defineField({
      name: 'ctas',
      type: 'array',
      title: 'CTAs',
      of: [defineArrayMember({ type: 'geometricCTA' })],
      codegen: { required: true },
      validation: (Rule) => Rule.required(),
    }),
  ],
})
