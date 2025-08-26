import { Section } from '../Section.tsx'
import {
  AwakenedJadefire,
  ChiHarmony,
  JadeEmpowerment,
  MendingProliferation,
  Revival,
  RisingSunKick,
  SheilunsGift,
  SpinningCraneKick,
  VivaciousVivification,
  Vivify,
} from '../../Common/WowheadLink/Spells.tsx'
import { Link } from '../../Common/Link.tsx'

export function PatchChanges() {
  return (
    <Section title="11.2 Changes">
      <p>
        Mistweaver has received a few changes in 11.2, but its gameplay remains largely the same and
        the talent build remains unchanged. The tier sets however, are quite powerful and have a
        large impact on gameplay. See the <Link href="#Talents">talent section</Link> for more
        details.
      </p>
      <p>
        <Vivify /> was buffed by 80%, while <ChiHarmony /> was nerfed by 50%, and{' '}
        <VivaciousVivification /> is now triggered by <RisingSunKick />. This is overall a nerf and
        we still run <ChiHarmony />. Your spot-healing is much stronger now, and you can weave in{' '}
        <Vivify /> after a <RisingSunKick /> in certain scenarios.
      </p>
      <p>
        <AwakenedJadefire />, which is the healing from <SpinningCraneKick />, is now affected by
        healing amps, which is a pretty decent buff to <SpinningCraneKick /> healing!
      </p>
      <p>
        <Revival /> got buffed by 100%, making it an extremely powerful group wide heal.
      </p>
      <p>
        <SheilunsGift /> was buffed by 20%, which is sadly not much. I continue to play around{' '}
        <JadeEmpowerment /> and <MendingProliferation />.
      </p>
    </Section>
  )
}
