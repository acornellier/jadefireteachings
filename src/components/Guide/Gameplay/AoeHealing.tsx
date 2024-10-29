import {
  AncientTeachings,
  AugustDynasty,
  CelestialConduit,
  ChiHarmony,
  ChiJi,
  CracklingJadeLightning,
  JadeEmpowerment,
  JadefireStomp,
  RenewingMist,
  Revival,
  SheilunsGift,
  VeilOfPride,
  Vivify,
} from '../../Common/WowheadLink/Abilities.tsx'
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
      <p>
        Another important note is that your smart healing spells <JadeEmpowerment />, <ChiJi /> and{' '}
        <CelestialConduit /> are especially powerful when few allies are being damaged. This makes
        them great for healing a single ally, such as the tank. Give the ally a <ChiHarmony />, use
        one of the cooldowns, and watch their HP bar soar!
      </p>
      <UnorderedList>
        <li>
          <JadeEmpowerment />: allows you to use <CracklingJadeLightning /> to heal up your group
          with <AncientTeachings />. This healing will scale linearly with the number of mobs up to
          5, so it will be quite weak on 1-2 targets, but increasingly strong up to 5 targets. At 5
          targets, this provides a huge amount of healing.
        </li>
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
        </li>
        <li className="ml-4">
          TODO: This ability does a lot of things and isn’t straightforward to use. I will expand on
          it further in the future. Meanwhile, Megasett has a wonderful{' '}
          <Link href="https://youtu.be/RTBiq9w1bCg?si=f0IZ9QvwCk_Su7FH">video guide</Link> on
          celestials.
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
