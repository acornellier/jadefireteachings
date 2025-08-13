import { Section } from '../Section.tsx'
import {
  AwakenedJadefire,
  ChiHarmony,
  JadeEmpowerment,
  MendingProliferation,
  Revival,
  SheilunsGift,
  SpinningCraneKick,
  TigerPalm,
  Vivify,
} from '../../Common/WowheadLink/Spells.tsx'
import { ConduitOfTheCelestials, MasterOfHarmony } from '../../Common/SpecialTexts.tsx'
import { Link } from '../../Common/Link.tsx'

export function PatchChanges() {
  return (
    <Section title="11.2 Changes">
      <p>
        Mistweaver has received a few changes in 11.2, but its gameplay remains largely the same and
        the talent build remains unchanged. See the <Link href="#Spec tree">talent section</Link>{' '}
        for more details.
      </p>
      <p>
        <Vivify /> was buffed by 80%, while <ChiHarmony /> was nerfed by 50%. This is overall a
        nerf, has little impact on gameplay, and we almost certainly still run <ChiHarmony />. Your
        spot-healing is stronger now, but <Vivify /> is still pretty weak without healing amps.
      </p>
      <p>
        <SheilunsGift /> was buffed by 20%, which is sadly not much. I continue to play around{' '}
        <JadeEmpowerment /> and <MendingProliferation />, but some healing patterns will possibly
        favor the <SheilunsGift /> groupwide heal.
      </p>
      <p>
        <AwakenedJadefire />, which is the healing from <SpinningCraneKick />, is now affected by
        healing amps, which is a pretty decent buff to <SpinningCraneKick /> healing!
      </p>
      <p>
        <Revival /> got buffed by 100%, making it an extremely powerful group wide heal.
      </p>
      <p>
        <ConduitOfTheCelestials /> tier set is weaker than <MasterOfHarmony /> tier set, so we are
        likely running <MasterOfHarmony /> in every dungeon. The tier set might encourage us to play
        around the <TigerPalm /> charges, I will update the guide when I figure it out!
      </p>
    </Section>
  )
}
