import { SubSection } from '../SubSection.tsx'
import {
  AncientTeachings,
  AwakenedJadefire,
  BlackoutKick,
  EnvelopingMist,
  GustOfMists,
  JadefireStomp,
  JadefireTeachings,
  RapidDiffusion,
  RenewingMist,
  RisingMist,
  RisingSunKick,
  SpinningCraneKick,
  TeachingsOfTheMonastery,
  ThunderFocusTea,
  TigerPalm,
} from '../../Common/WowheadLink/Spells.tsx'
import { OrderedList } from '../../Common/OrderedList.tsx'
import { Link } from '../../Common/Link.tsx'

export function GeneralGameplay() {
  return (
    <SubSection title="General gameplay">
      <p>
        You are a melee spec and you should be in melee <b>most</b> of the time. It’s very important
        that you maintain your <JadefireTeachings /> and <AwakenedJadefire /> buffs through{' '}
        <JadefireStomp />, and perform your single target rotation:
      </p>
      <OrderedList>
        <li>
          <RisingSunKick />
        </li>
        <li>
          <BlackoutKick /> at 3-4 stacks of <TeachingsOfTheMonastery />
        </li>
        <li>
          <TigerPalm />
        </li>
      </OrderedList>
      <p>
        All these spells will perform maintenance healing on your group through <AncientTeachings />
        . <RisingSunKick /> will create and extend <RenewingMist /> thanks to <RapidDiffusion /> +{' '}
        <RisingMist />. <BlackoutKick /> resets your <RisingSunKick /> thanks to{' '}
        <TeachingsOfTheMonastery />.
      </p>
      <p>
        For the above reasons, I like to use <ThunderFocusTea /> on <RisingSunKick /> pretty much on
        cooldown. Alternatively, using <ThunderFocusTea /> on <EnvelopingMist /> is also a great
        choice.
      </p>
      <p>The two most common mistakes I see from new Mistweavers are the following</p>
      <OrderedList>
        <li>Not being in melee enough. You must be in melee for the above reasons.</li>
        <li>
          Using <SpinningCraneKick /> too much. While it is a damage increase at 4 targets, it is
          only a healing increase at around 8 targets!
        </li>
      </OrderedList>
      <p>
        At the end of a dungeon, about 30% of your healing should come from <AncientTeachings /> and{' '}
        <GustOfMists />.
      </p>
      <p>
        Watch my <Link href="https://www.twitch.tv/ortemismw">stream</Link> to learn! All my VODs
        are public. There’s an action tracker at the bottom right.
      </p>
    </SubSection>
  )
}
