import { UnorderedList } from '../Common/UnorderedList.tsx'
import {
  ChiJi,
  CraneStyle,
  GustOfMists,
  RisingSunKick,
  SecretInfusion,
  Shadowmeld,
} from '../Common/WowheadLink/Spells.tsx'
import { Link } from '../Common/Link.tsx'
import { Section } from './Section.tsx'
import { SubSection } from './SubSection.tsx'
import {
  ArcanoweaveLining,
  DarkmoonSigilVoid,
  SoulcoilerRitualVessel,
} from '../Common/WowheadLink/Items.tsx'

export function Gear() {
  return (
    <Section title="Gear and Stats">
      <SubSection title="Stats">
        <p>
          TL;DR: Haste {'>'} Mastery {'>'} Crit {'/'} Vers
        </p>
        <UnorderedList>
          <li>
            <b>Haste</b>: our best stat, since it reduces the CD of <RisingSunKick />. Aim for
            30-35% baseline.
          </li>
          <li>
            <b>Mastery</b>: extremely powerful this season, we want a LOT of this. It{"'"}s
            currently unclear how much we want, but it{"'"}s possible we{"'"}re stacking it all the
            way. Mastery empowers <GustOfMists />, which is generated through <CraneStyle /> and{' '}
            <ChiJi />.
          </li>
          <li>
            <b>Critical Strike</b>: slightly more stat-efficient for HPS than vers, good stat to
            have, but not as powerful as Mastery in dungeons.
          </li>
          <li>
            <b>Versatility</b>: a great stat for M+. It gives healing, damage, damage reduction, and
            increases the size of healing absorbs. We get 8% for free from <SecretInfusion />, but
            still worth getting more for surviving high keys one-shots, which are more prevalent
            this season.
          </li>
        </UnorderedList>
      </SubSection>
      <SubSection title="Trinkets">
        <UnorderedList>
          <li>
            <SoulcoilerRitualVessel /> is your bis trinket in all content. It is extremely powerful
            in dungeons. I do not have one yet sadly so cannot say more.
          </li>
          <li>
            For your second trinket, grab the highest stat stick from{' '}
            <Link href="https://questionablyepic.com/live/trinkets">QELive</Link>.
          </li>
        </UnorderedList>
      </SubSection>
      <SubSection title="Embellishments">
        <UnorderedList>
          <li>
            Bis is simply 2x <ArcanoweaveLining /> on cloak and wrists.
          </li>
          <li>
            Until then, if you have a crafted weapon, use <DarkmoonSigilVoid />.
          </li>
        </UnorderedList>
      </SubSection>
      <SubSection title="Crafting">
        <p>Craft a staff, then whatever slot is the largest upgrade.</p>
      </SubSection>
      <SubSection title="Race">
        <p>
          The best race for M+ is Night Elf, due to <Shadowmeld />. This ability is extremely
          overpowered. It is very flexible and has many many uses, especially on healers:
        </p>
        <UnorderedList>
          <li>
            Cancelling a cast being made on you. This sometimes trivializes entire boss mechanics.
          </li>
          <li>
            Dropping combat in case you butt pull, if you fail a skip, or to intentionally skip a
            mob. If your whole group fails a skip, you can then mass rez.
          </li>
          <li>Drinking mid-pull.</li>
          <li>Resurrecting a teammate mid-pull without using a battle rez.</li>
        </UnorderedList>
        <p>
          The only other strong option is Dwarf. It is not as flexible as Night Elf, but very
          consistently useful in many dungeons.
        </p>
        <p>
          Night Elf {'>'} Dwarf {'>>>'} Everything else
        </p>
      </SubSection>
    </Section>
  )
}
