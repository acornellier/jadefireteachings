import { Header } from '../Common/Header.tsx'
import { CodeBlock } from '../Common/CodeBlock.tsx'
import { UnorderedList } from '../Common/UnorderedList.tsx'
import {
  AncientArts,
  CelestialConduit,
  ChiBurst,
  ChiJi,
  ChiWave,
  Coalescence,
  DeepClarity,
  EnergizingBrew,
  EnvelopingMist,
  GiftOfTheCelestials,
  GraceOfTheCrane,
  HealingElixir,
  HeartOfTheJadeSerpent,
  ImprovedDetox,
  InvokersDelight,
  JadeBond,
  JadeEmpowerment,
  JadeSanctuary,
  LegacyOfWisdom,
  LifeCocoon,
  MendingProliferation,
  MistWrap,
  PeerIntoPeace,
  PoolOfMists,
  PressurePoints,
  RenewingMist,
  Revival,
  RisingSunKick,
  SecretInfusion,
  ShaohaosLessons,
  SheilunsGift,
  StrengthOfTheBlackOx,
  ThunderFocusTea,
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
      <SubSection title="Hero talent choice">
        <p>
          Both hero trees are viable at any key level, each with strengths and weakness. I generally
          recommend <ConduitOfTheCelestials /> for beginners. I currently play both hero talents and
          regularly swap between them at the highest key level.
        </p>
        <p>
          <ConduitOfTheCelestials /> is easier to use for more healing, with <CelestialConduit />,{' '}
          <StrengthOfTheBlackOx />, and a few other nodes. The extra active cooldown is a great
          emergency button for immediate healing. The reduced <LifeCocoon /> CD thanks to{' '}
          <HeartOfTheJadeSerpent /> is great. It also has a better defensive node with{' '}
          <JadeSanctuary />.
        </p>
        <p>
          <MasterOfHarmony /> can do a similar amount of healing if played properly. Its healing
          profile is different, focusing on the amp from <Coalescence />. It is about 20% ahead on
          damage - the highest damage of any healer spec in the game currently. The two charges of{' '}
          <ThunderFocusTea /> are nice for more flexibility with <JadeEmpowerment /> and{' '}
          <SecretInfusion />.
        </p>
      </SubSection>
      <SubSection title="Conduit build">
        <p>All the choice nodes are good, depending on what you want.</p>
        <TalentCodeBlock>
          C4QAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADLWmZZMLmtZMjNstsNbjBzmlZmlFGamZGYGmBw2MzMMbMzws8ATAAAAAQAWsMbbz2MzEAAsB
        </TalentCodeBlock>
        <Header Tag="h3" id="moh-build">
          Master of Harmony build
        </Header>
        <TalentCodeBlock>
          C4QAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADLWmZZMLmtZMjNstsNbjBzmlZmlFGamZGYGmBw2MzMMbMzws8ATAAAAAmtptZbmlZDAEAAsB
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
          With the changes from 11.1, I have been altering my build in a few ways from dungeon to
          dungeon. See the dungeon guides for more details.
          <UnorderedList>
            <li>
              <JadeBond /> instead of <GiftOfTheCelestials />. This is great for dungeons where
              there are large pulls far apart. When you just need a lot of healing in a period of
              less than 1 minute.
            </li>
            <li>
              I always run <ShaohaosLessons /> over <VeilOfPride /> these days. <SheilunsGift />{' '}
              just doesn{"'"}t do enough healing on its own to justify running <VeilOfPride />. It
              {"'"}s better to run <ShaohaosLessons /> to buff your other healing cooldowns and
              grant a decent damage increase.
            </li>
            <li>
              <LegacyOfWisdom /> can be swapped for <InvokersDelight /> or <MendingProliferation />.
              If you do this, you essentially ignore the healing aspect of <SheilunsGift /> and use
              it <i>before</i> your other healing or damage spells to buff them. <InvokersDelight />{' '}
              makes your <ChiJi /> more powerful, and <MendingProliferation /> is good in rot
              scenarios like Candle King.
            </li>
          </UnorderedList>
        </p>
        <p>
          If you wish to make other changes, there are 4 points you can drop from <EnergizingBrew />
          , <DeepClarity />, <SecretInfusion /> x2. Two of the points must go in the middle of the
          tree.
        </p>
        <p>Recommended options</p>
        <UnorderedList>
          <li>
            <EnergizingBrew />: much improved Mana Tea. Drop this if you find yourself consistently
            at very high mana.
          </li>
          <li>
            <SecretInfusion />: my favorite talent of the bunch, lots of stats with high uptime.
          </li>
          <li>
            <DeepClarity />: more <Vivify /> healing. <ZenPulse /> stacks to 2 so rarely wasted.
          </li>
          <li>
            <HealingElixir />: good reliable self healing.
          </li>
          <li>
            <MistWrap />: run this if you like <EnvelopingMist /> ramping.
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
