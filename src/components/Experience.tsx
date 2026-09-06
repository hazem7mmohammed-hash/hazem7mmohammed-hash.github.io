import { EXPERIENCE, translate } from '../content'
import { useI18n } from '../i18n'
import { Reveal } from './Reveal'

export function Experience() {
  const { t, lang } = useI18n()

  return (
    <section id="experience" className="section">
      <div className="container">
        <Reveal className="section-head">
          <p className="eyebrow">{t('experience.eyebrow')}</p>
          <h2 className="section-title">{t('experience.title')}</h2>
          <p className="section-sub">{t('experience.subtitle')}</p>
        </Reveal>

        <ol className="timeline">
          {EXPERIENCE.map((item, i) => (
            <li key={item.id} className="timeline__item">
              <span className="timeline__dot" aria-hidden="true" />
              <Reveal delay={i * 90} className="timeline__card">
                <div className="timeline__head">
                  <div>
                    <h3 className="timeline__role">{translate(item.role, lang)}</h3>
                    <p className="timeline__org">
                      {translate(item.org, lang)}
                      <span className="timeline__sep">·</span>
                      {translate(item.location, lang)}
                    </p>
                  </div>
                  <span className="timeline__period">{translate(item.period, lang)}</span>
                </div>
                <ul className="timeline__points">
                  {item.points.map((point) => (
                    <li key={translate(point, lang)}>{translate(point, lang)}</li>
                  ))}
                </ul>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}