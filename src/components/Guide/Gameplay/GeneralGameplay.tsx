import { SubSection } from '../SubSection.tsx'
import {
  AncientTeachings,
  BlackoutKick,
  LotusInfusion,
  RapidDiffusion,
  RenewingMist,
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
        of <AncientTeachings /> and <WayOfTheCrane /> to heal through your damage.
      </p>
      <p>
        Default to using your standard melee rotation to heal by dealing damage. This is also known
        as maintenance healing.
      </p>
      <OrderedList>
        <li>
          <RisingSunKick />
        </li>
        <li>
          <BlackoutKick /> at 2 or 4 stacks of <TeachingsOfTheMonastery /> (generally 2)
        </li>
        <li>
          <TigerPalm />
        </li>
      </OrderedList>
      <p>
        These spells heal your group through <AncientTeachings />. <RisingSunKick /> creates{' '}
        <RenewingMist /> through <RapidDiffusion />. <BlackoutKick /> resets your <RisingSunKick />{' '}
        through <TeachingsOfTheMonastery />.
      </p>
      <p>
        Use <ThunderFocusTea /> mostly on cooldown, exclusively on <RisingSunKick />. In Season 2 it
        is quite powerful, so hold on to it if there is heavy healing coming soon.
      </p>
      <p>
        Spread <RenewingMist /> when there is downtime. It is fairly week in Season 2, but still
        worth using for <LotusInfusion />.
      </p>
      <p>
        Watch my <Link href="https://www.twitch.tv/ortemismw">stream</Link> or{' '}
        <Link href="https://www.youtube.com/@OrtemisWow">youtube</Link> to learn! There’s an action
        tracker in the bottom center.
      </p>
    </SubSection>
  )
}
