import { SpotHealing } from './SpotHealing.tsx'
import { GeneralGameplay } from './GeneralGameplay.tsx'
import { ConduitGameplay } from './ConduitGameplay.tsx'
import { MasterOfHarmonyGameplay } from './MasterOfHarmonyGameplay.tsx'
import { Section } from '../Section.tsx'
import { DamageRotation } from './DamageRotation.tsx'
import { AoeHealing } from './AoeHealing.tsx'

export const gameplayLabel = 'Gameplay'

export function Gameplay() {
  return (
    <Section title={gameplayLabel}>
      <GeneralGameplay />
      <SpotHealing />
      <AoeHealing />
      <ConduitGameplay />
      <MasterOfHarmonyGameplay />
      <DamageRotation />
    </Section>
  )
}
