import { OrderedList } from '../../Common/OrderedList.tsx'
import {
  BlackoutKick,
  CelestialConduit,
  ChiBurst,
  CracklingJadeLightning,
  DanceOfChiJi,
  JadeEmpowerment,
  JadefireStomp,
  RisingSunKick,
  SecretInfusion,
  SpinningCraneKick,
  TeachingsOfTheMonastery,
  ThunderFocusTea,
  TigerPalm,
} from '../../Common/WowheadLink/Abilities.tsx'
import { UnorderedList } from '../../Common/UnorderedList.tsx'
import { SubSection } from '../SubSection.tsx'

export function DamageRotation() {
  return (
    <SubSection title="Damage rotation">
      <p>
        This is purely for optimal <b>damage</b> and not for optimal healing!
      </p>
      <OrderedList>
        <li>
          <ChiBurst /> at 2+ targets or if running Master of Harmony
        </li>
        <li>
          <ThunderFocusTea /> + <RisingSunKick /> if running <SecretInfusion />
        </li>
        <li>
          <ThunderFocusTea /> + <CracklingJadeLightning /> if running <JadeEmpowerment />
        </li>
        <li>
          <SpinningCraneKick />
        </li>
        <UnorderedList className="ml-6">
          <li>
            On a <DanceOfChiJi /> Proc
          </li>
          <li>At 4+ targets with Conduit</li>
          <li>
            At 6+ targets with Master of Harmony. Keep in mind it doesn’t generate or drain
            vitality, and so is generally not advised unless there are many, many targets.
          </li>
        </UnorderedList>
        <li>
          <RisingSunKick />
        </li>
        <li>
          <BlackoutKick /> at 3-4 stacks of <TeachingsOfTheMonastery />
        </li>
        <li>
          <TigerPalm />
        </li>
      </OrderedList>
      <p>
        <JadefireStomp /> is a damage increase over <SpinningCraneKick /> at 4-10 targets, but its
        targeting is pretty buggy.
      </p>
      <p>
        <CelestialConduit /> is technically a slight damage increase of highest priority at all
        group sizes, but you should almost always save it for healing.
      </p>
    </SubSection>
  )
}
