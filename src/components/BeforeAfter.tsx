import { BEFORE_AFTERS, BA_VIDEOS } from '../content'
import { useExistingVideos } from '../hooks'
import { useI18n } from '../i18n'
import { Reveal } from './Reveal'
import { VideoCard } from './VideoCard'

export function BeforeAfter() {
  const { t } = useI18n()
  const flags = useExistingVideos(BA_VIDEOS)

  const clips = BEFORE_AFTERS.filter((_, i) => flags?.[i])
  if (!flags || clips.length === 0) return null

  return (
    <section id="before-after" className="section section--muted">
      <div className="container">
        <Reveal className="section-head">
          <p className="eyebrow">{t('ba.eyebrow')}</p>
          <h2 className="section-title">{t('ba.title')}</h2>
          <p className="section-sub">{t('ba.subtitle')}</p>
        </Reveal>

        <div className="grid grid--3slot">
          {clips.map((clip, i) => (
            <VideoCard key={clip.id} video={clip} index={i} tag={t('ba.tag')} />
          ))}
        </div>
      </div>
    </section>
  )
}