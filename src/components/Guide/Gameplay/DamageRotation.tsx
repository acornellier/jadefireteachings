import { OrderedList } from '../../Common/OrderedList.tsx'
import {
  BlackoutKick,
  CelestialConduit,
  ChiBurst,
  CracklingJadeLightning,
  JadeEmpowerment,
  JadefireStomp,
  RisingSunKick,
  SecretInfusion,
  SpinningCraneKick,
  TeachingsOfTheMonastery,
  ThunderFocusTea,
  TigerPalm,
} from '../../Common/WowheadLink/Spells.tsx'
import { UnorderedList } from '../../Common/UnorderedList.tsx'
import { SubSection } from '../SubSection.tsx'
import { ConduitOfTheCelestials, MasterOfHarmony } from '../../Common/SpecialTexts.tsx'

export function DamageRotation() {
  return (
    <SubSection title="Damage rotation">
      <p>
        This is purely for optimal <b>damage</b> and not for optimal healing!
      </p>
      <OrderedList>
        <li>
          <ChiBurst /> at 2+ targets or if running <MasterOfHarmony />
        </li>
        <li>
          <ThunderFocusTea /> to get it on cooldown
        </li>
        <li>
          <RisingSunKick /> with <ThunderFocusTea /> if running <SecretInfusion />
        </li>
        <li>
          <CracklingJadeLightning /> with <JadeEmpowerment />
        </li>
        <li>
          <SpinningCraneKick />
        </li>
        <UnorderedList indent>
          <li>
            At 4+ targets with <ConduitOfTheCelestials />
          </li>
          <li>
            Never with <MasterOfHarmony />.
          </li>
          {/*<li>*/}
          {/*  On a <DanceOfChiJi /> Proc*/}
          {/*</li>*/}
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
