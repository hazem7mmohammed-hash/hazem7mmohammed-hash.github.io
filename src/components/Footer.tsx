import { PROFILE } from '../content'
import { useI18n } from '../i18n'
import { IconArrowUp } from './icons'

export function Footer() {
  const { t } = useI18n()
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container footer__inner">
        <p className="footer__copy">
          © {year} {PROFILE.name}. {t('footer.rights')}
        </p>
        <p className="footer__built">{t('footer.built')}</p>
        <a href="#hero" className="footer__top">
          {t('footer.top')}
          <IconArrowUp size={15} />
        </a>
      </div>
    </footer>
  )
}