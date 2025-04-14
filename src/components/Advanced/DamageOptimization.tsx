import { Section } from '../Guide/Section.tsx'
import { SubSection } from '../Guide/SubSection.tsx'
import { Link } from '../Common/Link.tsx'
import { damageRotationTitle } from '../Guide/Gameplay/DamageRotation.tsx'
import { SubSubSection } from '../Guide/SubSubSection.tsx'
import { BurstingLightshard, MisterPickMeUp } from '../Common/WowheadLink/Items.tsx'
import {
  AspectOfHarmony,
  BlackoutKick,
  CelestialConduit,
  ChiJi,
  Coalescence,
  CracklingJadeLightning,
  HarmonicGambit,
  HeartOfTheJadeSerpent,
  JadeEmpowerment,
  LifeCocoon,
  RisingSunKick,
  SecretInfusion,
  ShaohaosLessons,
  SheilunsGift,
  SpinningCraneKick,
  TeachingsOfTheMonastery,
  ThunderFocusTea,
  TigerPalm,
  Vivify,
} from '../Common/WowheadLink/Spells.tsx'
import { Macro } from '../Guide/UserInterface/Macros.tsx'
import { UnorderedList } from '../Common/UnorderedList.tsx'
import { OrderedList } from '../Common/OrderedList.tsx'

