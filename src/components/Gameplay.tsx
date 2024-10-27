import { Header } from './Common/Header.tsx'
import {
  AncientTeachings,
  AugustDynasty,
  ChiHarmony,
  EnvelopingMist,
  GustOfMists,
  JadefireStomp,
  RapidDiffusion,
  RenewingMist,
  RisingMist,
  RisingSunKick,
  SoothingMist,
  ThunderFocusTea,
  VivaciousVivification,
  Vivify,
  ZenPulse,
} from './Common/Ability.tsx'
import { Link } from './Common/Link.tsx'

export function Gameplay() {
  return (
    <>
      <Header size="h2">Gameplay</Header>
      <Header size="h3">General gameplay</Header>
      <p>
        You are a melee spec and you should be in melee <b>most</b> of the time. It’s very important
        that you maintain your <AncientTeachings /> and <JadefireStomp /> buffs, and perform your
        single target rotation when there’s fewer than 8 mobs or so. This will perform maintenance
        healing on your group, and your <RisingSunKick /> will create and extend <RenewingMist />{' '}
        thanks to <RapidDiffusion /> + <RisingMist />.
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
      <Header size="h3">Spot healing</Header>
      <p>
        If an ally needs a single burst of healing, <Vivify /> is the spell for that. Generally you
        want to only use it if buffed by <VivaciousVivification />, and ideally also by <ZenPulse />{' '}
        and/or <AugustDynasty />. If you have time, and they need a large burst of healing, first
        give them <ChiHarmony /> (by casting <RenewingMist />) on them, then cast the <Vivify />.
      </p>
      <p>
        If an ally is taking large ticking damage over an extended period of time, then use{' '}
        <SoothingMist /> {'>'} <EnvelopingMist /> {'>'} <Vivify /> spam. The most common use case is
        the tank. Another case is a debuff on a dps or yourself, such as a Corrupt in Grim Batol, or
        a Dawnbreaker debuff from the minibosses.
      </p>
    </>
  )
}
