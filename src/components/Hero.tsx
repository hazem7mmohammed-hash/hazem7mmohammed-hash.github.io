import { useState } from 'react'
import { PROFILE, HERO_STATS, translate, SHOWREEL_SRC, asset } from '../content'
import { useFileExists } from '../hooks'
import { useI18n } from '../i18n'
import { Reveal } from './Reveal'
import { IconPlay } from './icons'

function HeroPortrait() {
  const [phase, setPhase] = useState<'loading' | 'ready' | 'error'>('loading')
  if (phase === 'error') return null
  return (
    <div className={`hero__media${phase === 'ready' ? ' hero__media--ready' : ''}`}>
      <div className="hero__media-glow" aria-hidden="true" />
      <img
        className="hero__portrait"
        src={asset('portrait.png')}
        alt={PROFILE.name}
        loading="eager"
        onLoad={() => setPhase('ready')}
        onError={() => setPhase('error')}
      />
    </div>
  )
}

export function Hero() {
  const { t, lang } = useI18n()
  const stats = HERO_STATS.map((s) => ({ ...s, label: t(s.labelKey) }))
  const hasReel = useFileExists(SHOWREEL_SRC)

  return (
    <section id="hero" className="hero">
      <div className="hero__glow" aria-hidden="true" />
      <div className="hero__grid" aria-hidden="true" />

      <div className="hero__inner">
        <div className="hero__content">
          <Reveal>
            <p className="hero__badge">
              <span className="hero__dot" aria-hidden="true" />
              {t('hero.availability')}
            </p>
          </Reveal>

          <Reveal delay={80}>
            <h1 className="hero__title">
              <span className="hero__greeting">{t('hero.greeting')}</span>
              <span className="hero__name">{PROFILE.name}</span>
            </h1>
          </Reveal>

          <Reveal delay={160}>
            <p className="hero__role">{translate(PROFILE.role, lang)}</p>
          </Reveal>
        </div>

        <Reveal delay={200}>
          <HeroPortrait />
        </Reveal>

        <div className="hero__content">
          <Reveal delay={240}>
            <p className="hero__tagline">{t('hero.tagline')}</p>
          </Reveal>

          <Reveal delay={320}>
            <div className="hero__actions">
              {hasReel === true && (
                <a href="#showreel" className="btn btn--primary">
                  <IconPlay size={16} />
                  {t('hero.ctaReel')}
                </a>
              )}
              <a href="#contact" className="btn btn--ghost">
                {t('hero.ctaContact')}
              </a>
            </div>
          </Reveal>

          <Reveal delay={420}>
            <dl className="hero__stats">
              {stats.map((stat) => (
                <div key={stat.labelKey} className="hero__stat">
                  <dt className="hero__stat-value">{stat.value}</dt>
                  <dd className="hero__stat-label">{stat.label}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </div>
    </section>
  )
}