import {
  AncientTeachings,
  AugustDynasty,
  BlackoutKick,
  CelestialConduit,
  ChiHarmony,
  ChiJi,
  CracklingJadeLightning,
  EnvelopingMist,
  JadeEmpowerment,
  JadefireStomp,
  RenewingMist,
  Revival,
  SheilunsGift,
  TeachingsOfTheMonastery,
  TigerPalm,
  VeilOfPride,
  Vivify,
} from '../../Common/WowheadLink/Spells.tsx'
import { UnorderedList } from '../../Common/UnorderedList.tsx'
import { Link } from '../../Common/Link.tsx'
import { SubSection } from '../SubSection.tsx'

export const healingAoeTitle = 'AoE healing'

export function AoeHealing() {
  return (
    <SubSection title={healingAoeTitle}>
      <p>
        For very light damage, your melee rotation will be enough. If it does not keep up, then a{' '}
        <Vivify /> should be your goto spell.
      </p>
      <p>
        For heavier damage, you will need to rotate your bigger CDs. When damage is coming soon,
        send your hardcasted <RenewingMist /> out on your group for <ChiHarmony />, then use one or
        more of your cooldowns: <JadeEmpowerment />, <SheilunsGift />, <ChiJi />,{' '}
        <CelestialConduit />, or <Revival />. In general, use them in the aforementioned order, from
        lowest CD to highest CD. However, each one heals quite differently and have their own use
        cases.
      </p>
      <UnorderedList>
        <li>
          <JadeEmpowerment />: allows you to use <CracklingJadeLightning /> to heal up your group
          with <AncientTeachings />. This healing will scale linearly a little with the number of
          mobs, making it a little stronger at 5 targets. This is your go-to spell for any moderate
          damage.
        </li>
        <li>
          <SheilunsGift />: great for a single burst of healing on the entire group, especially when
          buffed by a couple <ChiHarmony />. Use this on short bursts of damage, such as the
          Alerting Shrill of the first boss in Ara-Kara, or the Forge Weapon of the second boss in
          Grim Batol. I love following this up with a <JadefireStomp /> into <Vivify /> if running
          Conduit’s <AugustDynasty />. This has a very short flexible CD of 30-40 seconds with{' '}
          <VeilOfPride />, so don’t hesitate to use it whenever the group needs healing. Avoid using
          below 7 stacks.
        </li>
        <li>
          <ChiJi />: your main healing CD, and your go-to for heavy consistent healing. Get 4 stacks
          of <TeachingsOfTheMonastery />, summon the bird, then <BlackoutKick /> for big healing,
          and finally send your instant <EnvelopingMist /> on whoever needs the most healing. Then
          repeat <TigerPalm /> <TigerPalm /> <BlackoutKick /> <EnvelopingMist />. You can skip the{' '}
          <EnvelopingMist /> if you need more immediate healing, but it will lower your long term
          healing.
        </li>
        <li className="ml-4">
          This ability does a lot of things and isn’t straightforward to use. I will expand on it
          further in the future. Meanwhile, Megasett has a wonderful{' '}
          <Link href="https://www.youtube.com/watch?v=Ct5S3M7Uyvg&t=1296s">video guide</Link> on
          Chi-Ji.
        </li>
        <li>
          <CelestialConduit />: a powerful CD that can heal through almost all mechanics on its own.
          Use it immediately after 1 tick of damage goes out since it immediately does a burst of
          healing.
        </li>
        <li>
          <Revival />: powerful button since its TWW buff. Use this generally as an emergency button
          or a backup if you run out of other healing, or just find yourself in a situation where
          you need group-wide healing NOW.
        </li>
      </UnorderedList>
    </SubSection>
  )
}
