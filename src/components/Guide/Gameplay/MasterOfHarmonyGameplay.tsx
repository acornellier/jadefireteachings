import { SubSection } from '../SubSection.tsx'
import {
  Coalescence,
  OverwhelmingForce,
  SpinningCraneKick,
  ThunderFocusTea,
} from '../../Common/WowheadLink/Spells.tsx'
import { Link } from '../../Common/Link.tsx'

export function MasterOfHarmonyGameplay() {
  return (
    <SubSection title="Master of Harmony gameplay">
      <p>
        Whenever there is healing to do, pop your <ThunderFocusTea />. Any allies healed by you will
        now receive a 20% healing buff from <Coalescence /> for 10-15 seconds. Overhealing will not
        give this buff! This is basically your only healing increase from the tree.
      </p>
      <p>
        If there is little healing to do, use <ThunderFocusTea /> whenever your vitality bar is full
        for damage. Remember the damage is a dot, so do not waste it on low health enemies. Use{' '}
        <Link href="https://wago.io/H-BqbpSOt">this weakaura</Link> to track your vitality.
      </p>
      <p>
        Note that <OverwhelmingForce /> and <SpinningCraneKick /> not generating or draining
        vitality means that you should rarely use <SpinningCraneKick />, unless there are very many
        mobs. Stick to your standard melee rotation.
      </p>
    </SubSection>
  )
}
