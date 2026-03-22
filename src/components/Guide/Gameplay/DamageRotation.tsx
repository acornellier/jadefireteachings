import { OrderedList } from '../../Common/OrderedList.tsx'
import {
  BlackoutKick,
  CelestialConduit,
  EmperorsElixir,
  JadefireStomp,
  MorningBreeze,
  RisingSunKick,
  SpinningCraneKick,
  TeachingsOfTheMonastery,
  ThunderFocusTea,
  TigerPalm,
} from '../../Common/WowheadLink/Spells.tsx'
import { SubSection } from '../SubSection.tsx'

export const damageRotationTitle = 'Damage rotation'

export function DamageRotation() {
  return (
    <SubSection title={damageRotationTitle}>
      <p>
        This is purely for optimal <b>damage</b> and not for optimal healing!
      </p>
      <OrderedList>
        <li>
          <ThunderFocusTea />. In single target, if running <MorningBreeze />, try to have{' '}
          <RisingSunKick /> on cooldown before using <ThunderFocusTea />.
        </li>
        <li>
          <RisingSunKick /> with <ThunderFocusTea /> if running <EmperorsElixir />
        </li>
        <li>
          <CelestialConduit />
        </li>
        <li>
          <SpinningCraneKick /> at 4+ targets.
        </li>
        <li>
          <RisingSunKick />
        </li>
        <li>
          <BlackoutKick /> at 4 stacks of <TeachingsOfTheMonastery />
        </li>
        <li>
          <TigerPalm />
        </li>
      </OrderedList>
    </SubSection>
  )
}
