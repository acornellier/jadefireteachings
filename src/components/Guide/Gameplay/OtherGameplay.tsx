import { Section } from '../Section.tsx'
import { DamageRotation } from './DamageRotation.tsx'
import { Utility } from './Utility.tsx'
import { Defensives } from './Defensives.tsx'

export const damageAndUtilityTitle = 'Damage and Utility'

export function OtherGameplay() {
  return (
    <Section title={damageAndUtilityTitle}>
      <DamageRotation />
      <Defensives />
      <Utility />
    </Section>
  )
}
