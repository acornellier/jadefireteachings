import { SubSubSection } from '../SubSubSection.tsx'
import {
  BlackoutKick,
  CelestialConduit,
  ChiCocoon,
  ChiJi,
  ChiJiGustOfMists,
  ElusiveMists,
  EmperorsElixir,
  EnvelopingMist,
  FocusedThunder,
  HeartOfTheJadeSerpent,
  LifeCocoon,
  MorningBreeze,
  Revival,
  RisingSunKick,
  SoothingMist,
  Spiritfont,
  TeachingsOfTheMonastery,
  ThunderFocusTea,
  UnityWithin,
  VitalExpenditure,
} from '../../Common/WowheadLink/Spells.tsx'
import { OrderedList } from '../../Common/OrderedList.tsx'
import { SoulcoilerRitualVessel } from '../../Common/WowheadLink/Items.tsx'
import { Section } from '../Section.tsx'
import { SubSection } from '../SubSection.tsx'

export const healingCooldownsTitle = 'Healing cooldowns'

export function HealingCooldowns() {
  return (
    <Section title={healingCooldownsTitle}>
      <p>
        When your group takes heavy damage, you will need to rotate your larger cooldowns: <ChiJi />
        , <CelestialConduit />, <SoulcoilerRitualVessel />, <Revival />, generally in the above
        order. Avoid overlapping cooldowns if possible.
      </p>
      <SubSection title="Thunder Focus Tea">
        <p>
          <ThunderFocusTea /> is a powerful cooldown in Season 2 thanks to the new Mastery build and
          buffs. With <MorningBreeze />, <FocusedThunder />, <EmperorsElixir />, and 2pc, you can{' '}
          <RisingSunKick iconOnly /> {'>'} <ThunderFocusTea iconOnly /> <RisingSunKick iconOnly />{' '}
          {'>'} <RisingSunKick iconOnly /> {'>'} <RisingSunKick iconOnly /> {'>'}{' '}
          <RisingSunKick iconOnly /> for a large amount of sustained healing.
        </p>
      </SubSection>
      <SubSection title="Spiritfont">
        <p>
          <Spiritfont /> is finally good in Season 2. Use it <i>reactively</i> when your group is
          not full health. Its main frustrating aspect is that upon healing a target to full health,
          the <SoothingMist /> channel ends on them. Therefore, using it on full or near-full HP
          targets is not very effective. If you do manage to get long-lasting value out of it, it
          {"'"}s very powerful, doing a lot of <SoothingMist /> healing thanks to{' '}
          <VitalExpenditure />, empowering your <RisingSunKick />, and granting <ElusiveMists /> to
          your party. Avoid overcapping.
        </p>
      </SubSection>
      <SubSection title="Chi-Ji">
        <p>
          <ChiJi /> is very strong if you build a lot of Mastery. It does several things.
        </p>
        <OrderedList>
          <li>
            Causes your <RisingSunKick /> and <BlackoutKick /> to generate <ChiJiGustOfMists />.
            This is the main benefit. Simply use <ChiJi /> then continue your standard rotation to
            dramatically increase your healing throughput. The only difference is that you should
            now default to 4 stacks of <TeachingsOfTheMonastery /> instead of 2 stacks.
          </li>
          <li>
            Grants 4 stacks of <TeachingsOfTheMonastery />, great for an immediate <BlackoutKick />.
          </li>
          <li>
            Shields your group with <ChiCocoon />.
          </li>
          <li>
            Makes <EnvelopingMist /> an instant cast. This is not especially useful.
          </li>
        </OrderedList>
      </SubSection>
      <SubSection title="Celestial Conduit">
        <p>
          <CelestialConduit /> is a decently powerful cooldown. It does decent direct healing split
          among friendly targets, making it good regardless of number of friendly or enemy targets.
        </p>
        <p>
          However, its main power is through <UnityWithin />, which grants a LOT of cooldown
          reduction through <HeartOfTheJadeSerpent />. It is vital to use this to reduce the
          cooldown on <ThunderFocusTea />, which you can even cast while channeling{' '}
          <CelestialConduit />. It also reduces <LifeCocoon /> which is awesome!
        </p>
      </SubSection>
      <SubSubSection title="Revival">
        <p>
          <Revival /> is your most powerful cooldown for burst healing in dungeons. Use this
          generally as an emergency button or a backup if you run out of other healing, or just find
          yourself in a situation where you need group-wide healing NOW.
        </p>
      </SubSubSection>
    </Section>
  )
}
