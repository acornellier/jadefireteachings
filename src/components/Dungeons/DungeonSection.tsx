import { Section, type SectionProps } from '../Guide/Section.tsx'
import type { ReactNode } from 'react'
import { ConduitOfTheCelestials, MasterOfHarmony } from '../Common/SpecialTexts.tsx'

interface Props extends SectionProps {
  tree: 'conduit' | 'moh'
  talents: ReactNode
}

export function DungeonSection({ title, children, tree, talents }: Props) {
  return (
    <Section title={title}>
      <p>
        Recommended hero tree:{' '}
        {tree === 'conduit' ? <ConduitOfTheCelestials /> : <MasterOfHarmony />}
      </p>
      <p>Talents: {talents}</p>
      {children}
    </Section>
  )
}
