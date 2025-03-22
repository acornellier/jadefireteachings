import { Section, type SectionProps } from '../Guide/Section.tsx'
import { ConduitOfTheCelestials, MasterOfHarmony } from '../Common/SpecialTexts.tsx'
import type { FC } from 'react'
import { Link } from '../Common/Link.tsx'

interface Props extends SectionProps {
  tree?: 'conduit' | 'moh'
  video?: string
  Talents?: FC[]
  RecommendedTalents?: FC[]
}

export function DungeonSection({
  title,
  children,
  tree,
  video,
  Talents,
  RecommendedTalents,
}: Props) {
  return (
    <Section title={title}>
      <p>
        <Link href={video}>Watch a video of me running this dungeon</Link>
      </p>
      {tree && (
        <p>
          Recommended hero tree:{' '}
          {tree === 'conduit' ? (
            <ConduitOfTheCelestials />
          ) : tree === 'moh' ? (
            <MasterOfHarmony />
          ) : null}
        </p>
      )}
      {Talents && (
        <p className="flex gap-2">
          Required talents:{' '}
          {Talents.map((Talent) => (
            <Talent key={Talent.displayName} />
          ))}
        </p>
      )}
      {RecommendedTalents && (
        <p className="flex gap-2">
          Recommended talents:{' '}
          {RecommendedTalents.map((Talent) => (
            <Talent key={Talent.displayName} />
          ))}
        </p>
      )}
      {children}
    </Section>
  )
}
