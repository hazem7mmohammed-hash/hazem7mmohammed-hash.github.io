import { useMemo, useRef, useState } from 'react'
import { PROJECTS, translate, PROJECT_VIDEOS } from '../content'
import type { Project, ProjectCategory } from '../types'
import { useI18n } from '../i18n'
import { useExistingVideos, useVideoRatio } from '../hooks'
import { Reveal } from './Reveal'
import { SmartVideo } from './SmartVideo'
import { ProjectModal } from './ProjectModal'

type Filter = 'all' | ProjectCategory

const FILTERS: Filter[] = ['all', 'commercials', 'music', 'social', 'docs']

interface VideoCardProps {
  project: Project
  index: number
  onOpen: (project: Project) => void
}

function VideoCard({ project, index, onOpen }: VideoCardProps) {
  const { lang, t } = useI18n()
  const videoRef = useRef<HTMLVideoElement>(null)
  const ratio = useVideoRatio(videoRef)
  const ratioStyle = ratio != null && ratio < 1 ? { aspectRatio: String(ratio) } : undefined

  return (
    <Reveal delay={(index % 3) * 90} className="card">
      <button
        type="button"
        className="card__media"
        style={ratioStyle}
        onClick={() => onOpen(project)}
        aria-label={translate(project.title, lang)}
      >
        <span className="card__cover" aria-hidden="true">
          <span className="card__cover-num">0{index + 1}</span>
        </span>
        <SmartVideo
          ref={videoRef}
          src={project.src}
          poster={project.poster}
          className="card__video"
          muted
          loop
          interactive={false}
        />
        <span className="card__duration">{project.duration}</span>
      </button>

      <div className="card__body">
        <div>
          <p className="card__category">{t(`filters.${project.category}`)}</p>
          <h3 className="card__title">{translate(project.title, lang)}</h3>
        </div>
        <span className="card__year">{project.year}</span>
      </div>
    </Reveal>
  )
}

export function Portfolio() {
  const { t } = useI18n()
  const [filter, setFilter] = useState<Filter>('all')
  const [active, setActive] = useState<Project | null>(null)
  const flags = useExistingVideos(PROJECT_VIDEOS)

  const projects = useMemo(() => {
    const available = PROJECTS.filter((_, i) => flags?.[i])
    return filter === 'all' ? available : available.filter((p) => p.category === filter)
  }, [filter, flags])

  if (!flags || projects.length === 0) return null

  return (
    <section id="work" className="section">
      <div className="container">
        <Reveal className="section-head">
          <p className="eyebrow">{t('work.eyebrow')}</p>
          <h2 className="section-title">{t('work.title')}</h2>
          <p className="section-sub">{t('work.subtitle')}</p>
        </Reveal>

        <Reveal delay={80}>
          <div className="filters" role="group" aria-label={t('work.title')}>
            {FILTERS.map((f) => (
              <button
                key={f}
                type="button"
                className={`filter ${filter === f ? 'filter--active' : ''}`}
                onClick={() => setFilter(f)}
              >
                {t(`filters.${f}`)}
              </button>
            ))}
          </div>
        </Reveal>

        <div className="grid">
          {projects.map((project, i) => (
            <VideoCard key={project.id} project={project} index={i} onOpen={setActive} />
          ))}
        </div>
      </div>

      {active && <ProjectModal project={active} onClose={() => setActive(null)} />}
    </section>
  )
}