import { CodeBlock } from '../Common/CodeBlock.tsx'
import { Button } from '../Common/Button.tsx'
import { Section } from './Section.tsx'
import { SubSection } from './SubSection.tsx'
import { ConduitOfTheCelestials, MasterOfHarmony } from '../Common/SpecialTexts.tsx'
import {
  CelestialConduit,
  EmperorsElixir,
  FocusedThunder,
  ImprovedDetox,
  JadeBond,
  JadefireStomp,
  Mistline,
  MistyPeaks,
  MorningBreeze,
  PressurePoints,
  RisingSunKick,
  SheilunsGift,
  Spiritfont,
  TranquilTea,
  UpliftedSpirits,
  VeilOfPride,
} from '../Common/WowheadLink/Spells.tsx'
import { UnorderedList } from '../Common/UnorderedList.tsx'

const TalentCodeBlock = ({ children }: { children: string }) => (
  <CodeBlock
    type="talents"
    className={'mt-1'}
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
          Currently, I recommend sticking to <ConduitOfTheCelestials /> in all content.{' '}
          <CelestialConduit /> is too powerful a cooldown to lose. <MasterOfHarmony /> no longer has
          what made it powerful in The War Within: the 20% damage and healing amp, and the tuning
          seems behind. That said, <MasterOfHarmony /> is not <i>terrible</i>, and I will experiment
          with it. It might be the optimal choice for rot healing situations.
        </p>
      </SubSection>
      <SubSection title="Dungeon builds">
        <UnorderedList>
          <li>
            <b>Stomp n{"'"} Spin - big M+ dam</b>: this is exclusively what I play currently. It
            drops all 4 Apex talent points for 4 nodes that increase damage in the bottom third of
            the tree. <Spiritfont /> is <i>probably</i> more healing in some important situations
            but only time will tell. Makes use of <EmperorsElixir />, <FocusedThunder />, and{' '}
            <MorningBreeze /> to cast <RisingSunKick /> and <JadefireStomp /> a lot.
            <TalentCodeBlock>
              C4QAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAghxyMLjZx2MmZsZstsMjZ2Mz2yyMjFGTzYGwgBMmZmZYWwMMLzEAAAAABYx2MLz2MDAAADAzAGDsIjZA
            </TalentCodeBlock>
          </li>
          <li>
            <b>Dungeon Crane</b>: this is the standard dungeon build, and this is what you will find
            other guides. It has reliable throughput and utilizes Spiritfont for group healing.
            <TalentCodeBlock>
              C4QAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAghxyMLDL2MmZshtllZMDzstsMzYhx0MmBMYAjZmZGmFMDzyMBAAAAQAWsNzysNzAAAwYAmBMGYRGzA
            </TalentCodeBlock>
          </li>
          <li>
            <b>Dungeon Serpent</b>: I have never played this, so will not try to share a build or
            comment on it. I hope to never play it.
          </li>
        </UnorderedList>
      </SubSection>
      <SubSection title="Raid builds">
        <UnorderedList>
          <li>
            <b>Raid Serpent</b>: This is the standard raid build, and is what you should default to
            in Mythic raid.
            <TalentCodeBlock>
              C4QAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAghx2MwmFzYmZbGbYmZYmlttZGLMjmxMgBDYWmZmZY2GMY5BmAAAAAIALWmZZ2mZAAgBMAzAGDjFZMDA
            </TalentCodeBlock>
          </li>
          <li>
            <b>Giftweaving</b>: This replaces <Spiritfont /> with <SheilunsGift /> talents. It plays
            similar to the standard build, but presses <SheilunsGift /> a lot more, whenever there
            is spot healing to do. Played mostly on fights with heavy absorbs: Chimaerus, Vanguard,
            and Alleria.
            <TalentCodeBlock>
              C4QAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAghx2MLzYziZMzsNstsNjZYmlttZGLM0MmBMYwwyMzMDz2ghZxEAAAAYWmWmlZWmNAAAAGgZGAYMMWGGA
            </TalentCodeBlock>
          </li>
          <li>
            <b>Vibeweaving - Raid Crane</b>: This is similar to the Stomp n{"'"} Spin build, but for
            raid. It mainly just trades the <SheilunsGift /> talents for <MistyPeaks />. You
            sacrifice some spot healing compared to Serpent, for a LOT of damage, lower overhealing,
            and no mana issues. It <i>looks like</i> Mastery should be good with this build, but
            people are saying the numbers don{"'"}t add up, and they{"'"}re probably right. Jadefire
            Teachings is not a raid guide, so ask me in discord or on stream if you have raid
            questions!
            <TalentCodeBlock>
              C4QAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAghxyMYWsNzMzYbGbYmZ2egZ2WWmZswMaGzAGMgxMzMDz2wMYZmAAAAAIAL2mZZ2mZAAgBAYGwYgFZMDA
            </TalentCodeBlock>
          </li>
        </UnorderedList>
      </SubSection>
      <SubSection title="Master of Harmony build">
        <p>
          I have barely played <MasterOfHarmony /> so far, so won{"'"}t link a build here, but it
          would be the same build as Conduit in the spec tree. I will play it soon and update this!
        </p>
      </SubSection>
      <SubSection title="Class tree">
        <UnorderedList>
          <li>
            Drop <ImprovedDetox /> if you do not need a poison or disease dispel
          </li>
          <li>
            Take <PressurePoints /> if there is an enrage
          </li>
        </UnorderedList>
      </SubSection>
      <SubSection title="Spec tree">
        <UnorderedList>
          <li>
            TODO: Update for Midnight. Need to play around with <JadeBond />. Maybe can drop
            something for <UpliftedSpirits />? <VeilOfPride /> vs <TranquilTea />?
          </li>
          <li>
            Whatever you do, do NOT drop <Mistline />, it is OP.
          </li>
        </UnorderedList>
      </SubSection>
    </Section>
  )
}
