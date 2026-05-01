import { SpotHealing } from './SpotHealing.tsx'
import { GeneralGameplay } from './GeneralGameplay.tsx'
import { Conduit } from './Conduit.tsx'
import { MasterOfHarmonyHealing } from './MasterOfHarmonyHealing.tsx'
import { Section } from '../Section.tsx'

export const healingLabel = 'Healing'

export function Healing() {
  return (
    <Section title={healingLabel}>
      <GeneralGameplay />
      <SpotHealing />
      <Conduit />
      <MasterOfHarmonyHealing />
    </Section>
  )
}
