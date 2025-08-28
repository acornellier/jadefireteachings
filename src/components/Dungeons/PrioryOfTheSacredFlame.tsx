import { DungeonSection } from './DungeonSection.tsx'
import { BossSubSection } from './BossSubSection.tsx'
import {
  BlindingLight,
  Caltrops,
  CastigatorsShield,
  ChiJi,
  DisruptingShout,
  DivineJudgment,
  HammerOfPurity,
  HolyRadiance,
  Impale,
  InnerFire,
  JadeEmpowerment,
  JadefireTeachings,
  LifeCocoon,
  Purification,
  Revival,
  RingOfPeace,
  SacredToll,
  SacrificialPyre,
  SavageMauling,
  SoothingMist,
  TeachingsOfTheMonastery,
  Thunderclap,
  TigerPalm,
  VindictiveWrath,
  Vivify,
} from '../Common/WowheadLink/Spells.tsx'
import { SubSubSection } from '../Guide/SubSubSection.tsx'
import { NotableTrash } from './NotableTrash.tsx'
import { OrderedList } from '../Common/OrderedList.tsx'
import { Link } from '../Common/Link.tsx'
import { UnorderedList } from '../Common/UnorderedList.tsx'
import { MasterOfHarmony } from '../Common/SpecialTexts.tsx'

