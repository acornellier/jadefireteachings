import { SpotHealing } from './SpotHealing.tsx'
import { GeneralGameplay } from './GeneralGameplay.tsx'
import { Conduit } from './Conduit.tsx'
import { MasterOfHarmony } from './MasterOfHarmony.tsx'
import { Section } from '../Section.tsx'
import { HealingCooldowns } from './HealingCooldowns.tsx'
import { Ramping } from './Ramping.tsx'

export const healingLabel = 'Healing'

export function Healing() {
  return (
    <Section title={healingLabel}>
      <GeneralGameplay />
      <HealingCooldowns />
      <SpotHealing />
      <Ramping />
      <Conduit />
      <MasterOfHarmony />
    </Section>
  )
}
