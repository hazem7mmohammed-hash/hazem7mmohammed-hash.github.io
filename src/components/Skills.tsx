import { SKILL_GROUPS, translate } from '../content'
import type { Skill } from '../types'
import { useI18n } from '../i18n'
import { Reveal } from './Reveal'

function SkillBar({ skill }: { skill: Skill }) {
  return (
    <li className="skill">
      <div className="skill__head">
        <span className="skill__name">{skill.name}</span>
        <span className="skill__level">{skill.level}%</span>
      </div>
      <div className="skill__track" aria-hidden="true">
        <span className="skill__fill" style={{ width: `${skill.level}%` }} />
      </div>
    </li>
  )
}

export function Skills() {
  const { t, lang } = useI18n()

  return (
    <section id="skills" className="section section--muted">
      <div className="container">
        <Reveal className="section-head">
          <p className="eyebrow">{t('skills.eyebrow')}</p>
          <h2 className="section-title">{t('skills.title')}</h2>
          <p className="section-sub">{t('skills.subtitle')}</p>
        </Reveal>

        <div className="skill-grid">
          {SKILL_GROUPS.map((group, gi) => (
            <Reveal key={group.id} delay={gi * 90} className="skill-card">
              <h3 className="skill-card__title">{translate(group.label, lang)}</h3>
              <ul className="skill-card__list">
                {group.items.map((skill) => (
                  <SkillBar key={skill.name} skill={skill} />
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}