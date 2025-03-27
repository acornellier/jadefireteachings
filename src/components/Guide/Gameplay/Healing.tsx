import { SpotHealing } from './SpotHealing.tsx'
import { GeneralGameplay } from './GeneralGameplay.tsx'
import { Conduit } from './Conduit.tsx'
import { MasterOfHarmony } from './MasterOfHarmony.tsx'
import { Section } from '../Section.tsx'
import { HeavyHealing } from './HeavyHealing.tsx'
import { Ramping } from './Ramping.tsx'

export const healingLabel = 'Healing'

export function Healing() {
  return (
    <Section title={healingLabel}>
      <GeneralGameplay />
      <HeavyHealing />
      <SpotHealing />
      <Ramping />
      <Conduit />
      <MasterOfHarmony />
    </Section>
  )
}
