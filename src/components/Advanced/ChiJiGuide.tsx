import { Section } from '../Guide/Section.tsx'
import {
  AwakenedJadefire,
  BlackoutKick,
  ChiCocoon,
  ChiHarmony,
  ChiJi,
  ChiJiGustOfMists,
  CraneStyle,
  EnvelopingBreath,
  EnvelopingMist,
  FortifyingBrew,
  GiftOfTheCelestials,
  GustOfMists,
  InvokersDelight,
  JadeBond,
  JadeEmpowerment,
  JadefireStomp,
  JadefireTeachings,
  RapidDiffusion,
  RenewingMist,
  RisingMist,
  RisingSunKick,
  SecretInfusion,
  ShaohaosLessons,
  SpinningCraneKick,
  TeachingsOfTheMonastery,
  ThunderFocusTea,
  TigerPalm,
  Vivify,
  ZenPulse,
} from '../Common/WowheadLink/Spells.tsx'
import { SubSection } from '../Guide/SubSection.tsx'
import { SubSubSection } from '../Guide/SubSubSection.tsx'
import { OrderedList } from '../Common/OrderedList.tsx'
import { UnorderedList } from '../Common/UnorderedList.tsx'

export const chiJiGuideTitle = 'Advanced Chi-Ji'

export function ChiJiGuide() {
  return (
    <Section title={chiJiGuideTitle}>
      <p>
        <ChiJi /> is a very complex bird, with a lot going on. Let{"'"}s break him down, and get
        into the nitty-gritty on how to maximize his effectiveness.
      </p>
      <SubSection title="Mechanics" id="Chi-Ji Mechanics">
        <p>
          <ChiJi /> does <i>five</i> different things for you. What a powerful bird!
        </p>
        <SubSubSection title={<ChiCocoon />}>
          <p>
            A decent-sized absorb on 5 members. This is very useful for surviving group-wide
            one-shots. The absorb size with <JadeBond /> is double the <GiftOfTheCelestials /> size.
            The absorb scales with health and versatility, so things like <FortifyingBrew /> and{' '}
            <SecretInfusion /> will increase its size.
          </p>
          <p>
            When there will be several instances of damage, you generally summon <ChiJi /> before
            the damage goes out, and <ChiCocoon /> absorbs some of the initial hit. However, it can
            be optimal to let the initial hit of damage go out first, then shield the group. This
            will give you more to heal with your first <BlackoutKick />.
          </p>
        </SubSubSection>
        <SubSubSection
          title={
            <>
              Additional <GustOfMists />
            </>
          }
        >
          <p>
            Your <BlackoutKick />, <RisingSunKick />, and <SpinningCraneKick /> now produce three
            special <ChiJiGustOfMists />, each producing two regular mastery <GustOfMists />,
            therefore six <GustOfMists /> each in total. They were already producing Gusts with{' '}
            <CraneStyle />, which stacks with this. This is especially potent with <BlackoutKick />{' '}
            since it stacks with <TeachingsOfTheMonastery />. A fully-stacked <BlackoutKick /> will
            produce 30 <GustOfMists />!
          </p>
          <p>
            This is your main source of healing during <ChiJi />. Since <GustOfMists /> scales off
            Mastery, this means Mastery significantly increases <ChiJi /> healing.
          </p>
          <p>
            For the rest of the guide, I will refer to regular mastery <GustOfMists /> instead of{' '}
            <ChiJiGustOfMists />, to make it easier to compare.
          </p>
        </SubSubSection>
        <SubSubSection title={<EnvelopingBreath />}>
          <p>
            While he is out, casting <EnvelopingMist /> will cause <ChiJi /> applies this HoT to
            allies within 10 yards of your target. If your group is stacked, it will apply to the
            whole group. Its healing is fairly insignificant, but it does provide a 10% healing amp.
            This is not a huge increase, but it is enough such that you should try to cast{' '}
            <EnvelopingMist /> at least once soon after casting <ChiJi />, which will apply the HoT
            to your whole group.
          </p>
        </SubSubSection>
        <SubSubSection
          title={
            <>
              Instant <EnvelopingMist /> casts
            </>
          }
        >
          <p>
            Each <BlackoutKick /> during <ChiJi /> grants a stack of a buff that reduces the cast
            time of your next <EnvelopingMist /> by 33%. This mean that a <BlackoutKick /> with 2
            stacks of <TeachingsOfTheMonastery /> will make your next <EnvelopingMist /> instant.
            Knowing when to consume these stacks and when to ignore them is an important part of
            using <ChiJi /> correctly.
          </p>
        </SubSubSection>
        <SubSubSection title="Movement impairment immunity">
          <p>
            Finally, <ChiJi /> also makes you immune to snares (slows), and roots (prevent
            movement). This is niche but has many uses, such as breaking out of roots, allowing you
            to move during heavy slows, and sometimes even immuning damaging abilities that are
            classified as a root or snare.
          </p>
        </SubSubSection>
      </SubSection>
      <SubSection title="Usage">
        <SubSubSection title="Setup">
          <p>
            Before summoning the Red Crane, try to get 4 stacks of <TeachingsOfTheMonastery />, and
            have <JadefireTeachings /> active. If running <JadeBond />, you will need to refresh{' '}
            <JadefireTeachings /> while he is out.
          </p>
          <p>
            <SecretInfusion /> can be used to increase the power of <ChiJi />. Generally, Haste{' '}
            {'>'} Vers {'>'} Crit. If skipping most <EnvelopingMist /> casts, then Vers/Crit is
            better than Haste. Haste is also the only multiplicative stat, so you get more value
            from <SecretInfusion /> for haste if you have <InvokersDelight /> or Bloodlust.
          </p>
          <p>
            Never go for mastery with <SecretInfusion />, even though it <i>should</i> be an amazing
            stat for <ChiJi />, the amount of mastery provided by <SecretInfusion /> is incorrect
            and therefore undervalued compared to other stats.
          </p>
          <p>
            If running <ShaohaosLessons />, use this before anything else since it lasts so long.
            Fear is best, but be aware of breaching the GCD cap at 100% haste with{' '}
            <SecretInfusion /> and Bloodlust.
          </p>
        </SubSubSection>
        <SubSubSection title="Rotation">
          <p>
            There is a lot of flexibility in the rotation. I will do my best to explain all the
            choices and decisions to make, but in the end there are so many factors that I cannot
            cover them all. You will need to learn by practice!
          </p>
          <p>
            The core of your <ChiJi /> rotation is <TigerPalm /> <TigerPalm /> <BlackoutKick />.
            This produces the largest burst of healing from <BlackoutKick /> generating{' '}
            <GustOfMists />. Aside from this, the main decisions you must make are
          </p>
          <OrderedList>
            <li>
              Do I consume the instant <EnvelopingMist />?
            </li>
            <li>
              Do I cast <RisingSunKick />?
            </li>
            <li>Do I cast some other spell interrupting the rotation?</li>
          </OrderedList>
          <SubSubSection title="When to repeat the core rotation">
            <p>
              Simply repeating <TigerPalm /> <TigerPalm /> <BlackoutKick /> is a strong rotation in
              many situations where you just need that explosive healing, especially if you have
              decent Mastery levels. It has two weaknesses
            </p>
            <OrderedList>
              <li>
                It produces no HoTs, making you weaker when you exit <ChiJi />.
              </li>
              <li>
                It requires 2 GCDs of setup for the 1 big GCD of healing. Sometimes you do not have
                time to repeat the double
                <TigerPalm />.
              </li>
            </OrderedList>
            <p>
              Therefore, the ideal situation for this simple rotation is when there are large hits a
              few GCDs apart.
            </p>
          </SubSubSection>
          <SubSubSection
            title={
              <>
                When to use <EnvelopingMist />
              </>
            }
          >
            <p>
              The first main reason is to get <EnvelopingBreath /> going. You will want to do this
              in <i>most</i> situations, assuming you can afford the GCD.
            </p>
            <p>
              After that, generally use it if you can afford the GCD. It is usually an increase in
              long-term HPS. Just make sure you aren{"'"}t caught needing a big heal and you were
              behind by one GCD because you chose to send an <EnvelopingMist />. For safety, after{' '}
              <BlackoutKick />, you can stack <TigerPalm /> back up first, then judge to see if you
              have time.
            </p>
            <p>
              When you use <EnvelopingMist />, think about which target you want the 30% amp on. If
              the only targets you are concerned for already have <EnvelopingMist />, then it might
              not be worth casting.
            </p>
          </SubSubSection>
          <SubSubSection
            title={
              <>
                When to use <RisingSunKick />
              </>
            }
          >
            <p>
              Casting <RisingSunKick /> during <ChiJi /> has several benefits.
            </p>
            <OrderedList>
              <li>
                Extends your <EnvelopingMist />s with <RisingMist />
              </li>
              <li>
                Generates a <ChiHarmony /> with <RapidDiffusion />, increasing your next big{' '}
                <BlackoutKick />.
              </li>
              <li>
                Generates 8 <GustOfMists />. Compare to a stacked <BlackoutKick /> which is at least
                30 <GustOfMists /> per 3 GCDs, which is 10 <GustOfMists /> per GCD.
              </li>
              <p>
                The main one to <i>think</i> about is the first - extending <EnvelopingMist />. If
                you just sent an <EnvelopingMist />, and you do not need the immediate burst of
                healing from a <BlackoutKick />, then <RisingSunKick /> is a great GCD.
              </p>
            </OrderedList>
          </SubSubSection>
          <SubSubSection title="Rot rotation">
            <p>
              Assuming there is no urgency in your healing, the best rotation for rot healing is{' '}
              <TigerPalm /> <TigerPalm /> <BlackoutKick /> <EnvelopingMist /> <RisingSunKick />.
              Send a fully stacked <BlackoutKick />, consume the instant <EnvelopingMist />, and
              extend it with <RisingMist />.
            </p>
          </SubSubSection>
          <SubSubSection title="Ramping">
            <p>
              You can ramp for <ChiJi />, just as you can ramp for any of your other healing. One
              thing that is different, is that you ideally summon <ChiJi /> first, then hard-cast{' '}
              <EnvelopingMist /> to get <EnvelopingBreath /> going, then the damage hits and you{' '}
              <BlackoutKick />.
            </p>
          </SubSubSection>
          <SubSubSection title="Other spells during Chi-Ji">
            <p>
              Ideally, you stick to the 4 core spells during <ChiJi />: <TigerPalm />,{' '}
              <BlackoutKick />, <RisingSunKick />, <EnvelopingMist />. Generally you will want to
              save any other cooldowns and procs to use outside of <ChiJi />. There are, as always,
              exceptions.
            </p>
            <UnorderedList>
              <li>
                Keep up your <JadefireTeachings /> buff! Remember this can be done with either{' '}
                <JadefireStomp /> or <ThunderFocusTea />.
              </li>
              <li>
                <ThunderFocusTea /> for <SecretInfusion /> is good, only use it on <RisingSunKick />{' '}
                or <EnvelopingMist />.
              </li>
              <li>
                <Vivify />: if you have a lot of healing amps out one ally, that ally is low on
                health, and you have an <ZenPulse />, then <Vivify /> <i>can</i> be a not-horrible
                choice.
              </li>
              <li>
                <RenewingMist />: not worth pressing during <ChiJi />.
              </li>
              <li>
                <JadeEmpowerment />: avoid using this during <ChiJi /> at all costs. This is your
                other main healing coverage and you want to save the charges!
              </li>
            </UnorderedList>
          </SubSubSection>
        </SubSubSection>
        <SubSubSection title={<SpinningCraneKick />}>
          <p>
            IMPORTANT NOTE: this is <i>almost always</i> less healing than the simple <TigerPalm />{' '}
            <TigerPalm /> <BlackoutKick /> rotation. I recommend against this unless you are very
            comfortable with damage intake and <SpinningCraneKick />.
          </p>
          <p>
            <ChiJi /> <i>does</i> have an interaction with <SpinningCraneKick />, causing it to
            produce 6 <GustOfMists />. At a large target count, you can use <ChiJi /> as a healing
            increase for your <SpinningCraneKick /> spam. Do note that <AwakenedJadefire /> does not
            benefit from healing amps, which includes <EnvelopingBreath />.
          </p>
          <p>
            One way to think about the healing it is that <SpinningCraneKick /> generates 6{' '}
            <GustOfMists /> per GCD, while <BlackoutKick /> generates 30 <GustOfMists /> per 3 GCDs,
            which is 10 <GustOfMists /> per GCD.
          </p>
        </SubSubSection>
      </SubSection>
      <SubSection title="Talents" id="Chi-Ji Talents">
        <SubSubSection title={<JadeBond />}>
          <p>
            Getting 5 free <EnvelopingMist />s on your group will make you a god while they are out.
            Keep in mind that this does not proc <EnvelopingBreath />. It is <i>very</i> important
            to extend these 5 <EnvelopingMist />s with <RisingSunKick />.
          </p>
        </SubSubSection>
        <SubSubSection title={<InvokersDelight />}>
          <p>
            This gives 20% haste during <ChiJi /> which is its best stat!
          </p>
          <p>
            Note that this makes <ChiJi /> a <i>dps</i> increase. If you are in a situation where
            you won{"'"}t need the healing from <ChiJi /> until he{"'"}s up again, feel free to send
            him for damage.
          </p>
        </SubSubSection>
      </SubSection>
    </Section>
  )
}
