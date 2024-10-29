import { SubSection } from '../SubSection.tsx'
import {
  Coalescence,
  DanceOfChiJi,
  OverwhelmingForce,
  SpinningCraneKick,
  ThunderFocusTea,
} from '../../Common/WowheadLink/Abilities.tsx'
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
        Note that <OverwhelmingForce /> and <SpinningCraneKick /> not generating or draining
        vitality means that you should rarely use <SpinningCraneKick />, unless there are very many
        mobs, or on a <DanceOfChiJi /> proc.
      </p>
      <p>
        Use <Link href="https://wago.io/H-BqbpSOt">this weakaura</Link> to track vitality.
      </p>
      <p>
        Buff ID to track for tracking <Coalescence />: 450769
      </p>
    </SubSection>
  )
}
