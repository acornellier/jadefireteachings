import {
  BloodSurge,
  CelestialConduit,
  ChiJi,
  DarkPulse,
  DiffuseMagic,
  Duskbringer,
  ElusiveMists,
  FortifyingBrew,
  IceSickles,
  ImprovedDetox,
  JadeSanctuary,
  KnifeThrow,
  LifeCocoon,
  ProcessOfElimination,
  Revival,
  RimeDagger,
  ShadowsOfDoubt,
  SheilunsGift,
  SoothingMist,
  Splice,
  Subjugate,
  SynergicStep,
  TigersLust,
  TremorSlam,
  UmbralWeave,
  ViscousDarkness,
  VociferousIndoctrination,
} from '../Common/WowheadLink/Spells.tsx'
import { DungeonSection } from './DungeonSection.tsx'
import { BossSubSection } from './BossSubSection.tsx'
import { ConduitOfTheCelestials } from '../Common/SpecialTexts.tsx'
import { OrderedList } from '../Common/OrderedList.tsx'
import { UnorderedList } from '../Common/UnorderedList.tsx'

export function CityOfThreads() {
  return (
    <DungeonSection title="City of Threads" tree="conduit" Talents={[ImprovedDetox]}>
      <p>
        There is a lot of healing to be done in this dungeon, so I highly recommend running{' '}
        <ConduitOfTheCelestials />.
      </p>
      <BossSubSection title="Orator Krix'vizk" difficulty="easy">
        <p>
          The pulsing AoE <VociferousIndoctrination /> does not hurt, <SheilunsGift /> will usually
          be enough for this. The orbs debuff <ShadowsOfDoubt /> does hurt, so dispel one quickly,
          but not too quickly or it will kill your team! I like to ping the player I will dispel
          first, wait a GCD, then dispel. The, just <SoothingMist /> the remaining debuff.
        </p>
        <p>
          The tank buster <Subjugate /> hits quite hard, and quite often, so your tank might run out
          of CDs. Top them before, give them <ElusiveMists /> every time, and <LifeCocoon /> if they
          need it.
        </p>
      </BossSubSection>
      <BossSubSection title="Fangs of the Queen" difficulty="hard">
        <p>
          This is a complicated boss with many abilities. It alternates between two phases every 45
          seconds. Both phases have a few shared mechanics.
        </p>
        <UnorderedList>
          <li>
            <Duskbringer /> which deals moderate damage over 3 seconds.
          </li>
          <li>
            <SynergicStep /> where they charge at players. Try to bait with your team towards a
            wall.
          </li>
        </UnorderedList>
        <p>Phase 1 has a couple other mechanics</p>
        <UnorderedList>
          <li>
            <KnifeThrow /> that damage random players with a bleed. Yu will constantly need to be
            constantly healing throughout this phase, as you want to keep your teammates topped for
            upcoming mechanics.
          </li>
          <li>
            <IceSickles />: very hard hitting ability that also gives a heavy long-lasting magic
            debuff. This is the hardest mechanic of the fight as it overlaps with <Duskbringer />{' '}
            and potentially <KnifeThrow />. Use <DiffuseMagic /> and probably use <LifeCocoon />{' '}
            here every time.
          </li>
        </UnorderedList>
        <p>Phase 2 has one unique mechanic</p>
        <UnorderedList>
          <li>
            <RimeDagger />: your team must soak twice on the tank. This does not hit too hard, and
            is the easier of the two phases. The second <RimeDagger /> of each phase 2 overlaps with
            a <Duskbringer /> and you should <FortifyingBrew /> this.
          </li>
        </UnorderedList>
        <p>
          Make sure you are always performing your melee rotation to keep up with <KnifeThrow />{' '}
          healing. <ChiJi /> is pretty good on this fight, since there are 2 targets, use it early
          in P1 for <KnifeThrow /> healing and then on CD. <Revival /> is nice to dispel an{' '}
          <IceSickles /> set, or just send it earlier if you are behind. Send a fully stacked{' '}
          <SheilunsGift /> every phase, and <CelestialConduit /> if you ever fall behind or are
          lacking a defensive.
        </p>
      </BossSubSection>
      <BossSubSection title="The Coaglamation" difficulty="medium">
        <p>
          Hooray, HPS check boss – this will test your healing skills! This boss has 30 second
          phases which always start by summon healing absorb orbs, and then does one of the two.
          Always stay in melee, do not run out to soak orbs.
        </p>
        <OrderedList>
          <li>
            <ViscousDarkness />: single aoe hit every 20 seconds., not too hard-hitting. You will
            need to make sure your team is reasonably healthy for this, but not topped.
          </li>
          <li>
            <DarkPulse />: very hard hitting ability over several ticks every 80 seconds. Make sure
            to defensive every time, and use a couple healing CDs. The very first <DarkPulse /> of
            the fight overlaps with several orbs going into boss, so this is by far the scariest
            part of the fight! Communicated with your team that big defensives are vital here.
          </li>
        </OrderedList>
        <p>
          Other than that, there isn{"'"}t a lot to this boss. Make sure you are not standing in the{' '}
          <BloodSurge /> puddles as they can be hard to see! This is a very common mistake in lower
          keys. They hurt a lot and must be avoided unless absolutely necessary.
        </p>
      </BossSubSection>
      <BossSubSection title="Izo, the Grand Splicer" difficulty="EXTREME">
        <p>
          Buckle up, this might be the hardest boss to heal of the season. You must heal through{' '}
          <Splice />, a heavy dot on the whole group, and then top for them either <TremorSlam /> or{' '}
          <UmbralWeave />, a big single aoe hit on the whole group, all whilst moving to dodge orbs!
        </p>
        <p>
          The encounter follows a 60-second repeating cycle: <Splice /> into AoE at the start,
          another <Splice /> into AoE at 20 seconds, and the <ProcessOfElimination /> tank mechanic
          at 40 seconds. At 60 seconds, the sequence loops. The timers are exact, so using CDs late
          will cause them to be offset for the rest of the fight.
        </p>
        <p>
          Every <Splice />, rotate <FortifyingBrew />, <DiffuseMagic /> and <JadeSanctuary />. With{' '}
          <FortifyingBrew /> you should cover both the <Splice /> and the AoE hit. With{' '}
          <DiffuseMagic />, use it after 3 ticks of <Splice /> to cover the last 2 ticks and the
          AoE. Use <CelestialConduit /> right after the 1st tick of <Splice />.
        </p>
        <p>
          For healing, you must rotate your healing CDs very wisely. Use <LifeCocoon /> as much as
          possible. You will likely run out of CDs eventually, and if you do, make sure to
          communicate this with your team. Use <ChiJi /> on cooldown for HPS before <Splice /> goes
          out. Use <SheilunsGift /> as late as possible to top the group before the big AoE.
        </p>
        <p>
          Positioning is important so that you can be in melee the whole fight. Make sure your group
          is kiting around the room. Use <TigersLust /> to break out of the root from{' '}
          <UmbralWeave />.
        </p>
      </BossSubSection>
    </DungeonSection>
  )
}
