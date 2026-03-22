import { SubSection } from '../SubSection.tsx'
import {
  AncientTeachings,
  BlackoutKick,
  JadefireTeachings,
  RapidDiffusion,
  RenewingMist,
  RisingMist,
  RisingSunKick,
  TeachingsOfTheMonastery,
  ThunderFocusTea,
  TigerPalm,
  WayOfTheCrane,
} from '../../Common/WowheadLink/Spells.tsx'
import { OrderedList } from '../../Common/OrderedList.tsx'
import { Link } from '../../Common/Link.tsx'

export function GeneralGameplay() {
  return (
    <SubSection title="General gameplay">
      <p>
        You are a melee spec and you should be in melee <b>most</b> of the time. You will make use
        of <JadefireTeachings /> and <WayOfTheCrane />, and perform your standard melee rotation to
        heal by dealing damage. This is also known as maintenance healing.
      </p>
      <OrderedList>
        <li>
          <RisingSunKick />
        </li>
        <li>
          <BlackoutKick /> at 2 or 4 stacks of <TeachingsOfTheMonastery />
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
        For the above reasons, I recommend using <ThunderFocusTea /> mainly on <RisingSunKick />.
      </p>
      <p>
        Your other main maintenance task is maintaning <RenewingMist />. Whenever there is
        non-trivial healing to do, your group should be blanketed in <RenewingMist />. In dungeons,
        this requires hard-casting it a little, but not a ton.
      </p>
      <p>
        Watch my <Link href="https://www.twitch.tv/ortemismw">stream</Link> or{' '}
        <Link href="https://www.youtube.com/@OrtemisWow">youtube</Link> to learn! There’s an action
        tracker in the bottom center.
      </p>
    </SubSection>
  )
}
