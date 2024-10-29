import { Header } from '../Common/Header.tsx'
import { CodeBlock } from '../Common/CodeBlock.tsx'
import { UnorderedList } from '../Common/UnorderedList.tsx'
import {
  AncientArts,
  DanceOfTheWind,
  GraceOfTheCrane,
  HarmonicGambit,
  HealingElixir,
  ImprovedDetox,
  LighterThanAir,
  MistWrap,
  PeerIntoPeace,
  PoolOfMists,
  PressurePoints,
  PurifiedSpirit,
  RenewingMist,
  Revival,
  RisingSunKick,
  SecretInfusion,
  ShaohaosLessons,
  SoothingMist,
  UpliftedSpirits,
  VeilOfPride,
} from '../Common/WowheadLink/Abilities.tsx'
import { Button } from '../Common/Button.tsx'
import { Section } from './Section.tsx'
import { SubSection } from './SubSection.tsx'

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
      <SubSection title="Conduit build">
        <p>Conduit is better overall for healing and has a better defensive node.</p>
        <p>All the choice nodes are good, depending on what you want.</p>
        <TalentCodeBlock>
          C4QAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAALzsMmFz2MzM2w2sMbjHAz2y2MzyCDNzMDMDzAYbGzwsNmZYWmJAAAAAIALWmttZbmZGAAwG
        </TalentCodeBlock>
        <img src="/images/conduit.jpg" alt="conduit_talents" width={200} />
        <Header Tag="h3">Master of Harmony build</Header>
        <p>
          Master of Harmony is slightly behind on healing, but wayyyy ahead on damage if you run
          Harmonic Gambit. Like, easily the highest damage of any healer spec in the game currently.
        </p>
        <p>
          <HarmonicGambit /> is bugged and drains way too quickly, which can make it hard to spread
          the buff to your allies. But <HarmonicGambit /> is a massive damage increase (~35% overall
          damage). If you really like MoH and don’t care for the damage, you can run{' '}
          <PurifiedSpirit />.
        </p>
        <img src="/images/moh.jpg" alt="moh_talents" width={200} />
        <TalentCodeBlock>
          C4QAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAALzsMmFz2MzM2w2sMbjHAz2y2MzyCDNzMDMDzAYbGzwsNmZYWmJAAAAAz202sNzysBACAAsB
        </TalentCodeBlock>
      </SubSection>
      <SubSection title="Class tree">
        <UnorderedList>
          <li>
            Take <ImprovedDetox /> everywhere except for Dawnbreaker, Grim Batol, and Stonevault
          </li>
          <li>
            Take <PressurePoints /> in Grim Batol for the Enforcers
          </li>
          <li>
            <GraceOfTheCrane />, and then <AncientArts /> are the main points to drop for others.
          </li>
          <li>
            Do NOT drop <DanceOfTheWind />! It’s pretty OP, you can dodge a lot of stuff you don’t
            expect with it. For example, it immunes the first boss in Necrotic Wake! I just take it
            in every dungeon.
          </li>
          <li>
            <LighterThanAir /> is a great talent that a lot of people run. If you like it, run it! I
            personally do not like it, especially due to the Roll CD increase.
          </li>
        </UnorderedList>
        <img src="/images/class.jpg" alt="class_talents" width={400} />
      </SubSection>
      <SubSection title="Spec tree">
        <UnorderedList>
          In the middle of the tree, there’s 3 talents you can flex 2 points between
          <li>
            <HealingElixir />: Decent HPS, good self healing
          </li>
          <li>
            <UpliftedSpirits />: <Revival /> is a great cd now, becomes 2 min cd instead of 3 min cd
          </li>
          <li>
            <MistWrap />: sustained HPS
          </li>
          <li>In the bottom of the tree, you can flex 1 point between</li>
          <li className="ml-4">
            <SecretInfusion />: safe choice for stats
          </li>
          <li className="ml-4">
            <PoolOfMists />: if you like the raid gameplay of <RisingSunKick /> + <RenewingMist />
          </li>
          <li className="ml-4">
            <PeerIntoPeace />: if you like <SoothingMist /> gameplay
          </li>
          <li>
            Take <ShaohaosLessons /> if you want more damage and don’t need <VeilOfPride /> to heal.
            It’s not a big damage increase so don’t take it unless you know what you’re doing.
          </li>
        </UnorderedList>
        <img src="/images/spec.jpg" alt="spec_talents" width={400} />
      </SubSection>
    </Section>
  )
}
