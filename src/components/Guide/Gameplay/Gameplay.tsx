import { SpotHealing } from './SpotHealing.tsx'
import { GeneralGameplay } from './GeneralGameplay.tsx'
import { ConduitGameplay } from './ConduitGameplay.tsx'
import { MasterOfHarmonyGameplay } from './MasterOfHarmonyGameplay.tsx'
import { Section } from '../Section.tsx'
import { DamageRotation } from './DamageRotation.tsx'
import { AoeHealing } from './AoeHealing.tsx'
import { Utility } from './Utility.tsx'
import { Defensives } from './Defensives.tsx'
import { Ramping } from './Ramping.tsx'

export const gameplayLabel = 'Gameplay'

export function Gameplay() {
  return (
    <Section title={gameplayLabel}>
      <GeneralGameplay />
      <SpotHealing />
      <AoeHealing />
      <Ramping />
      <ConduitGameplay />
      <MasterOfHarmonyGameplay />
      <DamageRotation />
      <Defensives />
      <Utility />
    </Section>
  )
}
