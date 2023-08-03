'use client'

import dynamic from 'next/dynamic'
import { useEffect } from 'react'
import { PortableText } from '@portabletext/react'
import type { PortableTextBlock } from '@portabletext/types'

import styles from './HubspotForm.module.scss'

// Load client-side only to avoid Warning: Prop `id` did not match. on client vs server
const ReactHubspotForm = dynamic(() => import('react-hubspot-form'), {
  ssr: false,
})

interface HubspotFormProps {
  header?: string | null
  text?: PortableTextBlock[]
  hubspotFormId: string
}

export interface HubspotFormField extends HubspotFormProps {
  _key: string
  _type: 'hubspotForm'
}

export default function HubspotForm({ header, text, hubspotFormId }: HubspotFormProps) {
  // Add filled data attribute for CSS input background change when field is filled in
  const elementsToSelect = '.hs-input:not([type="checkbox"], [type="radio"])'
  const observeValueChangesListener = (event: Event) => {
    const eventTarget = event.target as HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    if (eventTarget) {
      const { dataset, value } = eventTarget
      if (value) {
        dataset.filled = 'true'
      } else {
        dataset.filled = 'false'
      }
    }
  }
  const observeValueChanges = () => {
    if (typeof document !== 'undefined') {
      const selectElements = document.querySelectorAll(elementsToSelect)
      selectElements.forEach((selectElement) => {
        selectElement.addEventListener('change', observeValueChangesListener)
      })
    }
  }

  // Clean up event listeners
  useEffect(() => () => {
    const selectElements = document.querySelectorAll(elementsToSelect)
    selectElements.forEach((selectElement) => {
      selectElement.removeEventListener('change', observeValueChangesListener)
    })
  })

  return (
    <section className={styles.wrap}>
      <div className={styles.container}>
        {(header || text) && (
          <div className={styles.intro}>
            {header && (
              <h2 className={styles.title}>
                {header}
              </h2>
            )}
            {text && (
              <div className={styles.textWrap}>
                <PortableText value={text} />
              </div>
            )}
          </div>
        )}
        <div className={styles.hsFormWrap}>
          <ReactHubspotForm
            // eslint-disable-next-line
            // @ts-ignore
            portalId='21375987'
            formId={hubspotFormId}
            onReady={observeValueChanges}
          />
        </div>
      </div>
    </section>
  )
}
