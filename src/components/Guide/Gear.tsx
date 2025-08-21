import { UnorderedList } from '../Common/UnorderedList.tsx'
import {
  ChiJi,
  CraneStyle,
  GustOfMists,
  JadeEmpowerment,
  Shadowmeld,
} from '../Common/WowheadLink/Spells.tsx'
import {
  AraKaraSacbrood,
  AstralAntenna,
  AzhiccaranParapodia,
  BindingOfBinding,
  BurstingLightshard,
  DarkmoonSigilAscension,
  DiamantineVoidcore,
  DuskthreadLining,
  ElusiveBlasphemite,
  EmpoweringCrystalOfAnubikkaj,
  FracturedGemstoneLocket,
  LoomitharsLivingSilk,
  SoleahsSecretTechnique,
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
          In season 2, I went for 30-35% Haste, ~100% Mastery, then prioritized Vers, with Crit
          staying not too far behind Vers. For the start of season 3, prioritize the same
          distribution. We will end up with more stats than this, and I will update it later in the
          season.
        </p>
        <UnorderedList>
          <li>
            <b>Haste</b>: our best stat. We want a lot of this, it’s easily the best stat for our
            healing. Go for around 30%, since after this there are diminishing returns, and you don
            {"'"}t really need more than this anyway.
          </li>
          <li>
            <b>Versatility</b>: our second best stat. It gives healing, damage, damage reduction,
            and increases the size of your absorbs. Things we all need for M+!
          </li>
          <li>
            <b>Critical Strike</b>: slightly more stat-efficient for HPS than vers, if you want to
            prioritize only that.
          </li>
          <li>
            <b>Mastery</b>: <GustOfMists />. Buffed a lot in TWW and reasonably strong now. If you
            like to play around <ChiJi /> and your melee rotation with <CraneStyle /> like I do,
            your mastery will do a lot of healing. That said, <JadeEmpowerment /> does not benefit
            from mastery and it is doing most of the heavy lifting in trash pulls these days, which
            reduces the important of <ChiJi />. I plan to have some baseline level of Mastery to
            make <ChiJi /> powerful enough.
          </li>
        </UnorderedList>
      </SubSection>
      <SubSection title="Trinkets">
        <p>
          Our BIS is <LoomitharsLivingSilk /> + <DiamantineVoidcore />. Myth/Hero track{' '}
          <AzhiccaranParapodia /> is slightly better than Hero/Normal track <DiamantineVoidcore />.
          There are many competitive options, and you could drop one for a damage trinket.
        </p>
        <UnorderedList>
          <li>
            <LoomitharsLivingSilk /> is an incredibly powerful group survival tool for M+. Provides
            no intellect, so it is our lowest damage option.
          </li>
          <li>
            <DiamantineVoidcore /> is the best stat stick, but only when combined with the set
            bonus.
          </li>
          <li>
            <AzhiccaranParapodia /> is the best stat stick from dungeons.
          </li>
          <li>
            <SoleahsSecretTechnique /> a great stat stick that also slightly empowers your ally,
            which is a damage increase!
          </li>
          <li>
            <AstralAntenna />, <AraKaraSacbrood />, and <EmpoweringCrystalOfAnubikkaj /> are other
            powerful stat sticks.
          </li>
          <li>
            <BurstingLightshard /> is back and it is still our highest damage option! Only run this
            if you are not concerned about healing checks.
          </li>
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
            <FracturedGemstoneLocket />: also gives your allies stats, increasing their damage!
          </li>
        </UnorderedList>
        The raid combo is not strong in Mythic+. But it is not the worst thing ever, and again
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
    </Section>
  )
}
