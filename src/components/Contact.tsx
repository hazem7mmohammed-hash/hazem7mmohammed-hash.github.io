import { PROFILE } from '../content'
import { useI18n } from '../i18n'
import { Reveal } from './Reveal'
import {
  IconInstagram,
  IconLinkedin,
  IconMail,
  IconWhatsapp,
  IconX,
  IconYoutube,
} from './icons'

const SOCIALS = [
  { name: 'YouTube', href: PROFILE.socials.youtube, Icon: IconYoutube },
  { name: 'Instagram', href: PROFILE.socials.instagram, Icon: IconInstagram },
  { name: 'LinkedIn', href: PROFILE.socials.linkedin, Icon: IconLinkedin },
  { name: 'WhatsApp', href: PROFILE.socials.whatsapp, Icon: IconWhatsapp },
  { name: 'X', href: PROFILE.socials.x, Icon: IconX },
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
            <a href={`mailto:${PROFILE.email}`} className="btn btn--primary btn--lg">
              <IconMail size={18} />
              {PROFILE.email}
            </a>
            <p className="contact__hint">{t('contact.emailMe')}</p>
            <p className="contact__response">{t('contact.response')}</p>
          </div>

          <div className="socials">
            {SOCIALS.map(({ name, href, Icon }) => (
              <a key={name} href={href} target="_blank" rel="noreferrer" className="social" aria-label={name}>
                <Icon size={18} />
              </a>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}