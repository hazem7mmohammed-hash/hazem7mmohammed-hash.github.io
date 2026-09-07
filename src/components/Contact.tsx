import { PROFILE, asset } from '../content'
import { useI18n } from '../i18n'
import { Reveal } from './Reveal'
import { IconDocument, IconInstagram, IconLinkedin, IconMail, IconWhatsapp } from './icons'

const SOCIALS = [
  { name: 'Email', href: `mailto:${PROFILE.email}`, Icon: IconMail, external: false },
  { name: 'Instagram', href: PROFILE.socials.instagram, Icon: IconInstagram, external: true },
  { name: 'LinkedIn', href: PROFILE.socials.linkedin, Icon: IconLinkedin, external: true },
  { name: 'WhatsApp', href: PROFILE.socials.whatsapp, Icon: IconWhatsapp, external: true },
]

export function Contact() {
  const { t } = useI18n()

  return (
    <section id="contact" className="section section--contact">
      <div className="container">
        <Reveal className="contact__inner">
          <div className="section-head section-head--center">
            <p className="eyebrow">{t('contact.eyebrow')}</p>
            <h2 className="section-title">{t('contact.title')}</h2>
            <p className="section-sub">{t('contact.subtitle')}</p>
          </div>

          <div className="contact__actions">
            <a
              href={PROFILE.socials.whatsapp}
              target="_blank"
              rel="noreferrer"
              className="btn btn--primary btn--lg"
            >
              <IconWhatsapp size={18} />
              {t('contact.whatsapp')}
            </a>
            <a href={asset('cv/Hazem_MohamedCV.pdf')} target="_blank" rel="noreferrer" className="btn btn--ghost btn--lg">
              <IconDocument size={18} />
              {t('contact.viewCv')}
            </a>
            <p className="contact__response">{t('contact.response')}</p>
          </div>

          <div className="socials">
            {SOCIALS.map(({ name, href, Icon, external }) => (
              <a
                key={name}
                href={href}
                target={external ? '_blank' : undefined}
                rel={external ? 'noreferrer' : undefined}
                className="social"
                aria-label={name}
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}