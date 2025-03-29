import { SubSection } from '../SubSection.tsx'
import {
  Coalescence,
  SpinningCraneKick,
  ThunderFocusTea,
} from '../../Common/WowheadLink/Spells.tsx'
import { Link } from '../../Common/Link.tsx'

export function MasterOfHarmony() {
  return (
    <SubSection title="Master of Harmony">
      <p>
        Whenever there is healing to do, pop your <ThunderFocusTea />. Any allies healed by you will
        now receive a 20% healing buff from <Coalescence /> for 10-15 seconds. That{"'"}s basically
        all there is to healing with this tree, honestly. Time your <ThunderFocusTea /> with moments
        of heavy healing.
      </p>
      <p>
        If there is little healing to do, use <ThunderFocusTea /> whenever your vitality bar is full
        for damage. Remember the damage is a dot, so do not waste it on low health enemies. Use{' '}
        <Link href="https://wago.io/H-BqbpSOt">this weakaura</Link> to track your vitality.
      </p>
      <p>
        Note that <SpinningCraneKick /> does not generate vitality, and so you should be hesitant to
        use this spell, unless there are very many mobs. Stick to your standard melee rotation to be
        safe.
      </p>
    </SubSection>
  )
}
