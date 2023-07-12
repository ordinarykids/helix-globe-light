import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'
import { visionTool } from '@sanity/vision'
import { media } from 'sanity-plugin-media'
import { structure } from './deskStructure'
import { schemaTypes } from './sanity/schemas'
import { sanityDataset, sanityProjectId } from './environment'

// Define the actions that should be available for singleton documents
const singletonActions = new Set(['publish', 'discardChanges', 'restore'])

// Define the singleton document types
// https://www.sanity.io/guides/singleton-document
const singletonTypes = new Set(['mainNavigation'])

export default defineConfig({
  name: 'default',
  title: 'helix-dot-com-sanity',

  basePath: '/studio',

  projectId: sanityProjectId || 'g5irbagy',
  dataset: sanityDataset || 'staging',

  plugins: [deskTool({ structure }), visionTool(), media()],

  schema: {
    types: schemaTypes,
    templates: (prev) => {
      // Filter out singleton types from the global “New document” menu options
      const filteredTemplates = prev.filter(({ schemaType }) => !singletonTypes.has(schemaType))
      return [
        ...filteredTemplates,
        {
          id: 'subCategory',
          title: 'Sub-category',
          schemaType: 'category',
          parameters: [
            {
              name: 'parentCategoryId',
              title: 'Parent Category ID',
              type: 'string',
            },
          ],
          value: (parameters: ({ parentCategoryId: string})) => ({
            parent: {
              _type: 'reference',
              _ref: parameters.parentCategoryId,
            },
          }),
        },
      ]
    },
  },
  document: {
    // For singleton types, filter out actions that are not explicitly included
    // in the `singletonActions` list defined above
    actions: (input, context) => {
      if (singletonTypes.has(context.schemaType)) {
        return input.filter(({ action }) => action && singletonActions.has(action))
      }
      return input
    },
  },
})
