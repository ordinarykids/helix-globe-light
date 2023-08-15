'use client'

import { useEffect, useRef } from 'react'
import cx from 'classnames'
import type { PortableTextBlock } from '@portabletext/types'
import { PortableText } from '@portabletext/react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import type LinkField from 'app/(frontend)/types/link'
import InteractiveSphere from 'app/(frontend)/components/InteractiveSphere'
import Button from '../Button/Button'
import styles from './HomePageHero.module.scss'

export type HomePageHeroType = {
  header?: string | null,
  subheader?: PortableTextBlock[],
  buttonText?: string | null,
  buttonLink?: LinkField,
}

export default function HomePageHero({
  header, subheader, buttonText, buttonLink,
}: HomePageHeroType) {
  gsap.registerPlugin(ScrollTrigger)
  // Set up the scope for our gsap context and set our timeline variables
  const animationRootScope = useRef(null)
  // don't create timelines inside a ref declaration, create them in the useEffect
  // https://greensock.com/forums/topic/24383-why-is-my-timeline-working-twice/
  const scrollTriggerTimeline: React.MutableRefObject<
    GSAPTimeline | HTMLElement | null
  > = useRef(null)

  useEffect(() => {
    // DOM elements ready for animation
    // Use gsatp matchMedia for responsive targeing
    const mm = gsap.matchMedia(animationRootScope)
    // Only run the animation on desktop
    mm.add(
      {
        isDesktop: '(min-width: 1024px)',
      },
      (context) => {
        if (context.conditions) {
          const { isDesktop } = context.conditions
          if (isDesktop) {
            // Create a timeline and add the scrollTrigger for the globe animation
            scrollTriggerTimeline.current = gsap.timeline({
              scrollTrigger: {
                id: 'stID',
                trigger: animationRootScope.current,
                start: 'top 80',
                end: '+=400',
                pin: true,
                scrub: 1,
                pinSpacing: false
              },

            })
          }
        }
      },
    )

    return () => {
      // Cleanup code
      // Calling revert() on gsap.matchMedia() is the same thing as calling it on gsap.context()
      mm.revert()
    }
  }, [])

  return (
    <div className={cx(styles.wrap)} ref={animationRootScope}>
      <div className={cx(styles.container)}>
        <div className={cx(styles.heroLeft)}>
          {header && <h1 className={cx(styles.heroHeader)}>{header}</h1>}
          {subheader && (
            <div className={cx(styles.heroSubheader)}>
              <PortableText value={subheader} />
            </div>
          )}
          {(buttonText && buttonLink) && (
            <div className={cx(styles.link)}>
              <Button
                text={buttonText}
                link={`${buttonLink.link || buttonLink.externalUrl}`}
              />
            </div>
          )}
        </div>
        <div className={cx(styles.heroRight)}>
          <InteractiveSphere />
        </div>
      </div>
    </div>
  )
}
