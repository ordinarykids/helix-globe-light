'use client'

import dynamic from 'next/dynamic'

import styles from './VideoEmbed.module.scss'

// Dependency relies on window. This fixes a hydration error
// Use react-player/lazy to support more than just wistia
const ReactPlayer = dynamic(() => import('react-player/wistia'), {
  ssr: false,
})

interface VideoEmbedProps {
  url: string
}

export interface VideoEmbedField extends VideoEmbedProps {
  _key: string
  _type: 'videoEmbed'
}

const VideoEmbed = ({ url }: VideoEmbedProps) => (
  <div className={styles.container}>
    <div className={styles.content}>
      <div className={styles.videoWrap}>
        <ReactPlayer
          url={url}
          className={styles.videoPlayer}
          width='100%'
          height='100%'
          controls
        />
      </div>
    </div>
  </div>
)

export default VideoEmbed
