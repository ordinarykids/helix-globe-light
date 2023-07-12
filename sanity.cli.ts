import { defineCliConfig } from 'sanity/cli'
import { sanityDataset, sanityProjectId } from './environment'

export default defineCliConfig({
  api: {
    projectId: sanityProjectId || 'g5irbagy',
    dataset: sanityDataset || 'staging',
  },
})
