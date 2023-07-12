import { defineField } from 'sanity'

export default {
  name: 'button',
  type: 'object',
  title: 'Button',
  fieldsets: [
    {
      title: 'Button Options',
      name: 'buttonOptions',
      options: {
        collapsible: true,
        columns: 4,
      },
    },
  ],
  fields: [
    defineField({
      name: 'text',
      type: 'string',
      title: 'Text',
      codegen: { required: true },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'link',
      type: 'link',
      title: 'Link',
      codegen: { required: true },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'buttonStyle',
      type: 'string',
      title: 'Style',
      fieldset: 'buttonOptions',
      options: {
        list: [
          { title: 'Solid', value: 'solid' },
          { title: 'Outline', value: 'outline' },
        ],
      },
    }),
    defineField({
      name: 'size',
      type: 'string',
      title: 'Size',
      fieldset: 'buttonOptions',
      options: {
        list: [
          { title: 'Large', value: 'large' },
          { title: 'Small', value: 'small' },
        ],
      },
    }),
    defineField({
      name: 'theme',
      type: 'string',
      title: 'Theme',
      fieldset: 'buttonOptions',
      options: {
        list: [
          { title: 'Light', value: 'light' },
          { title: 'Dark', value: 'dark' },
        ],
      },
    }),
    defineField({
      name: 'align',
      type: 'string',
      title: 'Align',
      fieldset: 'buttonOptions',
      options: {
        list: [
          { title: 'Left', value: 'left' },
          { title: 'Center', value: 'center' },
        ],
      },
    }),
  ],
}
