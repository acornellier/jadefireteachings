import { UnorderedList } from '../Common/UnorderedList.tsx'
import {
  ChiJi,
  CraneStyle,
  GustOfMists,
  JadeEmpowerment,
  Shadowmeld,
} from '../Common/WowheadLink/Spells.tsx'
import {
  BindingOfBinding,
  DarkmoonSigilAscension,
  DuskthreadLining,
  ElusiveBlasphemite,
  FracturedGemstoneLocket,
  WrithingArmorBanding,
} from '../Common/WowheadLink/Items.tsx'
import { Link } from '../Common/Link.tsx'
import { Section } from './Section.tsx'
import { SubSection } from './SubSection.tsx'

export function Gear() {
  return (
    <Section title="Gear and Stats">
      <SubSection title="Stats">
        <p>
          STATS DISCLAIMER: It is very hard to know what the best stat distribution is for healers.
          I get asked a lot for exactly what percent they want for each stat. I do not know our
          ideal stat weights! If someone claims to know, they lie! Especially in dungeons, it’s very
          feelycrafty. The good news is that all stats are good on Mistweaver, with Haste clearly
          ahead.
        </p>
        <p>
          I am currently going for Haste {'>'} Versatility {'>'} Critical Strike {'>='} Mastery. Do
          not go above 30% in any stat, and prioritize Haste and Versatility. But do not panic about
          having Crit and Mastery, they are fine stats, not significantly behind Versatility.
        </p>
        <UnorderedList>
          <li>
            <b>Haste</b>: our best stat. We want a lot of this, it’s easily the best stat for our
            healing. For S1, you probably want around 30%.
          </li>
          <li>
            <b>Versatility</b>: the higher the key goes, the stronger this stat is due to the
            survivability aspect. At very high keys, living becomes more important than anything.
          </li>
          <li>
            <b>Critical Strike</b>: a good stat for pure throughput - damage and healing.
          </li>
          <li>
            <b>Mastery</b>: <GustOfMists />. Buffed a lot in TWW and reasonably strong now. If you
            like to play around <ChiJi /> and your melee rotation with <CraneStyle /> like I do,
            your mastery will do a lot of healing. That said, <JadeEmpowerment /> does not benefit
            from mastery and it is doing most of the heavy lifting in trash pulls these days, which
            reduces the important of <ChiJi />.
          </li>
        </UnorderedList>
      </SubSection>
      <SubSection title="Race">
        <p>
          In my opinion, the best overall race for M+ is Night Elf, due to <Shadowmeld />. I think
          this ability is extremely overpowered. It is very flexible and has many many uses,
          especially on healers:
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
          The only other strong option is Dwarf, which can be stronger or weaker than Night Elf
          depending on the season. It is not as flexible as Night Elf, but very consistently useful
          in many dungeons.
        </p>
        <p>
          Night Elf {'>='} Dwarf {'>>'} Everything else
        </p>
      </SubSection>
      <SubSection title="Trinkets">
        <UnorderedList>
          <li>COMING SOON</li>
        </UnorderedList>
      </SubSection>
      <SubSection title="Embellishments">
        <UnorderedList>
          <p>
            Embellishments are currently pretty weak in general. None of the healing embellishment
            are very impactful, so I recommend simply going for the highest damage embellishment.
          </p>
          <li>
            <BindingOfBinding />: gives your allies stats, increasing their damage!
          </li>
          <li>
            <DuskthreadLining />: you spend a surprising amount of time above 80%, so this is
            largely just free versatility.
          </li>
          <li>
            <FracturedGemstoneLocket />: also gives your allies stats, increasing their damage! The
            only problem is you really want the Sikran neck from raid.
          </li>
        </UnorderedList>
        The raid combo is not strong Mythic+. But it is not the worst thing ever, and again
        embellishments are fairly weak this tier.
        <UnorderedList>
          <li>
            <DarkmoonSigilAscension />: best raid embellishment, very bad in M+ because it falls off
            out of combat
          </li>
          <li>
            <WrithingArmorBanding />: only used in raid to buff <DarkmoonSigilAscension />
          </li>
        </UnorderedList>
      </SubSection>
      <SubSection title="Gems">
        <p>
          <ElusiveBlasphemite /> is OP, we want to buff it as much as possible! Use this, then have
          as many other varied gems as possible that fit your desired stat weights. Get a stamina
          gem too! Don{"'"}t worry about optimizing too much, remember all stats are good on MW.
        </p>
      </SubSection>
      <SubSection title="Other consumables">
        <p>
          The{' '}
          <Link href="https://www.wowhead.com/guide/classes/monk/mistweaver/enchants-gems-pve-healer#consumables">
            Wowhead guide
          </Link>{' '}
          is good for this. I will come back here later and give some more details.
        </p>
      </SubSection>
    </Section>
  )
}
