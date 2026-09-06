import { SFX_CLIPS, SFX_VIDEOS } from '../content'
import { useExistingVideos } from '../hooks'
import { useI18n } from '../i18n'
import { Reveal } from './Reveal'
import { VideoCard } from './VideoCard'

export function Sfx() {
  const { t } = useI18n()
  const flags = useExistingVideos(SFX_VIDEOS)

  const clips = SFX_CLIPS.filter((_, i) => flags?.[i])
  if (!flags || clips.length === 0) return null

  return (
    <section id="sfx" className="section">
      <div className="container">
        <Reveal className="section-head">
          <p className="eyebrow">{t('sfx.eyebrow')}</p>
          <h2 className="section-title">{t('sfx.title')}</h2>
          <p className="section-sub">{t('sfx.subtitle')}</p>
        </Reveal>

        <div className="grid grid--3slot">
          {clips.map((clip, i) => (
            <VideoCard key={clip.id} video={clip} index={i} tag={t('sfx.tag')} />
          ))}
        </div>
      </div>
    </section>
  )
}