export function PrioryOfTheSacredFlame() {
  return (
    <DungeonSection
      title="Priory of the Sacred Flame"
      video="https://www.youtube.com/watch?v=F9_7NNhRmMk"
      tree="either"
    >
      <BossSubSection title="Captain Dailcry" difficulty="medium">
        <p>
          If your group goes right, this is an easy boss. Be sure to top people for the big AoE, and
          participate in the kick rotation.
        </p>
        <p>
          If your group goes left, then you have to deal with Elaena during the boss fight.{' '}
          <HolyRadiance /> does light ticking damage over 8 seconds, so have <i>some</i> healing for
          it. If totally dry, you can ramp for it. The only real risk of death on this fight is an
          overlap of <HolyRadiance /> with <SavageMauling />, so it is important to be aware of this
          timer, and keep the group topped during the <HolyRadiance /> where <SavageMauling /> will
          go out (should be the third). Meld and Feign Death cancel <SavageMauling />!
        </p>
        <p>
          The tank is going to take a beating, so be sure to dispel <DivineJudgment /> immediately,
          and watch their health, helping with <SoothingMist /> if necessary.
        </p>
        <p>
          Make sure you are exiting this boss with as many healing cooldowns and defensives as
          possible, as you are now entering Paladin Land.
        </p>
      </BossSubSection>
      <BossSubSection title="Baron Braunpyke" difficulty="medium">
        <p>
          This boss is quite complex with 4 abilities, plus empowered versions of each ability
          through <VindictiveWrath />. It can feel chaotic, but once you understand the pattern and
          strategy, it is reasonably simple. The boss will repeat the following pattern every 35
          seconds.
        </p>
        <OrderedList>
          <li>
            <HammerOfPurity /> - bait and move. When empowered, there are more circles.
          </li>
          <li>
            <SacrificialPyre /> - 3 soaks with a 30 second expiry. Each soak does a small burst of
            damage and a large dot to the player who soaked. When empowered, there are 5 soaks.
          </li>
          <li>
            <CastigatorsShield /> - a very large hit on several players. Always 8 seconds after a{' '}
            <SacrificialPyre />. When empowered it hits more players. This spell has a chance of not
            being cast.
          </li>
        </OrderedList>
        <p>
          <VindictiveWrath /> is used before every other set of mechanics. So the 2nd and 4th{' '}
          <SacrificialPyre /> will be empowered.
        </p>
        <p>
          Players should avoid soaking <SacrificialPyre /> until <i>after</i> <CastigatorsShield />{' '}
          has been cast, or until its timer has passed in case he skips it. If someone soaks early,
          do your best to top them for <CastigatorsShield />, as it hits very hard and has a very
          fast cast time, making it hard to spread. Your tank could soak one charge before the{' '}
          <CastigatorsShield />, but they should do so as quickly as possible to give you time to
          top the group.
        </p>
        <p>
          After the <CastigatorsShield />, the main player to soak the <SacrificialPyre /> should be
          the tank. But they may not be able to do every one, certainly not on the 5 charges.
          Non-tanks should only take 1 stack, unless they are immuning somehow. Be ready to heavy
          spot healing on whoever soaked, based on what defensives they have. You can help yourself
          with a stack with a defensive.
        </p>
      </BossSubSection>
      <BossSubSection title="Prioress Murpray" difficulty="hard">
        <p>
          This can be a very easy boss, or a pretty hard boss, based on RNG. <InnerFire /> gives her
          a buff which deals pulsing damage to the group. When she casts <BlindingLight />{' '}
          <i>without</i> <InnerFire />, there{"'"}s nothing to worry about. When she casts{' '}
          <BlindingLight /> while she has the <InnerFire /> buff, this is very scary. Be sure to use
          a defensive on this overlap, and try to send healing shortly before and after the{' '}
          <BlindingLight />. This is especially difficulty since you cannot hit the boss during the{' '}
          <BlindingLight />.
        </p>
        <p>
          On overlaps, you can continue channeling <JadeEmpowerment /> while facing away from the
          boss. Try to have your group as topped as possible right before <BlindingLight /> goes
          off.
        </p>
        <p>
          In the intermission, use <RingOfPeace /> as late as possible when the ads are about to hit
          the group.
        </p>
      </BossSubSection>
      <NotableTrash dungeon="priory">
        <p>
          This dungeon has some of the scariest trash of the season. You have healing to do in
          essentially every pack, so stay on your toes!
        </p>
        <SubSubSection title="First area trash">
          <p>
            Trash in the early area is quite scary, especially when pulled together which is often
            done as a big first pull.
          </p>
          <p>
            Sharpshooters randomly shoot players, which will kill when overlapping with other AoE
            abilities. This means you need to keep your group topped as much as possible whenever
            sharpshooters are in the pull. <ChiJi /> allows you to clear all the <Caltrops /> traps
            they create.
          </p>
          <p>
            Knights cast a heavy-hitting <DisruptingShout /> that damages the whole party. They also
            cast <Impale /> a random target for a larger initial hit, and a large long-lasting
            bleed. This is very scary when combined with other shoots and AoE hits. Be ready to use{' '}
            <LifeCocoon /> on them when the bleed overlaps with an AoE hit. Whenever a knight is in
            the pull, they should be the highest priority target to kill.
          </p>
          <p>
            Guard Captain Suleyman casts <Thunderclap />, a very hard-hitting group-wide ability.
            Ensure your group is topped for this, and have healing to top the group again after.{' '}
            <ChiJi /> immunes <Thunderclap /> damage, so make good use of this! Otherwise, use a
            defensive on every one of these.
          </p>
          <p>
            Lightspawns cast <Purification /> dealing heavy single-target damage to one player. Be
            ready to spot heal. This can be melded!
          </p>
        </SubSubSection>
        <SubSubSection title="Paladins">
          <p>
            Paladins are perhaps the scariest mobs of the whole season for healers. Only 2 is scary,
            but groups often pull 3 or even 4. They cast <SacredToll />, hitting the entire group
            for very heavy damage (same damage as a <Thunderclap /> !!). They naturally desync,
            causing them to always cast exactly 3.5 seconds apart. This means you will get 2, maybe
            3 GCDs to heal your group between hits. It also means that if you have 3 Paladins in a
            pack, they will (almost always) cast 3 times in succession, and then you will get a
            break for about 10 seconds.
          </p>
          <p>
            It is very important to have timers for this ability. As of writing this, bigwigs
            nameplate timers do not track this, but the{' '}
            <Link href="https://wago.io/twwdungeons">twwdungeons weakaura pack</Link> does. Have
            your group topped for the first one, and prepare yourself mentally for which spells you
            will use to heal. You also want to be aware of when a <SacredToll /> is the <i>last</i>{' '}
            of its set, to avoid wasting healing cooldowns after it.
          </p>
          <UnorderedList>
            <li>
              Always ramp before the initial <SacredToll />.
            </li>
            <li>
              Are you <MasterOfHarmony /> and you have a very powerful ramp? Simply spam{' '}
              <TigerPalm />.
            </li>
            <li>
              Do you have <ChiJi />? Have 4 <TeachingsOfTheMonastery /> stacks ready.
            </li>
            <li>
              Will you use <JadeEmpowerment />? Refresh your <JadefireTeachings /> shortly before{' '}
              <SacredToll />.
            </li>
            <li>
              Are you dry? Be ready to use emergency buttons like <Revival /> and health potions!
            </li>
          </UnorderedList>
          <p>
            Use <Vivify /> and <LifeCocoon /> on allies that you are unable to top between{' '}
            <SacredToll /> casts using your your AoE healing. Watching party defensives can help you
            predict who this will be. Use defensives proactively before the first <SacredToll /> of
            a set.
          </p>
          <p>
            It{"'"}s hard for me to give you a set rotation to follow since every group will pull
            these differently.
          </p>
        </SubSubSection>
        <SubSubSection title="Sir Braunpyke">
          <p>
            This is another rot fight, check my guides on Swampface for tips on how to heal rot.
            Your group should not pull anything on top of him, but if they do be wary of Footmen
            exploding. He does require a lot of healing, so do not underestimate this guy! Send all
            your cooldowns.
          </p>
        </SubSubSection>
      </NotableTrash>
    </DungeonSection>
  )
}
