import { Header } from './Common/Header.tsx'
import { Link } from './Common/Link.tsx'
import { UnorderedList } from './Common/UnorderedList.tsx'
import {
  AncientTeachings,
  AugustDynasty,
  AwakenedJadefire,
  BlackoutKick,
  CelestialConduit,
  ChiBurst,
  ChiHarmony,
  ChiJi,
  Coalescence,
  CracklingJadeLightning,
  DanceOfChiJi,
  DiffuseMagic,
  EnvelopingMist,
  FortifyingBrew,
  GustOfMists,
  HeartOfTheJadeSerpent,
  JadeEmpowerment,
  JadefireStomp,
  JadefireTeachings,
  JadeSanctuary,
  RapidDiffusion,
  RenewingMist,
  Revival,
  RisingMist,
  RisingSunKick,
  SecretInfusion,
  SheilunsGift,
  SoothingMist,
  SpinningCraneKick,
  StrengthOfTheBlackOx,
  TeachingsOfTheMonastery,
  ThunderFocusTea,
  TigerPalm,
  VeilOfPride,
  VivaciousVivification,
  Vivify,
  ZenPulse,
} from './Common/WowheadLink/Abilities.tsx'

export const gameplayLabel = 'Gameplay'

export function Gameplay() {
  return (
    <>
      <Header Tag="h2">{gameplayLabel}</Header>
      <Header Tag="h3">General gameplay</Header>
      <p>
        You are a melee spec and you should be in melee <b>most</b> of the time. It’s very important
        that you maintain your <JadefireTeachings /> and <AwakenedJadefire /> buffs through{' '}
        <JadefireStomp />, and perform your single target rotation. This will perform maintenance
        healing on your group through <AncientTeachings />, and your <RisingSunKick /> will create
        and extend <RenewingMist /> thanks to <RapidDiffusion /> + <RisingMist />.
      </p>
      <p>
        For the above reasons, I like to use <ThunderFocusTea /> on <RisingSunKick /> pretty much on
        cooldown. Alternatively, using <ThunderFocusTea /> on <EnvelopingMist /> is also a great
        choice.
      </p>
      <p>
        At the end of a dungeon, about 30% of your healing should come from <AncientTeachings /> and{' '}
        <GustOfMists />.
      </p>
      <p>
        Watch my <Link href="https://www.twitch.tv/ortemismw">stream</Link> to learn! All my VODs
        are public. There’s an action tracker at the bottom right.
      </p>
      <Header Tag="h3">Spot healing</Header>
      <p>
        If an ally needs a single burst of healing, <Vivify /> is the spell for that. Generally you
        want to only use it if buffed by <VivaciousVivification />, and ideally also by <ZenPulse />{' '}
        and/or <AugustDynasty />. If you have time, and they need a large burst of healing, first
        give them <ChiHarmony /> (by casting <RenewingMist /> on them), then cast the <Vivify />.
      </p>
      <p>
        If an ally is taking large ticking damage over an extended period of time, then use{' '}
        <SoothingMist /> {'>'} <EnvelopingMist /> {'>'} <Vivify /> spam. The most common use case is
        the tank. Another case is a debuff on a dps or yourself, such as a Corrupt in Grim Batol, or
        a Dawnbreaker debuff from the minibosses.
      </p>
      <Header Tag="h3">Healing AoE</Header>
      <p>
        If performing your melee rotation, your group will automatically have <RenewingMist />{' '}
        already out. When damage is coming soon, send your hardcasted <RenewingMist /> out on your
        group for <ChiHarmony />, then use one or more of your cooldowns: <SheilunsGift />,{' '}
        <ChiJi />, <CelestialConduit />, or <Revival />. In general, use them in the aforementioned
        order, from lowest CD to highest CD. However, each one heals quite differently and have
        their own use cases.
      </p>
      <UnorderedList>
        <li>
          <SheilunsGift />: great for a single burst of healing on the entire group, especially when
          buffed by a couple <ChiHarmony />. Use this on short bursts of damage, such as the
          Alerting Shrill of the first boss in Ara-Kara, or the Forge Weapon of the second boss in
          Grim Batol. I love following this up with a <JadefireStomp /> into <Vivify /> if running
          Conduit’s <AugustDynasty />. This has a very short CD of 40 seconds with <VeilOfPride />,
          so don’t hesitate to use it whenever the group needs healing. Pretty useless below 7
          stacks.
        </li>
        <li>
          <ChiJi />: easily your strongest CD for sustained healing when you have 2-3 targets to
          hit, especially if you have decent mastery. This makes it very powerful in trash packs,
          such as the scarabs in early CoT. Some bosses also have cleave targets, such as
          Stichflesh.
          <p className="ml-6">
            TODO: This ability does a lot of things and isn’t straightforward to use. I will expand
            on it further in the future. Megasett has a nice video guide on it.
          </p>
        </li>
        <li>
          <CelestialConduit />: a powerful CD that can heal through almost all mechanics on its own.
          Use it immediately after 1 tick of damage goes out since it immediately does a burst of
          healing. Especially powerful when few targets are being damaged, since the healing is
          spread among all damaged targets. This makes it great for tank healing. Give the tank a{' '}
          <ChiHarmony />, press this, and watch their HP bar soar!
        </li>
        <li>
          <Revival />: powerful button since its TWW buff. Use this generally as an emergency button
          or a backup if you run out of other healing, or just find yourself in a situation where
          you need group-wide healing NOW.
        </li>
      </UnorderedList>
      <Header Tag="h3">Damage rotation</Header>
      This is for optimal damage and not for optimal healing!
      <UnorderedList>
        <li>
          <ChiBurst /> at 2+ targets or if running Master of Harmony
        </li>
        <li>
          <ThunderFocusTea /> + <RisingSunKick /> if running <SecretInfusion />
        </li>
        <li>
          <ThunderFocusTea /> + <CracklingJadeLightning /> if running <JadeEmpowerment />
        </li>
        <li>
          <SpinningCraneKick />
        </li>
        <UnorderedList className="ml-6">
          <li>
            On a <DanceOfChiJi /> Proc
          </li>
          <li>At 4+ targets with Conduit</li>
          <li>
            At 6+ targets with Master of Harmony. Keep in mind it doesn’t generate or drain
            vitality, and so is generally not advised unless there are more targets.
          </li>
          <li>For healing at 8+ targets</li>
        </UnorderedList>
        <li>
          <RisingSunKick />
        </li>
        <li>
          <BlackoutKick /> at 3-4 stacks of <TeachingsOfTheMonastery />
        </li>
        <li>
          <TigerPalm />
        </li>
      </UnorderedList>
      <p>
        <JadefireStomp /> is a damage increase over <SpinningCraneKick /> at 4-10 targets, but its
        targeting is pretty buggy.
      </p>
      <p>
        <CelestialConduit /> is technically a slight damage increase of highest priority at all
        group sizes, but you should almost always save it for healing.
      </p>
      <Header Tag="h3">Conduit gameplay</Header>
      <p>
        The main change is <CelestialConduit />, an extra active healing CD on 1.5 min CD. This is a
        powerful cooldown. See <Link href="#Healing AoE">Healing AoE</Link> above for more details
        on how to use it to heal.
      </p>
      <p>
        <CelestialConduit /> doubles up as a defensive when you run <JadeSanctuary />. Since{' '}
        <FortifyingBrew /> and <DiffuseMagic /> are also 1.5 min CD, you can rotate this alongside
        them on 30 second boss mechanics which are quite common, such as CoT’s last boss.
      </p>
      <p>
        <StrengthOfTheBlackOx /> gives you <EnvelopingMist /> procs that create a small shield on
        your party. This actually does pretty good HPS, so use these procs on cooldown whenever you
        need to do group healing.
      </p>
      <p>
        <HeartOfTheJadeSerpent /> gives you a bunch of CDR. It’s not worth planning your{' '}
        <SheilunsGift /> stacks around it.
      </p>
      <p>
        <AugustDynasty /> gives you a powerful single target <Vivify /> after a <JadefireStomp />. I
        love the healing combo <SheilunsGift /> {'>'} <JadefireStomp /> {'>'} <Vivify />.
      </p>
      <Header Tag="h3">Master of Harmony gameplay</Header>
      <p>
        Whenever there is healing to do, pop your <ThunderFocusTea />. Any allies healed by you will
        now receive a 20% healing buff from <Coalescence /> for 10-15 seconds. Overhealing will not
        give this buff! This is basically your only healing increase from the tree.
      </p>
      <p>
        Use <Link href="https://wago.io/H-BqbpSOt">this weakaura</Link> to track vitality
      </p>
      <p>Buff ID to track: 450769</p>
    </>
  )
}
