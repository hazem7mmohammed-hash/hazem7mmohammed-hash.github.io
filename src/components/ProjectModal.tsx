import { useEffect, useRef } from 'react'
import { translate } from '../content'
import type { Project } from '../types'
import { useI18n } from '../i18n'
import { useLockBody, useVideoRatio } from '../hooks'
import { useVideoRoom } from '../videoroom'
import { SmartVideo } from './SmartVideo'
import { IconClose } from './icons'

interface ProjectModalProps {
  project: Project
  onClose: () => void
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  const { t, lang } = useI18n()
  const videoRef = useRef<HTMLVideoElement>(null)
  const ratio = useVideoRatio(videoRef)
  useLockBody(true)
  useVideoRoom(true, videoRef)

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [onClose])

  return (
    <div className="modal" role="dialog" aria-modal="true" aria-label={translate(project.title, lang)} onClick={onClose}>
      <div className="modal__panel" onClick={(e) => e.stopPropagation()}>
        <button type="button" className="modal__close" onClick={onClose} autoFocus>
          <IconClose />
          <span>{t('modal.close')}</span>
        </button>

        <div className="modal__stage" style={ratio != null && ratio < 1 ? { aspectRatio: String(ratio) } : undefined}>
          <SmartVideo
            ref={videoRef}
            src={project.src}
            poster={project.poster}
            className="modal__video"
            muted={false}
            loop
            controls
            fallback={<div className="modal__placeholder">{t('work.noVideo')}</div>}
          />
        </div>

        <div className="modal__body">
          <div className="modal__head">
            <h3 className="modal__title">{translate(project.title, lang)}</h3>
            <p className="modal__desc">{translate(project.description, lang)}</p>
          </div>

          <dl className="modal__meta">
            <div>
              <dt>{t('work.year')}</dt>
              <dd>{project.year}</dd>
            </div>
            <div>
              <dt>{t('work.duration')}</dt>
              <dd>{project.duration}</dd>
            </div>
          </dl>

          <div className="modal__tools">
            <span className="modal__tools-label">{t('work.tools')}</span>
            <div className="chip-row">
              {project.tools.map((tool) => (
                <span key={tool} className="chip">
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}