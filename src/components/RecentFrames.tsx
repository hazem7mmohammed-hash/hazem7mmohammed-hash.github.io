import { FRAMES, FRAME_VIDEOS } from '../content'
import { useExistingVideos } from '../hooks'
import { useI18n } from '../i18n'
import { Reveal } from './Reveal'
import { VideoCard } from './VideoCard'

export function RecentFrames() {
  const { t } = useI18n()
  const flags = useExistingVideos(FRAME_VIDEOS)

  const frames = FRAMES.filter((_, i) => flags?.[i])
  if (!flags || frames.length === 0) return null

  return (
    <section id="recent" className="section">
      <div className="container">
        <Reveal className="section-head">
          <p className="eyebrow">{t('recent.eyebrow')}</p>
          <h2 className="section-title">{t('recent.title')}</h2>
          <p className="section-sub">{t('recent.subtitle')}</p>
        </Reveal>

        <div className="grid">
          {frames.map((frame, i) => (
            <VideoCard key={frame.id} video={frame} index={i} tag={t('recent.tag')} />
          ))}
        </div>
      </div>
    </section>
  )
}