import { Section, type SectionProps } from '../Guide/Section.tsx'
import { ConduitOfTheCelestials, MasterOfHarmony } from '../Common/SpecialTexts.tsx'
import type { FC } from 'react'

interface Props extends SectionProps {
  tree: 'conduit' | 'moh' | 'either'
  Talents?: FC[]
}

export function DungeonSection({ title, children, tree, Talents }: Props) {
  return (
    <Section title={title}>
      <p>
        Recommended hero tree:{' '}
        {tree === 'either' ? (
          <span>
            <ConduitOfTheCelestials /> or <MasterOfHarmony />
          </span>
        ) : tree === 'conduit' ? (
          <ConduitOfTheCelestials />
        ) : (
          <MasterOfHarmony />
        )}
      </p>
      {Talents && (
        <p className="flex gap-2">
          Talents:{' '}
          {Talents.map((Talent) => (
            <Talent key={Talent.name} />
          ))}
        </p>
      )}
      {children}
    </Section>
  )
}
