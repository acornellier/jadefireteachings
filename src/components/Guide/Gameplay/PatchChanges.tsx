import { Section } from '../Section.tsx'
import { SubSection } from '../SubSection.tsx'
import {
  BlackoutKick,
  CelestialConduit,
  ChiCocoon,
  ChiJi,
  DanceOfTheWind,
  EnvelopingMist,
  GiftOfTheCelestials,
  GustOfMists,
  JadeBond,
  JadeEmpowerment,
  JadefireTeachings,
  OverwhelmingForce,
  SheilunsGift,
  SpinningCraneKick,
} from '../../Common/WowheadLink/Spells.tsx'
import { MasterOfHarmony } from '../../Common/SpecialTexts.tsx'

export function PatchChanges() {
  return (
    <Section title="11.1 Changes">
      <p>
        Overall, Mistweaver has received significant buffs, and is currently shaping up to very
        strong in 11.1!
      </p>
      <SubSection title="Single target healing and damage buffs">
        <p>
          The biggest changes from the patch are the buffs to our single target healing: <ChiJi />{' '}
          and <JadeEmpowerment />. These changes will make us less reliant on ramping and{' '}
          <SheilunsGift /> in heavy healing situations with only 1 target.
        </p>
        <p>
          <ChiJi /> now always generates 3 <GustOfMists /> per <BlackoutKick />, regardless of how
          many targets there are. This means no change at 3 targets, but a 200% buff at 1 target,
          and a 100% buff at 2 targets. This should now be our go-to healing cooldown in most
          situations. Our reliance on <ChiJi /> might even increase our desire for Mastery.
        </p>
        <p>
          <JadeEmpowerment /> now deals 2500% damage to its primary target and cleaves at 15%
          effectiveness, up to 4000% at 5 targets. Previously, it dealt 800% per enemy. This means
          no change at 5 targets, but a massive buff at 1 target. It might not be strong enough to
          single-handedly heal through difficult healing checks, but it is still a potent ability to
          weave in to our healing rotation.
        </p>
        <p>
          <BlackoutKick /> damage increased by 75%, but <JadefireTeachings /> now causes it to
          cleave 2 additional enemies at 20% effectiveness (was 70%). This is essentially no change
          at 3 targets, but a ~70% buff at 1 target, and a ~100% buff at 2 targets.
        </p>
      </SubSection>
      <SubSection title="Other changes">
        <p>
          <CelestialConduit /> damage increase by 300%, <SpinningCraneKick /> damage increased by
          40%, and <OverwhelmingForce /> damage decreased by 200%. This helps even the playing
          ground between our hero talents, and makes <CelestialConduit /> a powerful DPS cooldown
          that you can combo with other buffs. That said, <MasterOfHarmony /> is still ~20% ahead in
          damage.
        </p>
        <p>
          <DanceOfTheWind /> now reduces physical damage taken instead of dodge chance. Mostly a
          buff, and will be very powerful in S2 dungeons that have a lot of physical damage, such as
          Theater of Pain (watch other classes struggle to survive the monster that is Xav).
        </p>
        <p>
          <SheilunsGift />
          {"'"}s talent location was moved to the middle part of the tree, freeing up a talent point
          in the bottom third. With our reliance on <SheilunsGift /> decreasing thanks to <ChiJi />{' '}
          buffs, this might trigger some major pathing changes.
        </p>
        <p>
          <JadeBond />
          {"'"}s <ChiCocoon /> is now 100% stronger, apply <EnvelopingMist /> when they expire, and{' '}
          <GustOfMists /> healing is increased by 40% (was 20%). I can imagine some niche scenarios
          where we run this instead of <GiftOfTheCelestials />, but I think it is very unlikely in
          S2.
        </p>
      </SubSection>
    </Section>
  )
}
