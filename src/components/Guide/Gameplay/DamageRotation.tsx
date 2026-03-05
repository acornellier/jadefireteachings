import { OrderedList } from '../../Common/OrderedList.tsx'
import {
  BlackoutKick,
  CelestialConduit,
  JadefireStomp,
  RisingSunKick,
  SecretInfusion,
  SpinningCraneKick,
  TeachingsOfTheMonastery,
  ThunderFocusTea,
  TigerPalm,
} from '../../Common/WowheadLink/Spells.tsx'
import { SubSection } from '../SubSection.tsx'
import { Button } from '../../Common/Button.tsx'
import { useLocalStorage } from '../../../util/hooks/useLocalStorage.ts'

export const damageRotationTitle = 'Damage rotation'

export function DamageRotation() {
  const [heroTalents, setHeroTalents] = useLocalStorage<'conduit' | 'moh'>('conduit', 'conduit')
  const isConduit = heroTalents === 'conduit'

  return (
    <SubSection title={damageRotationTitle}>
      <p>
        This is purely for optimal <b>damage</b> and not for optimal healing!
      </p>
      <div className="flex gap-2">
        <Button
          twoDimensional={isConduit}
          color={isConduit ? 'yellow' : 'teal'}
          onClick={() => setHeroTalents('conduit')}
        >
          Conduit of the Celestials
        </Button>
        <Button
          twoDimensional={!isConduit}
          color={!isConduit ? 'yellow' : 'teal'}
          onClick={() => setHeroTalents('moh')}
        >
          Master of Harmony
        </Button>
      </div>
      <OrderedList>
        <li>
          <ThunderFocusTea />{' '}
          {isConduit ? 'on cooldown' : 'at max charges, or when vitality is full'}
        </li>
        <li>
          <RisingSunKick /> with <ThunderFocusTea /> if running <SecretInfusion />
        </li>
        {isConduit && (
          <li>
            <CelestialConduit />
          </li>
        )}
        <li>
          <SpinningCraneKick /> at 4+ targets. See note above.
        </li>
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
    </SubSection>
  )
}
