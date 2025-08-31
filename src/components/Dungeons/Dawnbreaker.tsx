import { DungeonSection } from './DungeonSection.tsx'
import { BossSubSection } from './BossSubSection.tsx'
import { NotableTrash } from './NotableTrash.tsx'
import { SubSubSection } from '../Guide/SubSubSection.tsx'
import {
  AbyssalBlast,
  BlackoutKick,
  BurningShadows,
  ChiJi,
  CloakOfShadows,
  DarkOrb,
  DiffuseMagic,
  EnvelopingMist,
  ErosiveSpray,
  FortifyingBrew,
  HarmonicSurge,
  JadeEmpowerment,
  LifeCocoon,
  ObsidianBeam,
  Revival,
  RollingAcid,
  ShadowyDecay,
  SoothingMist,
  SpinneretsStrands,
  TigerPalm,
  TormentingEruption,
  UpliftedSpirits,
  Vivify,
} from '../Common/WowheadLink/Spells.tsx'
import { LoomitharsLivingSilk } from '../Common/WowheadLink/Items.tsx'
import { OrderedList } from '../Common/OrderedList.tsx'
import { MasterOfHarmony } from '../Common/SpecialTexts.tsx'
import { UnorderedList } from '../Common/UnorderedList.tsx'

export function Dawnbreaker() {
  return (
    <DungeonSection title="Dawnbreaker" tree="moh">
      <BossSubSection title="Speaker Shadowcrown" difficulty="hard">
        <p>
          This boss regularly puts a magic dispel <BurningShadows /> that triggers a very large
          healing absorb on your entire party, and deals light damage until healed off. Meanwhile,{' '}
          <ObsidianBeam /> which does a moderate hit on your whole group. These two abilities are on
          independent timers, so sometimes you have a long time to heal up the absorb, and other
          times you are in a rush to do so before the Beam goes off.
        </p>
        <p>
          I would mark this as EXTREME difficulty, but with the magic of <TigerPalm /> and
          consistent fight timers, it{"'"}s not too bad, I swear! Here is how I plan my CDs for each
          healing absorb, assuming you are running <MasterOfHarmony />.
        </p>
        <b>Phase 1</b>
        <OrderedList>
          <li>
            <ChiJi /> ramp during Beam into <TigerPalm /> spam. Right after the first{' '}
            <ObsidianBeam /> so you have lots of time to heal this one.
          </li>
          <li>
            Ramp into <Revival />. Immediately followed by a <ObsidianBeam /> so scariest overlap of
            the fight.
          </li>
          <li>
            Ramp into <TigerPalm /> spam with <LoomitharsLivingSilk /> on the <ObsidianBeam /> cast
            if needed. Save <LoomitharsLivingSilk /> for the one after intermission if not needed!
          </li>
          <li>
            <ChiJi /> ramp into <TigerPalm /> spam.
          </li>
        </OrderedList>
        <p>
          The boss should phase into intermission before the 5th absorb. Make sure sure you stay on
          the boat healing off absorbs until they{"'"}re all gone because anybody who flies off with
          a healing absorb will certainly die.
        </p>
        <b>Phase 2</b>
        <OrderedList>
          <li>
            Ramp into <TigerPalm /> spam with <DiffuseMagic /> and <LifeCocoon /> on the weakest
            member. Make sure to get a BIG ramp. This is the scariest one of the fight since the
            dispel is immediately followed by a Beam, and you have no <Revival />,{' '}
            <LoomitharsLivingSilk />, or <ChiJi />. I usually tell my party beforehand to use big
            defensives on the healing absorb right after we land, since it is by fa the scariest of
            the fight.
          </li>
          <li>
            <ChiJi /> ramp into <TigerPalm /> spam.
          </li>
          <li>
            Ramp into <TigerPalm /> spam. You have a lot of time here.
          </li>
          <li>
            Ramp into <TigerPalm /> spam. <Revival /> is probably back up. You have a lot of time
            here.
          </li>
        </OrderedList>
        <img src="/images/shadowcrown_casts.png" alt="ui_screenshot" width={1200} />
      </BossSubSection>
      <BossSubSection title="Anubikkaj" difficulty="EXTREME">
        <p>
          One of the hardest fights of the season, good luck! Anubikkaj casts two main scary
          abilities.
        </p>
        <UnorderedList>
          <li>
            <ShadowyDecay />: pulses very high ramping damage over 5 seconds. Note that each pulse
            is 10% higher than the last.
          </li>
          <li>
            <DarkOrb />: an extremely high instant group wide hit.
          </li>
        </UnorderedList>
        <p>
          These two abilities are independent and therefore again, you get overlaps!{' '}
          <ShadowyDecay /> 1, 2, 4, 5, are shortly a <DarkOrb /> and so you will need to quickly top
          the group after the Orb, and then provide heavy constant healing for 5 seconds.{' '}
          <ShadowyDecay /> 3 and 6 are at the same time as the <DarkOrb />, requiring large
          defensives.
        </p>
        <p>
          <HarmonicSurge /> is very powerful here for topping and healing the group. But it might
          not be enough if the ramp isn{"'"}t big enough, or if it falls off, or if there aren{"'"}t
          enough defensives available.
        </p>
        <p>
          Here is my general plan for each Shadowy Decay, assuming <MasterOfHarmony />. Yours might
          need to change based on group composition. Note that I don{"'"}t currently have a set time
          to use <LoomitharsLivingSilk /> for <LifeCocoon />, it{"'"}s nice to use them reactively
          when needed. Later with my premade group I will have set timers for everything.
        </p>
        <OrderedList>
          <li>
            Ramp before <DarkOrb />, <FortifyingBrew /> right before it goes off, and heal up with{' '}
            <TigerPalm /> spam. <ChiJi /> and re-ramp before <ShadowyDecay />, <TigerPalm /> the
            first few ticks, and <BlackoutKick /> at the end. <Vivify /> on the lowest HP target
            before the final tick if needed.
          </li>
          <li>
            Ramp before <DarkOrb />, heal it with <TigerPalm /> spam. Re-ramp before{' '}
            <ShadowyDecay />, <TigerPalm /> the first few ticks, and <Revival /> at the end.
          </li>
          <li>
            This is the overlap. <ChiJi /> and ramp before <DarkOrb /> hit. <DiffuseMagic /> as late
            as possible before the hit. <LifeCocoon /> someone who has no personals <i>after</i> the
            hit. <TigerPalm /> spam should be enough with strong defensives on everybody.
          </li>
          <li>
            Ramp before <DarkOrb />, <FortifyingBrew /> right before it goes off, and heal up with{' '}
            <TigerPalm /> spam. Re-ramp before <ShadowyDecay /> and <TigerPalm /> spam! This one is
            tough with no <ChiJi /> or <Revival />, so consider <LifeCocoon /> and{' '}
            <LoomitharsLivingSilk /> here, as well as group actives, health pots, etc. You can in
            theory <ChiJi /> near the end of <ShadowyDecay /> and then <BlackoutKick />.
          </li>
          <li>
            This one is easy since he summons mobs right before! Same ramps as always, but{' '}
            <JadeEmpowerment /> instead of <TigerPalm /> spam during <ShadowyDecay />, assuming your
            DPS don{"'"}t annihilate them
          </li>
          <li>
            The boss is usually dead by now, but if you get this far it{"'"}s another overlap. Do
            the same as #3 with <DiffuseMagic />, and you should have <Revival /> back up if running{' '}
            <UpliftedSpirits />.
          </li>
        </OrderedList>
        <img src="/images/anubikkaj_casts.png" alt="ui_screenshot" width={1200} />
      </BossSubSection>
      <BossSubSection title="Rashanan" difficulty="EXTREME">
        <p>
          No rest for the wicked in Dawnbreaker, this is a 3rd extremely challenging boss. Luckily
          we have <HarmonicSurge /> to deal with this guy now. The scary abilities this time are{' '}
          <ErosiveSpray />, <SpinneretsStrands />, and <RollingAcid />. In P1, there is only{' '}
          <ErosiveSpray />, so you can simply big ramp and oversend cooldowns here to be safe. P2 is
          where it gets spicy.
        </p>
        <p>
          <ErosiveSpray /> hits the entire party three times in quick succession for a moderate
          amount followed by long rot. Big ramp into <TigerPalm /> spam is all you really need here.
          Use <ChiJi /> on cooldown for it.
        </p>
        <p>
          <SpinneretsStrands /> targets two players, and hits them hard immediately, and then again
          hard again when they snap their webs shortly after. This is where your team should use
          defensives - OmniCD is very useful here! If you notice one player is safe, you can simply{' '}
          <SoothingMist /> the other to only heal them and not use any cooldowns. Otherwise, you
          will need <LifeCocoon />, <LoomitharsLivingSilk />, <Revival />, or some other tool to
          keep them both alive. You have a few seconds to react before the damage goes out, so you
          can get an <EnvelopingMist /> on both.
        </p>
        <p>
          Finally there is <RollingAcid />, which is a simply a large hit on one player. You must
          top the player targeted by this, as you really don{"'"}t want them using defensives on it.
        </p>
        <p>
          The challenge of this fight comes with the cadence of these spells. Sometimes, the three
          abilities are used in quick succession and it{"'"}s hard to keep players topped. And the
          fight is so long that you can go oom, so use your mana tea in the few moments of respite!
          Stay focused, keep your wits about, focus on executing ramps properly, and be quick with
          your emergency buttons.
        </p>
        <p>
          Note that you as the healer are never targeted by <SpinneretsStrands /> so you should
          rotate defensives on <ErosiveSpray />.
        </p>
      </BossSubSection>
      <NotableTrash dungeon="db">
        <SubSubSection title="Deathscreamer Ikentak">
          <p>
            This is the hardest of the three minibosses, casting <DarkOrb />. He periodically places
            a large <AbyssalBlast /> debuff on a random player, which requires significant spot
            healing. Every second <AbyssalBlast /> overlaps with a <DarkOrb />. <SoothingMist /> and{' '}
            <JadeEmpowerment /> are your best tools here.
          </p>
          <p>
            OmniCD is extremely useful here to track defensives. If they have an immunity like{' '}
            <CloakOfShadows /> then there{"'"}s nothing to worry about. If they are dry on
            defensives, time your <LifeCocoon /> or <LoomitharsLivingSilk /> shortly before the{' '}
            <DarkOrb /> explosion to save their life!
          </p>
        </SubSubSection>
        <SubSubSection title="Nightfall Dark Architect">
          <p>
            This is the guy back on the ship before the final boss. As with earlier Ritualists, he
            pulses damage on two targets with <TormentingEruption />. But these pulse much harder
            and require players to spread.
          </p>
          <p>
            Once he summons ads, you should be able to heal safely through most of them with a
            charge of <JadeEmpowerment />. The first one or two casts however you might have no
            cleave, so use other larger cooldowns here.
          </p>
        </SubSubSection>
      </NotableTrash>
    </DungeonSection>
  )
}
