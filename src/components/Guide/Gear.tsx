import { UnorderedList } from '../Common/UnorderedList.tsx'
import { Shadowmeld, SpinningCraneKick } from '../Common/WowheadLink/Spells.tsx'
import { Link } from '../Common/Link.tsx'
import { Section } from './Section.tsx'
import { SubSection } from './SubSection.tsx'
import {
  ArcanoweaveLining,
  DarkmoonSigilVoid,
  LitanyOfLightblindWrath,
} from '../Common/WowheadLink/Items.tsx'

export function Gear() {
  return (
    <Section title="Gear and Stats">
      <SubSection title="Stats">
        <p>
          TL;DR: Haste {'>'} Vers {'>'} Crit {'>'} Mastery
        </p>
        <UnorderedList>
          <li>
            <b>Haste</b>: our best stat. We want a lot of this, it’s easily the best stat for our
            healing.
          </li>
          <li>
            <b>Versatility</b>: our second best stat. It gives healing, damage, damage reduction,
            and increases the size of your absorbs. Things we all need for M+!
          </li>
          <li>
            <b>Critical Strike</b>: slightly more stat-efficient for HPS than vers, but versatility
            is better due to increasing absorbs and DR.
          </li>
          <li>
            <b>Mastery</b>: in theory, this stat looks pretty bad. It{"'"}s possible it will have
            some value in raid, but unlikely.
          </li>
        </UnorderedList>
      </SubSection>
      <SubSection title="Trinkets">
        <UnorderedList>
          <li>
            <LitanyOfLightblindWrath /> is your bis trinket in all content. It is extremely powerful
            in dungeons and has a strange interaction with <SpinningCraneKick /> causing it to
            create large absorbs in trash packs.
          </li>
          <li>
            Will update this section when I have more information. For now, see{' '}
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
          Night Elf {'>'} Dwarf {'>>'} Everything else
        </p>
      </SubSection>
    </Section>
  )
}
