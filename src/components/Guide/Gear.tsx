import { UnorderedList } from '../Common/UnorderedList.tsx'
import { AncientTeachings, ChiJi, CraneStyle } from '../Common/WowheadLink/Spells.tsx'
import {
  AraKaraSacbrood,
  BindingOfBinding,
  DarkmoonSigilAscension,
  ElusiveBlasphemite,
  EmpoweringCrystal,
  FracturedGemstoneLocket,
  GaleOfShadows,
  SpymastersWeb,
  UnboundChangeling,
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
          ideal stat weights! Especially in dungeons, it’s very feelycrafty. The good news is that
          all stats are good on mistweaver, with Haste clearly ahead.
        </p>
        <p>
          I am currently going for Haste {'>'} Versatility {'>'} Mastery {'>'} Critical Strike.
        </p>
        <UnorderedList>
          <li>
            <b>Haste</b>: our best stat. We want a lot of this, it’s easily the best stat for our
            healing. For S1, you probably want around 30%.
          </li>
          <li>
            <b>Versatility</b>: the higher the key goes, the stronger this stat is. At very high
            keys, living becomes more important than anything. It also gives you more damage, which
            means more <AncientTeachings /> healing!
          </li>
          <li>
            <b>Mastery</b>: buffed a lot in TWW and quite strong now. If you like to play around{' '}
            <ChiJi /> and your melee rotation with <CraneStyle /> like I do, your mastery will do a
            lot of healing. You don’t want too much mastery though, like 120% or so feels good to
            me.
          </li>
          <li>
            <b>Critical Strike</b>: technically the best stat for pure throughput - damage and
            healing. If you don’t like the melee gameplay, this is probably the 2nd most important
            stat after haste. Otherwise, I think versatility and mastery are better.
          </li>
        </UnorderedList>
      </SubSection>
      <SubSection title="Trinkets">
        <p>
          Whichever of the stat trinkets listed below you have at the highest ilvl, with Gale of
          Shadows and Changeling at slightly higher priority. Trinkets are pretty boring this tier,
          just a bunch of stat sticks of similar power.
        </p>
        <UnorderedList>
          <li>
            <GaleOfShadows />: should in theory be our best trinket. Keep a Renewing Mist out to
            avoid it falling off between pulls
          </li>
          <li>
            <UnboundChangeling />: great stat stick. Make it give you haste, unless you have way too
            much of it already.
          </li>
          <li>
            <SpymastersWeb />: great stat stick. Never use the active. It’s the same amount of stats
            as Gale on average across a dungeon, useless at the start, and slightly stronger once
            stacked. You lose your stacks when you die though.
          </li>
          <li>
            <EmpoweringCrystal />: great stat stick
          </li>
          <li>
            <AraKaraSacbrood />: great stat stick
          </li>
        </UnorderedList>
      </SubSection>
      <SubSection title="Embellishments">
        <UnorderedList>
          <p>
            Embelishments are currently pretty weak in general. None of the healing embelishments
            are very impactful, so I recommend simply going for the highest damage embelishments.
          </p>
          <li>
            <BindingOfBinding />: gives your allies stats, increasing their damage!
          </li>
          <li>
            <FracturedGemstoneLocket />: also gives your allies stats, increasing their damage!
          </li>
        </UnorderedList>
        Do not run these two in Mythic+!
        <UnorderedList>
          <li>
            <DarkmoonSigilAscension />: best raid embelishment, very bad in M+ because it falls off
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
        <p>
          <Link href="https://boosthive.eu/guides/wow/war-within-gems-and-sockets-guide">Here</Link>{' '}
          is a decent summary of all the gems
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
