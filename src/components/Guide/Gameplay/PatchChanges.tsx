import { Section } from '../Section.tsx'
import {
  ChiHarmony,
  JadeEmpowerment,
  LegacyOfWisdom,
  MendingProliferation,
  SheilunsGift,
  TigerPalm,
  Vivify,
} from '../../Common/WowheadLink/Spells.tsx'
import { ConduitOfTheCelestials, MasterOfHarmony } from '../../Common/SpecialTexts.tsx'

export function PatchChanges() {
  return (
    <Section title="11.2 Changes">
      <p>
        Mistweaver has received very few changes in 11.2, and its gameplay remains largely the same.
        The talent build remains unchanged, although we might return to <LegacyOfWisdom /> instead
        of <MendingProliferation />.
      </p>
      <p>
        <Vivify /> was buffed by 80%, while <ChiHarmony /> was nerfed by 50%. This is overall a
        nerf, has little impact on gameplay, and we almost certainly still run <ChiHarmony />. Your
        spot-healing is stronger now, but <Vivify /> is still pretty weak without healing amps.
      </p>
      <p>
        <SheilunsGift /> was buffed by 20%, which is sadly not much. We continue to play around{' '}
        <JadeEmpowerment /> and probably <MendingProliferation />, but some healing patterns will
        possibly favor the <SheilunsGift /> groupwide heal.
      </p>
      <p>
        <ConduitOfTheCelestials /> tier set is weaker than <MasterOfHarmony /> tier set, so we are
        likely running <MasterOfHarmony /> in every dungeon. The tier set might encourage us to play
        around the <TigerPalm /> charges, I will update the guide when I figure it out!
      </p>
    </Section>
  )
}
