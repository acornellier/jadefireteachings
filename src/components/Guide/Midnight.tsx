import { Section } from './Section.tsx'
import { Link } from '../Common/Link.tsx'

export function Midnight() {
  return (
    <Section title="Midnight">
      <p>
        Jadefire Teachings has been partially updated for Midnight. Some information is still
        missing, but what is here is up to date and accurate! I will be updating this site regularly
        after Mythic+ is released and get more concrete data on what the optimal build is.{' '}
      </p>
      <p>
        There were so many changes in Midnight that I will not try to summarize them here. Read
        through the guide, or skip to the <Link href="#Talents">Talents</Link> section for my
        recommended build.
      </p>
    </Section>
  )
}
