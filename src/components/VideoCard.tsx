import { useRef } from 'react'
import { translate } from '../content'
import type { Frame } from '../types'
import { useI18n } from '../i18n'
import { useVideoRatio } from '../hooks'
import { Reveal } from './Reveal'
import { SmartVideo } from './SmartVideo'

interface VideoCardProps {
  video: Frame
  index: number
  tag: string
}

export function VideoCard({ video, index, tag }: VideoCardProps) {
  const { lang } = useI18n()
  const videoRef = useRef<HTMLVideoElement>(null)
  const ratio = useVideoRatio(videoRef)
  const ratioStyle = ratio != null && ratio < 1 ? { aspectRatio: String(ratio) } : undefined

  return (
    <Reveal delay={(index % 3) * 90} className="card">
      <figure className="card__media" style={ratioStyle}>
        <span className="card__cover card__cover--pill" aria-hidden="true">
          <span className="frame-tag">{tag}</span>
        </span>
        <SmartVideo
          ref={videoRef}
          src={video.src}
          className="card__video"
          muted
          loop
          fallback={<span className="frame-tag">{video.src}</span>}
        />
        <span className="card__duration">{video.duration}</span>
      </figure>

      <figcaption className="card__body">
        <div>
          <p className="card__category">{tag}</p>
          <h3 className="card__title">{translate(video.title, lang)}</h3>
        </div>
        <span className="card__year">{video.year}</span>
      </figcaption>
    </Reveal>
  )
}