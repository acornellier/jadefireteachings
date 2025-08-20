import { CodeBlock } from '../Common/CodeBlock.tsx'
import { UnorderedList } from '../Common/UnorderedList.tsx'
import {
  AncientArts,
  ChiBurst,
  ChiWave,
  Coalescence,
  DeepClarity,
  EnergizingBrew,
  EnvelopingMist,
  GiftOfTheCelestials,
  GraceOfTheCrane,
  HarmonicSurge,
  HealingElixir,
  ImprovedDetox,
  JadeBond,
  JadeEmpowerment,
  JadefireTeachings,
  LegacyOfWisdom,
  LifeCocoon,
  MendingProliferation,
  PeerIntoPeace,
  PressurePoints,
  Revival,
  SecretInfusion,
  ShaohaosLessons,
  SheilunsGift,
  ThunderFocusTea,
  TigerPalm,
  UpliftedSpirits,
  VeilOfPride,
  Vivify,
  ZenPulse,
} from '../Common/WowheadLink/Spells.tsx'
import { Button } from '../Common/Button.tsx'
import { Section } from './Section.tsx'
import { SubSection } from './SubSection.tsx'
import { ConduitOfTheCelestials, MasterOfHarmony } from '../Common/SpecialTexts.tsx'

const TalentCodeBlock = ({ children }: { children: string }) => (
  <CodeBlock
    type="talents"
    extraButton={
      <a
        href={`https://www.wowhead.com/talent-calc/blizzard/${children}`}
        target="_blank"
        rel="noreferrer"
      >
        <Button short>View in Wowhead</Button>
      </a>
    }
  >
    {children}
  </CodeBlock>
)

export function Talents() {
  return (
    <Section title="Talents">
      <p>
        I play <MendingProliferation /> in the linked builds below. If you are new to mistweaver,
        consider swapping it for <LegacyOfWisdom />, and take <VeilOfPride /> instead of{' '}
        <ShaohaosLessons />. <SheilunsGift /> is much easier to use to heal through mechanics, but
        does not scale well enough to beat healing checks in higher keys.
      </p>
      <SubSection title="Hero talent choice">
        <p>
          For season 3, both hero talents and their tier sets are strong. Generally, I think{' '}
          <MasterOfHarmony /> is stronger in most situations. It is possible that one is better in
          some dungeons and the other is better in others. They do similar overall healing and
          damage but have different profiles.
        </p>
        <p>
          <ConduitOfTheCelestials /> has a flatter healing profile with high uptime on your healing.
          With the tier set, you spam <ThunderFocusTea />, granting constant <JadeEmpowerment />{' '}
          which is very strong for trash pulls. This also grants high <SecretInfusion /> uptime, a
          low <LifeCocoon /> CD, and constantly high haste. Use <ThunderFocusTea /> ON COOLDOWN, and
          send your <JadeEmpowerment /> and <LifeCocoon /> aggressively.
        </p>
        <p>
          <MasterOfHarmony /> can buff your other healing with <Coalescence />, but this does not
          work on <JadefireTeachings /> which is your primary heal. Its tier set empowers your{' '}
          <TigerPalm /> to do significant groupwide healing with <HarmonicSurge />. With a proper
          ramp, you can spam <TigerPalm /> to heal through many AoE healing mechanics. It also
          smooths out your Chi-Ji rotation and provides high throughput. This is very strong in
          single target healing scenarios, such as all the Dawnbreaker bosses.
        </p>
      </SubSection>
      <SubSection title="Master of Harmony build">
        <TalentCodeBlock>
          C4QAvmhRP2rMmMXAL1blVepCkBAAAAAAAAsYZmlxsY2mxM2wmtZbMbMbWmZWWYoZmZgZYGAbzMzwsxMDzyMBAAAAY2m2mtZWmNLz2ysNzMBBA2A
        </TalentCodeBlock>
      </SubSection>
      <SubSection title="Conduit build">
        <TalentCodeBlock>
          C4QAvmhRP2rMmMXAL1blVepCkBAAAAAAAAsYZmlxsY2mxM2wmtZbMbMbWmZWWYoZmZgZYGAbzMzwsxMDzyMBAAAAY2m2mtZWmFLz2ysNzMBBA2A
        </TalentCodeBlock>
      </SubSection>
      <SubSection title="Class tree">
        <UnorderedList>
          <li>
            Drop <ImprovedDetox /> if you do not need a poison or disease dispel
          </li>
          <li>
            Take <PressurePoints /> if there is an enrage
          </li>
          <li>
            <GraceOfTheCrane /> and <AncientArts /> are the main points to drop for others.
          </li>
          <li>
            Feel free to swap <ChiBurst /> for <ChiWave /> if you prefer it. Chi Burst is a slight
            damage increase, but you have to be careful aiming it as it can pull packs.
          </li>
        </UnorderedList>
      </SubSection>
      <SubSection title="Spec tree">
        <p>
          <UnorderedList>
            <li>
              I always run <ShaohaosLessons /> over <VeilOfPride />. <SheilunsGift /> just doesn
              {"'"}t do enough healing on its own to justify running <VeilOfPride />. It
              {"'"}s better to run <ShaohaosLessons /> to buff your other healing cooldowns and
              grant a decent damage increase.
            </li>
            <li>
              This might change as I continue to experiment with <SheilunsGift />, but for now I
              personally always run <MendingProliferation /> over <LegacyOfWisdom />.{' '}
              <MendingProliferation /> buffs our many other sources of healing which is generally
              more valuable than one instance of <SheilunsGift />. I ignore the healing aspect of{' '}
              <SheilunsGift /> and use it <i>before</i> your other healing or damage spells to buff
              them.
            </li>
            <li>
              If you prefer <SheilunsGift />, then drop <MendingProliferation /> and take{' '}
              <VeilOfPride /> and <LegacyOfWisdom />. I might run this in some dungeons such as
              Dawnbreaker after playing with it some more.
            </li>
            <li>
              You can run <JadeBond /> instead of <GiftOfTheCelestials />. This is great for
              dungeons where there are large pulls far apart, when you just need a lot of healing in
              a period of less than 1 minute. As of now in S3, I am running <GiftOfTheCelestials />{' '}
              in every dungeon.
            </li>
          </UnorderedList>
        </p>
        <p>
          If you wish to make other changes, there are 3 points you can drop from <DeepClarity />{' '}
          and <SecretInfusion /> x2.
        </p>
        <p>Recommended options</p>
        <UnorderedList>
          <li>
            <SecretInfusion />: my favorite talent of the bunch, lots of stats with high uptime.
          </li>
          <li>
            <UpliftedSpirits />: <Revival /> becomes a 2 min cd instead of 3 min cd
          </li>
          <li>
            <EnergizingBrew />: much improved Mana Tea. Take this if you find yourself running out
            of mana.
          </li>
          <li>
            <DeepClarity />: more <Vivify /> cleave healing. <ZenPulse /> stacks to 2 so rarely
            wasted.
          </li>
          <li>
            <HealingElixir />: good reliable self healing. You could swap <ZenPulse /> for this.
          </li>
          <li>
            <PeerIntoPeace />: to easily ramp <EnvelopingMist /> on the whole group
          </li>
        </UnorderedList>
        <img src="/images/spec.png" alt="spec_talents" width={400} />
      </SubSection>
    </Section>
  )
}
