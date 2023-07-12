import { defineArrayMember, defineField, defineType } from 'sanity'

export default defineType({
  name: 'homeHeroThreeUp',
  title: 'Hero 3-Up',
  type: 'object',
  fields: [
    defineField({
      name: 'header',
      type: 'string',
      title: 'Header',
    }),
    defineField({
      name: 'ctas',
      type: 'array',
      title: 'CTAs',
      of: [defineArrayMember({ type: 'threeUpCard' })],
      codegen: { required: true },
      validation: (Rule) => Rule.required().length(3).error('Must have 3 CTAs.'),
    }),
  ],
})
