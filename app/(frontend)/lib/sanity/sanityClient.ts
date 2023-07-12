import { cache } from 'react'
import { createClient } from 'next-sanity'
import { sanityDataset, sanityProjectId, sanityApiVersion } from '../../../../environment'

export const sanityClient = createClient({
  projectId: sanityProjectId,
  dataset: sanityDataset,
  apiVersion: sanityApiVersion,
  useCdn: false,
})

// see https://github.com/sanity-io/next-sanity#appdir-react-server-components-and-caching
export const sanityFetch = cache(sanityClient.fetch.bind(sanityClient))
