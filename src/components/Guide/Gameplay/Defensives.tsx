import { SubSection } from '../SubSection.tsx'
import { UnorderedList } from '../../Common/UnorderedList.tsx'
import {
  BounceBack,
  DanceOfTheWind,
  DiffuseMagic,
  ExpelHarm,
  FortifyingBrew,
  JadefireTeachings,
  JadeSanctuary,
  LifeCocoon,
  SecretInfusion,
  ThunderFocusTea,
} from '../../Common/WowheadLink/Spells.tsx'
import { ConduitOfTheCelestials } from '../../Common/SpecialTexts.tsx'

export function Defensives() {
  return (
    <SubSection title="Defensives">
      <p>
        Using your defensives to the fullest extent is a very important part of Mythic+. You should
        always be thinking and planning around your defensives whenever there is significant damage
        to heal.
      </p>
      <UnorderedList>
        <li>
          <FortifyingBrew />: 20% DR and 20% HP for 15 seconds on a 90 sec CD. Your goto defensive
          when you need a button to press. Not the most impactful, but has a reasonably short
          cooldown at 90 seconds. Notably lasts for 15 seconds, one of the longest lasting
          defensives in the game, so you can often use this to cover 2 mechanics.
        </li>
        <li>
          <DiffuseMagic />: 60% magic DR for 6 seconds on a 90 sec CD. Very powerful, but short
          lasting. Use this for big spiky overlaps, and make sure you time it well to cover as much
          of the damage as possible.
        </li>
        <li>
          <JadeSanctuary />: 15% DR for about 12 seconds on a 90 sec CD. An extra defensive for
          those running <ConduitOfTheCelestials />. Not as impactful as the others, but still worth
          considering when planning your defensives rotation on a fight. Note that your main
          defensives all have 90 second CDs, so you can rotate them on 30 second mechanics.
        </li>
        <li>
          <ThunderFocusTea /> + <ExpelHarm />: a small 16% HP shield, which combined with{' '}
          <SecretInfusion /> gives you a great tool on a short cooldown for surviving one-shot
          mechanics.
        </li>
        <li>
          <DanceOfTheWind />: very overpowered, essentially makes you immune to physical damage
          mechanics unless there is regular physical damage going out.
        </li>
        <li>
          <JadefireTeachings />: the 5% stamina which can help you live one-shots.
        </li>
        <li>
          <BounceBack />: a great passive DR that is impossible to play around.
        </li>
        <li>
          <LifeCocoon />: as a reasonably tanky class with good defensives, avoid using this in your
          defensive rotation unless you absolutely need to.
        </li>
      </UnorderedList>
    </SubSection>
  )
}
