import { CodeBlock } from '../Common/CodeBlock.tsx'
import { UnorderedList } from '../Common/UnorderedList.tsx'
import {
  AncientArts,
  ChiBurst,
  ChiWave,
  DeepClarity,
  EnergizingBrew,
  EnvelopingMist,
  GiftOfTheCelestials,
  GraceOfTheCrane,
  HealingElixir,
  ImprovedDetox,
  JadeBond,
  LegacyOfWisdom,
  MendingProliferation,
  PeerIntoPeace,
  PoolOfMists,
  PressurePoints,
  RenewingMist,
  Revival,
  RisingSunKick,
  SecretInfusion,
  ShaohaosLessons,
  SheilunsGift,
  UpliftedSpirits,
  VeilOfPride,
  Vivify,
  ZenPulse,
} from '../Common/WowheadLink/Spells.tsx'
import { Button } from '../Common/Button.tsx'
import { Section } from './Section.tsx'
import { SubSection } from './SubSection.tsx'
import { MasterOfHarmony } from '../Common/SpecialTexts.tsx'

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
      <SubSection title="Hero talent choice">
        <p>
          For season 3, I recommend playing <MasterOfHarmony /> at all levels due to the tier set.
          It does more healing and more damage, and has a better healing/damage profile for all
          scenarios.
        </p>
      </SubSection>
      <SubSection title="Conduit build">
        <TalentCodeBlock>
          C4QAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAghFLzsMmFz2MmxG2WWmtxgZzyMzyCDNzYgZYGAbzMzwsxMDzyMBAAAAABYxystNbzMTAAwGA
        </TalentCodeBlock>
      </SubSection>
      <SubSection title="Master of Harmony build">
        <TalentCodeBlock>
          C4QAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAghFLzsMmFz2MmxG2W2mtxgZzyMzyCDNzYgZYGAbzMzwsxMDzyMBAAAAY2m2mtZWmNAQAAwGA
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
              You can run <JadeBond /> instead of <GiftOfTheCelestials />. This is great for
              dungeons where there are large pulls far apart. When you just need a lot of healing in
              a period of less than 1 minute.
            </li>
            <li>
              I always run <ShaohaosLessons /> over <VeilOfPride /> these days. <SheilunsGift />{' '}
              just doesn{"'"}t do enough healing on its own to justify running <VeilOfPride />. It
              {"'"}s better to run <ShaohaosLessons /> to buff your other healing cooldowns and
              grant a decent damage increase.
            </li>
            <li>
              <LegacyOfWisdom /> can be swapped for <MendingProliferation />. If you do this, you
              essentially ignore the healing aspect of <SheilunsGift /> and use it <i>before</i>{' '}
              your other healing or damage spells to buff them. <MendingProliferation /> is the
              highest HPS choice.
            </li>
          </UnorderedList>
        </p>
        <p>
          If you wish to make other changes, there are 3 points you can drop from <DeepClarity />,{' '}
          <SecretInfusion /> x2.
        </p>
        <p>Recommended options</p>
        <UnorderedList>
          <li>
            <SecretInfusion />: my favorite talent of the bunch, lots of stats with high uptime.
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
        <p>Not recommended, but viable</p>
        <UnorderedList>
          <li>
            <UpliftedSpirits />: <Revival /> becomes a 2 min cd instead of 3 min cd
          </li>
          <li>
            <PoolOfMists />: if you like the raid gameplay of <RisingSunKick /> + <RenewingMist />
          </li>
        </UnorderedList>
        <img src="/images/spec.png" alt="spec_talents" width={400} />
      </SubSection>
    </Section>
  )
}
