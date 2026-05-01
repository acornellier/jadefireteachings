import { SubSubSection } from '../SubSubSection.tsx'
import {
  BlackoutKick,
  CelestialConduit,
  ChiCocoon,
  ChiJi,
  ChiJiGustOfMists,
  EnvelopingMist,
  FocusedThunder,
  HeartOfTheJadeSerpent,
  JadeBond,
  LegacyOfWisdom,
  LifeCocoon,
  MorningBreeze,
  Revival,
  RisingSunKick,
  SheilunsGift,
  Spiritfont,
  StrengthOfTheBlackOx,
  ThunderFocusTea,
  UnityWithin,
} from '../../Common/WowheadLink/Spells.tsx'
import { OrderedList } from '../../Common/OrderedList.tsx'
import { LitanyOfLightblindWrath } from '../../Common/WowheadLink/Items.tsx'
import { Section } from '../Section.tsx'
import { SubSection } from '../SubSection.tsx'

export const healingCooldownsTitle = 'Healing cooldowns'

export function HealingCooldowns() {
  return (
    <Section title={healingCooldownsTitle}>
      <p>
        For a moderate burst of healing, the simplest spell to heal with is an instant{' '}
        <SheilunsGift />, hitting the whole group through <LegacyOfWisdom />. Ignore the clouds.
      </p>
      <p>
        When your group takes heavy damage, you will need to rotate your larger cooldowns:{' '}
        <CelestialConduit />, <LitanyOfLightblindWrath />, <Revival />, or <ChiJi />, generally in
        the above order. Avoid overlapping cooldowns.
      </p>
      <SubSection title="Emperor's Elixir">
        <p>
          This is a pretty small cooldown, but does a decent chunk of healing if you are running{' '}
          <MorningBreeze /> and <FocusedThunder />. You can <RisingSunKick iconOnly /> {'>'}{' '}
          <ThunderFocusTea iconOnly /> <RisingSunKick iconOnly /> {'>'} <ThunderFocusTea iconOnly />{' '}
          <RisingSunKick iconOnly /> {'>'} <RisingSunKick iconOnly />. You can also weave{' '}
          <SheilunsGift /> in between each <RisingSunKick />.
        </p>
      </SubSection>
      <SubSection title="Celestial Conduit">
        <p>
          <CelestialConduit /> is a very powerful cooldown. It does decent direct healing split
          among friendly targets, making it good regardless of number of friendly or enemy targets.
          However, its main power is through <UnityWithin />.
        </p>
        <OrderedList>
          <li>
            It grants a LOT of cooldown reduction through <HeartOfTheJadeSerpent />. It is vital to
            use this to reduce the cooldown on <ThunderFocusTea />, which you can even cast while
            channeling <CelestialConduit />. It also reduces <LifeCocoon /> which is awesome!
          </li>
          <li>
            It grants a more powerful <StrengthOfTheBlackOx />. Again be sure to use any{' '}
            <StrengthOfTheBlackOx /> proc you have before casting <CelestialConduit />.
          </li>
        </OrderedList>
      </SubSection>
      <SubSubSection title="Revival">
        <p>
          <Revival /> is your most powerful cooldown in dungeons. Use this generally as an emergency
          button or a backup if you run out of other healing, or just find yourself in a situation
          where you need group-wide healing NOW.
        </p>
      </SubSubSection>
      <SubSection title="Chi-Ji">
        <p>
          <ChiJi /> plays very differently from TWW, and is unfortunately pretty weak right now.
          Mainly just used for its shields, and the free <EnvelopingMist />s if running <JadeBond />
          . It does 3 things.
        </p>
        <OrderedList>
          <li>
            Shields your group for a large amount with <ChiCocoon />.
          </li>
          <li>
            Makes <EnvelopingMist /> an instant cast. This is not especially useful.
          </li>
          <li>
            Causes your <BlackoutKick /> to generate <ChiJiGustOfMists />. This is quite weak now.
            (Blizzard please buff this or our mastery and nerf something else {'<3'})
          </li>
        </OrderedList>
      </SubSection>
      <SubSection title="Spiritfont">
        <p>
          <Spiritfont /> is a pretty decent small cooldown. However I have not played with apex
          talents much so I don{"'"}t have much to share here. TODO: play with apex talents!
        </p>
      </SubSection>
    </Section>
  )
}
