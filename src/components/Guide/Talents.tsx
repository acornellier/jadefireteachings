import { CodeBlock } from '../Common/CodeBlock.tsx'
import { Button } from '../Common/Button.tsx'
import { Section } from './Section.tsx'
import { SubSection } from './SubSection.tsx'
import { ConduitOfTheCelestials, MasterOfHarmony } from '../Common/SpecialTexts.tsx'
import {
  CelestialConduit,
  DanceOfChiJi,
  EmperorsElixir,
  FocusedThunder,
  HeartOfTheJadeSerpent,
  JadefireStomp,
  Mistline,
  MorningBreeze,
  RisingMist,
  RisingSunKick,
  SheilunsGift,
  Spiritfont,
} from '../Common/WowheadLink/Spells.tsx'

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
      <SubSection title="The Spiritfont build">
        <p>
          This is exclusively what I play currently. It drops <SheilunsGift /> talents,{' '}
          <RisingMist /> and <Mistline /> from last season to take <Spiritfont />. Makes use of{' '}
          <EmperorsElixir />, <FocusedThunder />, and <MorningBreeze /> to cast <RisingSunKick />{' '}
          and <JadefireStomp /> a lot. <DanceOfChiJi /> carries large trash packs.
        </p>
        <TalentCodeBlock>
          C4QAQnG51S19isUJoJoTeJ/IKDAAAAAAAgBWmZZML2mxMz2mBmhZzMbLLzMWYMNjZADGwYmZmhZDzwsMTAAAAgZbab2mZZWsNz2sNzACAgxMzgZAjBWkxMA
        </TalentCodeBlock>
      </SubSection>
      <SubSection title="Hero talent choice">
        <p>
          Currently, I recommend sticking to <ConduitOfTheCelestials /> in all content.{' '}
          <CelestialConduit /> is too powerful a cooldown to lose, plus the haste and CDR from{' '}
          <HeartOfTheJadeSerpent /> is very valuable. <MasterOfHarmony /> no longer has what made it
          powerful in The War Within: the 20% damage and healing amp. That said, <MasterOfHarmony />{' '}
          is <i>fine</i> tuning-wise, and you can play it in very high keys if you like it. There
          {"'"}s just no reason to play it unless its tuned super high.
        </p>
      </SubSection>
    </Section>
  )
}
