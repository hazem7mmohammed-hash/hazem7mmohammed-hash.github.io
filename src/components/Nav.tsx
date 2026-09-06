import { useEffect, useState } from 'react'
import { PROFILE, PROJECT_VIDEOS } from '../content'
import { useAnyFileExists } from '../hooks'
import { useI18n } from '../i18n'
import { IconClose } from './icons'

const LINKS = [
  { key: 'nav.work', href: '#work' },
  { key: 'nav.recent', href: '#recent' },
  { key: 'nav.about', href: '#about' },
  { key: 'nav.skills', href: '#skills' },
  { key: 'nav.experience', href: '#experience' },
  { key: 'nav.contact', href: '#contact' },
] as const

export function LangToggle({ className = '' }: { className?: string }) {
  const { lang, setLang } = useI18n()
  return (
    <button
      type="button"
      className={`lang-toggle ${className}`}
      onClick={() => setLang(lang === 'en' ? 'ar' : 'en')}
      aria-label={lang === 'en' ? 'التبديل إلى العربية' : 'Switch to English'}
    >
      {lang === 'en' ? 'عربي' : 'EN'}
    </button>
  )
}

export function Nav() {
  const { t } = useI18n()
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const hasWork = useAnyFileExists(PROJECT_VIDEOS)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = hasWork === true ? LINKS : LINKS.filter((link) => link.key !== 'nav.work')

  return (
    <header className={`nav ${scrolled ? 'nav--scrolled' : ''}`}>
      <div className="nav__inner">
        <a href="#hero" className="nav__brand" onClick={() => setOpen(false)}>
          {PROFILE.name}
        </a>

        <ul className={`nav__links ${open ? 'nav__links--open' : ''}`}>
          {links.map((link) => (
            <li key={link.key}>
              <a href={link.href} onClick={() => setOpen(false)}>
                {t(link.key)}
              </a>
            </li>
          ))}
        </ul>

        <div className="nav__actions">
          <LangToggle />
          <a href="#contact" className="btn btn--primary btn--sm nav__cta">
            {t('nav.contact')}
          </a>
          <button
            type="button"
            className="nav__burger"
            aria-expanded={open}
            aria-label="Menu"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <IconClose size={20} /> : <span className="nav__burger-bars" aria-hidden="true" />}
          </button>
        </div>
      </div>
    </header>
  )
}