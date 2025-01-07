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
        For the above reasons, I like to use <ThunderFocusTea /> mainly on <RisingSunKick />.
        Alternatively, using <ThunderFocusTea /> on <EnvelopingMist /> is also a great choice.
      </p>
      <p>
        The most common mistake I see from new Mistweavers are not being in melee enough. At the end
        of a dungeon, about 50% of your healing should come from <AncientTeachings /> and{' '}
        <GustOfMists />.
      </p>
      <p>
        Watch my <Link href="https://www.twitch.tv/ortemismw">stream</Link> to learn! All my VODs
        are public. There’s an action tracker at the bottom right.
      </p>
    </SubSection>
  )
}