export function DamageOptimization() {
  return (
    <Section title="Damage optimization">
      <p>
        Your primary job as a healer is to heal. Do not ever let damage distract you from this. As a
        mistweaver, you are in a great position where dealing damage is part of your healing
        rotation, and so even if you never ever prioritize damage, your overall dps will be quite
        good!
      </p>
      <p>
        Once you are comfortable with healing, one of your secondary objectives should be to deal as
        much damage as possible! Let{"'"}s look at how you can really optimize it. The first thing
        you should do is memorize the{' '}
        <Link href={`/#${damageRotationTitle}`}>{damageRotationTitle}</Link>.
      </p>
      <SubSection title="Buffing your damage">
        <p>
          Mistweaver has several buffs that affect your damage. Try to combine these with with two
          charges of <JadeEmpowerment /> to give it some extra oomph.
        </p>
        <UnorderedList>
          <li>
            <SecretInfusion /> increases your versatility by 15% which is 15% more damage
          </li>
          <li>
            <ShaohaosLessons /> effects all give a decent damage buff. The best one is Anger, and
            the worst one is Fear.
          </li>
          <li>
            <Coalescence /> increases your damage by 20% on an enemy with the debuff.
          </li>
        </UnorderedList>
      </SubSection>
      <SubSection title="Priority damage and pad">
        <p>
          Some damage is more useful than others, and unfortunately this is not measured on damage
          meters. If a pack has 1 mob with 10M HP, and 20 mobs with 1M HP, then many players will
          pop their cooldowns and spam their uncapped AoE (like <SpinningCraneKick />) to deal as
          much total damage as possible. And then they{"'"}re left with 1 mob that still has 5M HP
          and they{"'"}re forced to single target without cooldowns. Don{"'"}t be that guy!
        </p>
        <p>
          Be aware of when there is one dangerous or high-health mob in a pack and target it with
          all your abilities. Unless you{"'"}re using <SpinningCraneKick /> (which as its uses!),
          most of your damage is heavily single target, so you want to choose carefully where it
          goes.
        </p>
        <p>Use a focus kick macro to target one mob while easily kicking another.</p>
      </SubSection>
      <SubSection title="Conduit of the Celestials">
        <p>
          Most damage from this tree is passive. <CelestialConduit /> is a lot of damage, so try to
          avoid holding it too long. Note that is divides damage evenly up to 5 targets, so if you
          use it when there are many pad targets in a group, the damage is mostly wasted!
        </p>
        <p>
          <HeartOfTheJadeSerpent /> will cause your <ThunderFocusTea /> to be come off CD very
          quickly. Do not ever let it sit off CD! You want all the <JadeEmpowerment />s you can get.
        </p>
      </SubSection>
      <SubSection title="Master of Harmony">
        <p>
          <AspectOfHarmony /> is very complicated. I will not go into the in-depth mechanics of how
          it functions here, only how to maximize its damage. Read{' '}
          <Link href="https://docs.google.com/document/d/1899YbIt-l0fYz3TYRd-MXATcH-wohL3JCMOGzCQ5Bw4/edit?usp=sharing">
            this guide
          </Link>{' '}
          for details on how it functions. Check the Weakauras section in my main guide for a
          Vitality tracker.
        </p>
        <p>
          Dealing damage with <AspectOfHarmony /> cycles through 3 phases: storing Vitality,
          consuming Vitality, and using the <Coalescence /> damage amp.
        </p>
        <SubSubSection title="Storing Vitality">
          <p>
            Storing Vitality is generally easy and will be done automatically through your melee
            rotation and passive healing. It stacks very slowly with overhealing, so there are some
            situation where this no healing to do and it will stack very slowly. In this case, you
            can send <ThunderFocusTea /> without full Vitality to avoid overcapping on charges.
          </p>
        </SubSubSection>
        <SubSubSection title="Consuming Vitality">
          <p>
            When your Vitality is at its max value, use <ThunderFocusTea />. Now, it is vital to
            immediately follow up with one the 3 <HarmonicGambit /> spells: <TigerPalm />,{' '}
            <BlackoutKick />, or <RisingSunKick />, applying the dot to the enemy. Once applied,
            your subsequent spells are less important as any can amplify this dot and drain your
            Vitality within a few GCDs. Even your teammates{"'"} spells can intensify the dot!
            However, I recommend continuing to only use <HarmonicGambit /> spells, or{' '}
            <SpinningCraneKick />, until your Vitality is fully drained. Be sure to get at least one{' '}
            <RisingSunKick /> in here for <SecretInfusion />.
          </p>
          <p>
            Avoid heavy healing while Vitality is draining such as <ChiJi />, <SheilunsGift />,{' '}
            <Vivify /> etc. Make sure to use your <ShaohaosLessons /> <i>before</i>{' '}
            <ThunderFocusTea />. <CracklingJadeLightning /> is generally fine to use, but not ideal.
          </p>
          <p>
            Optional info on casts after first: after the first GCD, you will have most of your
            Vitality still available in the pool. Unfortunately, this can still be turned into
            healing even if your group is topped. To avoid this, you want to intensify the dot
            through damaging spells that do little healing. The best spell for this is actually{' '}
            <SpinningCraneKick /> which can be a good choice in AoE, but not worth the damage loss
            in ST. <HarmonicGambit /> spells are the next best option.
          </p>
        </SubSubSection>
        <SubSubSection title="Using the damage amp">
          <p>
            The enemy is now taking 20% more damage for 8 seconds. Now is the time to slam your{' '}
            <JadeEmpowerment /> stacks for big damage with <Coalescence /> + <SecretInfusion />.
          </p>
        </SubSubSection>
        <SubSubSection title="Ideal rotation">
          <OrderedList>
            <li>
              Get 4 stacks of <TeachingsOfTheMonastery />
            </li>
            <li>
              <ShaohaosLessons />
            </li>
            <li>
              <ThunderFocusTea />, initiating Vitality drain
            </li>
            <li>
              <RisingSunKick /> to apply the dot and gain <SecretInfusion />
            </li>
            <li>
              <BlackoutKick /> to intensify and spread the dot
            </li>
            <li>
              Optional: if any Vitality remains, finish draining it using <HarmonicGambit /> spells
              or <SpinningCraneKick />
            </li>
            <li>
              <CracklingJadeLightning /> with <SecretInfusion /> and <Coalescence />
            </li>
          </OrderedList>
        </SubSubSection>
      </SubSection>
      <SubSection title="Season 2 Trinkets">
        <SubSubSection title={<BurstingLightshard />}>
          <p>
            This little guy does a lot of damage and should be your go-to trinket for damage.
            Keeping him alive can be a pain. By far the best way is to pair him with your <ChiJi />{' '}
            cast and then forget about him and simply do your <ChiJi /> rotation.{' '}
            <JadeEmpowerment /> also works to heal him. <CelestialConduit /> does not.
          </p>
          <p>
            Alternatively, press this macro twice to spawn him, and then focus him. Then you can
            cast direct healing spells to keep him alive. You <i>can</i> use <LifeCocoon /> to save
            a few globals, but only do so if you{"'"}re very confident your team won{"'"}t need the
            external!
          </p>
          <Macro>
            {
              '/use [@cursor] Bursting Lightshard\n/targetexact Bursting Lightspawn\n/focus\n/targetlasttarget'
            }
          </Macro>
        </SubSubSection>
        <SubSubSection title={<MisterPickMeUp />}>
          <p>
            This is an entirely passive trinket so there isn{"'"}t much to say here. It will deal
            more damage if you have a dps with pets, such as a BM hunter, unholy DK, or demo
            Warlock.
          </p>
        </SubSubSection>
      </SubSection>
    </Section>
  )
}
