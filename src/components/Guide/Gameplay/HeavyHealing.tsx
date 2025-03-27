import {
  AncientTeachings,
  BlackoutKick,
  CelestialConduit,
  ChiCocoon,
  ChiJi,
  CracklingJadeLightning,
  EnvelopingBreath,
  EnvelopingMist,
  GiftOfTheCelestials,
  GustOfMists,
  InvigoratingMists,
  InvokersDelight,
  JadeBond,
  JadeEmpowerment,
  LegacyOfWisdom,
  Revival,
  RisingSunKick,
  SacredToll,
  ShaohaosLessons,
  SheilunsGift,
  TeachingsOfTheMonastery,
  ThunderFocusTea,
  TigerPalm,
  VeilOfPride,
  Vivify,
  ZenPulse,
} from '../../Common/WowheadLink/Spells.tsx'
import { Link } from '../../Common/Link.tsx'
import { SubSection } from '../SubSection.tsx'
import { SubSubSection } from '../SubSubSection.tsx'
import { ConduitOfTheCelestials } from '../../Common/SpecialTexts.tsx'
import { rampingTitle } from './Ramping.tsx'

export const heavyHealingTitle = 'Heavy healing'

export function HeavyHealing() {
  return (
    <SubSection title={heavyHealingTitle}>
      <p>
        For a moderate burst of healing, the simplest spell to heal with is an instant <Vivify />,
        preferably with <ZenPulse />. This will cleave to the group with <InvigoratingMists />. Be
        sure to main target the lowest health member.
      </p>
      <p>
        For heavier damage, you will need to rotate your bigger CDs. When damage is coming soon, use
        one or more of your cooldowns: <JadeEmpowerment />, <SheilunsGift />, <ChiJi />,{' '}
        <CelestialConduit />, or <Revival />. In general, use them in the aforementioned order, from
        lowest CD to highest CD. However, each one heals quite differently and has its own use case.
        Mistweaver is currently heavily reliant on its healing amps to do significant healing, even
        with cooldowns. Be sure to read the <Link href={`#${rampingTitle}`}>Ramping</Link> section
        below for more details on this.
      </p>
      <SubSubSection title={<JadeEmpowerment />}>
        <p>
          Pressing <ThunderFocusTea /> grants a stack of the <JadeEmpowerment /> buff which has an
          infinite duration and stacks up to 2. This buff causes your next{' '}
          <CracklingJadeLightning /> to heal your group with <AncientTeachings />. This healing will
          scale linearly with the number of mobs, up to 60% stronger at 5 targets, but it is still
          potent at 1 target!
        </p>
        <p>
          Following its 11.1 buffs, this is the most important healing cooldown in your arsenal. Its
          flexibility with multiple stacks and infinite duration mean you can go into a pull with 2
          charges banked, and <ThunderFocusTea /> off cooldown for another one soon after. If there
          is no heavy healing to do, try to always have at least 1 charge banked, and avoid wasting
          charges.
        </p>
        <p>
          You cannot move while channeling <CracklingJadeLightning />, and if you do, you will lose
          the charge and all its healing. So it is paramount to stand in a spot where you will not
          need to move for the duration of the channel.
        </p>
      </SubSubSection>
      <SubSubSection title={<ChiJi />}>
        <p>
          This bird is your main, most powerful healing CD, your go-to for heavy consistent healing.
          He grants an immediate shield with <ChiCocoon />, the ability to do heavy consistent
          healing through <GustOfMists />, and a healing amp through <EnvelopingBreath />.
        </p>
        <p>
          Get 4 stacks of <TeachingsOfTheMonastery />, summon the bird, then <BlackoutKick /> for
          big healing, and finally send your instant <EnvelopingMist /> on whoever needs the most
          healing. Then repeat <TigerPalm /> <TigerPalm /> <BlackoutKick /> <EnvelopingMist />. Skip
          the <EnvelopingMist /> for more immediate healing, but less long-term healing. Skip one{' '}
          <TigerPalm /> for more <EnvelopingMist /> long-term healing, but less immediate healing.
        </p>
        <p>
          If running <GiftOfTheCelestials />, he has a 1-minute cooldown and a 12 second duration.
          Use him often!
        </p>
        <p>
          If running <JadeBond />, he has a 2-minute cooldown and a 24 second duration. <JadeBond />{' '}
          also doubles the shield size, and blankets the group with <EnvelopingMist />. This makes
          the bird <i>extremely</i> powerful. The downside is that you must be much more careful of
          when you use him. Always think ahead to know if you will need <JadeBond /> in the next 2
          minutes. For example, in Rookery, you might want to hold <ChiJi /> on the single Diffuser
          pulls in order to have him up for the double diffuser pull.
        </p>
        <p>I will write a super in-depth guide on Chi-Ji in the future.</p>
      </SubSubSection>
      <SubSubSection title={<SheilunsGift />}>
        <p>
          Stacks every 8 seconds, or every 4 with <VeilOfPride />, up to 10 stacks. Casting it will
          heal based on the number of stacks. <LegacyOfWisdom /> makes this usable as a group heal,
          without which it is fairly useless for healing.
        </p>
        <p>
          Use this on short bursts of group-wide damage, such as <SacredToll /> used by the Paladins
          in Priory. This has a very short flexible CD of 30-40 seconds with <VeilOfPride />, so
          don’t hesitate to use it. Avoid using below 7 stacks.
        </p>
        <p>
          With <JadeEmpowerment /> and <ChiJi /> receiving major buffs in 11.1, <SheilunsGift /> has
          been lowered significantly in usefulness. In many dungeons our cooldown coverage is strong
          enough without the need for casting it. To avoid wasting the talent point,{' '}
          <ShaohaosLessons /> is a great talent to instead empower your other spells.
        </p>
        <p>
          IMPORTANT NOTE: For beginners, I highly recommend starting off with <VeilOfPride /> in
          every dungeon. If you find yourself not needing it, <i>then</i> consider dropping it for{' '}
          <ShaohaosLessons />. See my dungeon guides for talent recommendations.
        </p>
        <p>
          With <ShaohaosLessons />, you can continue to run <LegacyOfWisdom /> and use it as a
          group-wide heal every 80 seconds, on top of getting the buff. Alternatively, you can drop{' '}
          <LegacyOfWisdom /> for <InvokersDelight />. Now, you essentially ignore the healing aspect
          of <SheilunsGift /> and use it <i>before</i> your other healing or damage spells to buff
          them.
        </p>
      </SubSubSection>
      <SubSubSection title={<CelestialConduit />}>
        <p>
          A decently powerful CD. It does more healing than <JadeEmpowerment /> at 1-2 enemy
          targets, but less at 5 targets.
        </p>
        <p>
          Reactivate it if you need the extra healing and absorb immediately, <i>or</i> if your{' '}
          <ThunderFocusTea /> and <RisingSunKick /> are both off cooldown for at least 8 seconds. It
          is simpler not to reactivate.
        </p>
        <p>
          Note that much of the healing power of <ConduitOfTheCelestials /> comes from various other
          nodes in the tree, and not just this active.
        </p>
      </SubSubSection>
      <SubSubSection title={<Revival />}>
        <p>
          Very powerful button since its TWW buff. Use this generally as an emergency button or a
          backup if you run out of other healing, or just find yourself in a situation where you
          need group-wide healing NOW.
        </p>
      </SubSubSection>
    </SubSection>
  )
}
