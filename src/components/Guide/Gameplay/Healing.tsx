import { SpotHealing } from './SpotHealing.tsx'
import { GeneralGameplay } from './GeneralGameplay.tsx'
import { Conduit } from './Conduit.tsx'
import { MasterOfHarmonyHealing } from './MasterOfHarmonyHealing.tsx'
import { Section } from '../Section.tsx'
import { HealingCooldowns } from './HealingCooldowns.tsx'
import { Ramping } from './Ramping.tsx'
import { MendingProliferationGameplay } from './MendingProliferationGameplay.tsx'

export const healingLabel = 'Healing'

export function Healing() {
  return (
    <Section title={healingLabel}>
      <GeneralGameplay />
      <HealingCooldowns />
      <SpotHealing />
      <Ramping />
      <Conduit />
      <MasterOfHarmonyHealing />
      <MendingProliferationGameplay />
    </Section>
  )
}
