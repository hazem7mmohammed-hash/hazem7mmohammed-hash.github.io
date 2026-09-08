import { useRef } from 'react'
import { SHOWREEL_SRC } from '../content'
import { useI18n } from '../i18n'
import { useFileExists, useVideoRatio } from '../hooks'
import { Reveal } from './Reveal'
import { SmartVideo } from './SmartVideo'
import { IconPlay } from './icons'

export function Showreel() {
  const { t } = useI18n()
  const videoRef = useRef<HTMLVideoElement>(null)
  const ratio = useVideoRatio(videoRef)
  const ratioStyle = ratio != null && ratio < 1 ? { aspectRatio: String(ratio) } : undefined
  const hasReel = useFileExists(SHOWREEL_SRC)

  if (hasReel !== true) return null

  return (
    <section id="showreel" className="section">
      <div className="container">
        <Reveal className="section-head">
          <p className="eyebrow">{t('showreel.eyebrow')}</p>
          <h2 className="section-title">{t('showreel.title')}</h2>
          <p className="section-sub">{t('showreel.subtitle')}</p>
        </Reveal>

        <Reveal delay={120} className="stage-wrap">
          <div className="stage" style={ratioStyle}>
            <div className="stage__plate" aria-hidden="true" />
            <SmartVideo
              ref={videoRef}
              src={SHOWREEL_SRC}
              className="stage__video"
              muted
              loop
              fallback={
                <div className="stage__placeholder">
                  <span className="stage__play" aria-hidden="true">
                    <IconPlay size={22} />
                  </span>
                  <span className="stage__hint">{t('showreel.placeholder')}</span>
                </div>
              }
            />
          </div>
        </Reveal>
      </div>
    </section>
  )
}