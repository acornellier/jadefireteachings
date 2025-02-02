import { Header } from '../Common/Header.tsx'
import { CodeBlock } from '../Common/CodeBlock.tsx'
import { UnorderedList } from '../Common/UnorderedList.tsx'
import {
  AncientArts,
  CelestialConduit,
  DanceOfTheWind,
  DeepClarity,
  EnergizingBrew,
  GraceOfTheCrane,
  HealingElixir,
  HeartOfTheJadeSerpent,
  ImprovedDetox,
  JadeEmpowerment,
  JadeSanctuary,
  LifeCocoon,
  LighterThanAir,
  MistWrap,
  PeerIntoPeace,
  PoolOfMists,
  PressurePoints,
  RenewingMist,
  Revival,
  RisingSunKick,
  SecretInfusion,
  ShaohaosLessons,
  SoothingMist,
  StrengthOfTheBlackOx,
  ThunderFocusTea,
  UpliftedSpirits,
  VeilOfPride,
  Vivify,
  Windwalking,
  YulonsGrace,
  ZenPulse,
} from '../Common/WowheadLink/Spells.tsx'
import { Button } from '../Common/Button.tsx'
import { Section } from './Section.tsx'
import { SubSection } from './SubSection.tsx'
import { ConduitOfTheCelestials, MasterOfHarmony } from '../Common/SpecialTexts.tsx'
import { RouterLink } from '../Common/RouterLink.tsx'

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
          Both hero trees are viable, each with strengths and weakness. However, I generally
          recommend <ConduitOfTheCelestials /> for most content unless you are very comfortable with{' '}
          <MasterOfHarmony />. In the <RouterLink to="/dungeons">dungeon guides</RouterLink>, I have
          a recommended tree for each dungeon.
        </p>
        <p>
          <ConduitOfTheCelestials /> is better overall for healing, with <CelestialConduit />,{' '}
          <StrengthOfTheBlackOx />, and a few other nodes. The reduced <LifeCocoon /> CD thanks to{' '}
          <HeartOfTheJadeSerpent /> is great. It also has a better defensive node with{' '}
          <JadeSanctuary />.
        </p>
        <p>
          <MasterOfHarmony /> is slightly behind on healing, but wayyyy ahead on damage if you run
          Harmonic Gambit. Like, easily the highest damage of any healer spec in the game currently.
          The two charges of <ThunderFocusTea /> is also great for more flexibility with{' '}
          <JadeEmpowerment />.
        </p>
      </SubSection>
      <SubSection title="Conduit build">
        <p>All the choice nodes are good, depending on what you want.</p>
        <TalentCodeBlock>
          C4QAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGYZmlxsY2mZmxG2mlZb8AY2W2mZWWYoZGDMDzAYbGzwsNmZYWmJAAAAAIALWmttZbmZGAAwG
        </TalentCodeBlock>
        <img src="/images/conduit.jpg" alt="conduit_talents" width={200} />
        <Header Tag="h3">Master of Harmony build</Header>
        <TalentCodeBlock>
          C4QAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGYZmlxsY2mZmxG2mlZb8AY2W2mZWWYoZGDMDzAYbGzwsNmZYWmJAAAAAz202sNzysBACAAsB
        </TalentCodeBlock>
        <img src="/images/moh.jpg" alt="moh_talents" width={200} />
      </SubSection>
      <SubSection title="Class tree">
        <UnorderedList>
          <li>
            Drop <ImprovedDetox /> in Dawnbreaker, Grim Batol, and Stonevault
          </li>
          <li>
            Take <PressurePoints /> in Grim Batol for the Enforcers
          </li>
          <li>
            <GraceOfTheCrane />, <AncientArts />, and <Windwalking /> are the main points to drop
            for others.
          </li>
          <li>
            Do NOT run <YulonsGrace />. This talent is not strong, and you will be left with only
            one defensive.
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
          <p>In the middle of the tree, you have 3 points to flex between</p>
          <li>
            <EnergizingBrew />: much better Mana Tea. I personally never drop this, but you can.
          </li>
          <li>
            <HealingElixir />: good reliable self healing. Probably the strongest choice here.
          </li>
          <li>
            <MistWrap />: sustained HPS, synergy with <StrengthOfTheBlackOx />.
          </li>
          <li>
            <DeepClarity />: more <Vivify /> healing. <ZenPulse /> stacks to 2 so rarely wasted.
          </li>
          <li>
            <UpliftedSpirits />: <Revival /> becomes a 2 min cd instead of 3 min cd. Probably the
            weakest choice here.
          </li>
        </UnorderedList>
        <UnorderedList>
          <p>
            In the bottom of the tree, you can flex 1 point between the below talents. You can also
            just use it for one of the above talents!
          </p>
          <li>
            <SecretInfusion />: safe choice for stats
          </li>
          <li>
            <PoolOfMists />: if you like the raid gameplay of <RisingSunKick /> + <RenewingMist />
          </li>
          <li>
            <PeerIntoPeace />: if you like <SoothingMist /> gameplay
          </li>
        </UnorderedList>
        <p>
          Take <ShaohaosLessons /> if you want more damage and don’t need <VeilOfPride /> to heal.
          It’s not a big damage increase so don’t take it unless you know what you’re doing.
        </p>
        <img src="/images/spec.jpg" alt="spec_talents" width={400} />
      </SubSection>
    </Section>
  )
}
