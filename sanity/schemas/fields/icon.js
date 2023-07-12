import { defineType } from 'sanity'

export default defineType({
  name: 'icon',
  title: 'Icon',
  type: 'string',
  options: {
    list: [
      { title: 'Helix', value: 'helix' },
      { title: 'Network', value: 'network' },
      { title: 'Laptop', value: 'laptop' },
      { title: 'Line Bar Chart', value: 'lineBarChart' },
    ],
  },
})
