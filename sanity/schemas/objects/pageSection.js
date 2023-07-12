export default {
  name: 'pageSection',
  type: 'object',
  title: 'Page Section',
  initialValue: {
    bgColor: 'gray',
    bgImage: 'none',
  },
  fields: [
    {
      title: 'Section Title',
      name: 'title',
      type: 'string',
    },
    {
      title: 'Background Color',
      name: 'bgColor',
      type: 'string',
      options: {
        list: [
          { title: 'Gray', value: 'gray' },
          { title: 'White', value: 'white' },
          { title: 'Dark Blue', value: 'darkBlue' },
        ],
      },
      codegen: { required: true },
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'Background Image',
      name: 'bgImage',
      type: 'string',
      options: {
        list: [
          { title: 'None', value: 'none' },
          { title: 'Gray Shapes', value: 'grayShapes' },
        ],
      },
      codegen: { required: true },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'innerBlocks',
      type: 'array',
      title: 'Inner Blocks',
      of: [
        { type: 'cardGrid' },
        { type: 'twoUp' },
        { type: 'richText' },
        { type: 'videoEmbed' },
      ],
      codegen: { required: true },
      validation: (Rule) => Rule.required(),
    },
  ],
}
