import { SpotHealing } from './SpotHealing.tsx'
import { GeneralGameplay } from './GeneralGameplay.tsx'
import { Conduit } from './Conduit.tsx'
import { MasterOfHarmonyHealing } from './MasterOfHarmonyHealing.tsx'
import { Section } from '../Section.tsx'
import { HealingCooldowns } from './HealingCooldowns.tsx'

export const healingLabel = 'Healing'

export function Healing() {
  return (
    <Section title={healingLabel}>
      <GeneralGameplay />
      <HealingCooldowns />
      <SpotHealing />
      <Conduit />
      <MasterOfHarmonyHealing />
    </Section>
  )
}
