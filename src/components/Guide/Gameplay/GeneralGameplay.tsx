import { SubSection } from '../SubSection.tsx'
import {
  AncientTeachings,
  BlackoutKick,
  RapidDiffusion,
  RenewingMist,
  RisingMist,
  RisingSunKick,
  SpinningCraneKick,
  TeachingsOfTheMonastery,
  ThunderFocusTea,
  TigerPalm,
  WayOfTheCrane,
} from '../../Common/WowheadLink/Spells.tsx'
import { OrderedList } from '../../Common/OrderedList.tsx'
import { Link } from '../../Common/Link.tsx'
import { SubSubSection } from '../SubSubSection.tsx'

export function GeneralGameplay() {
  return (
    <SubSection title="General gameplay">
      <p>
        You are a melee spec and you should be in melee <b>most</b> of the time. You will make use
        of <AncientTeachings /> and <WayOfTheCrane /> to heal through your damage.
      </p>
      <SubSubSection title="1-4 targets">
        <p>
          At 1-4 enemy targets, perform your standard melee rotation to heal by dealing damage. This
          is also known as maintenance healing.
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
          These spells heal your group through <AncientTeachings />. <RisingSunKick /> creates and
          extends <RenewingMist /> through <RapidDiffusion /> + <RisingMist />. <BlackoutKick />{' '}
          resets your <RisingSunKick /> through <TeachingsOfTheMonastery />.
        </p>
      </SubSubSection>
      <SubSubSection title="5+ targets">
        <p>
          At 5+ enemy targets, your healing mainly comes from <SpinningCraneKick /> through{' '}
          <WayOfTheCrane />. Note that <SpinningCraneKick /> scales with number of targets, so it
          will be extremely powerful at 15 targets, but you may struggle at 5 targets.
        </p>
      </SubSubSection>
      <SubSubSection title="Other maintenance">
        <p>Regardless of the number of targets, there are two more important maintenance tasks</p>
        <OrderedList>
          <li>
            Use <ThunderFocusTea /> on cooldown, almost exclusively on <RisingSunKick />. Rarely,
            you hold it for a few seconds for a healing event, but don{"'"}t leave it off CD for
            long because it has a lot of benefits.
          </li>
          <li>
            Keeping <RenewingMist /> up on your entire team. In dungeons, this requires hard-casting
            it a little, but not a lot, since <RapidDiffusion /> and <RisingMist /> do a lot of the
            heavy lifting. I generally hardcast it 2-3 times per minute.
          </li>
        </OrderedList>
      </SubSubSection>
      <p>
        Watch my <Link href="https://www.twitch.tv/ortemismw">stream</Link> or{' '}
        <Link href="https://www.youtube.com/@OrtemisWow">youtube</Link> to learn! There’s an action
        tracker in the bottom center.
      </p>
    </SubSection>
  )
}
