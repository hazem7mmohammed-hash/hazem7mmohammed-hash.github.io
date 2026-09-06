import { PROFILE, translate } from '../content'
import { useI18n } from '../i18n'
import { Reveal } from './Reveal'

export function About() {
  const { t, lang } = useI18n()

  const facts = [
    { label: t('about.infoLocation'), value: translate(PROFILE.location, lang) },
    { label: t('about.infoLanguages'), value: t('about.infoLanguagesValue') },
    { label: t('about.infoGear'), value: t('about.infoGearValue') },
  ]

  return (
    <section id="about" className="section">
      <div className="container">
        <Reveal className="section-head">
          <p className="eyebrow">{t('about.eyebrow')}</p>
          <h2 className="section-title">{t('about.title')}</h2>
        </Reveal>

        <div className="about">
          <Reveal className="about__text">
            <p className="about__p">{t('about.p1')}</p>
            <p className="about__p">{t('about.p2')}</p>
          </Reveal>

          <Reveal delay={140} className="about__facts">
            <h3 className="about__facts-title">{t('about.infoTitle')}</h3>
            <ul className="about__facts-list">
              {facts.map((fact) => (
                <li key={fact.label} className="about__fact">
                  <span className="about__fact-label">{fact.label}</span>
                  <span className="about__fact-value">{fact.value}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  )
}