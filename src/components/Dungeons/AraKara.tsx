import { DungeonSection } from './DungeonSection.tsx'
import { BossSubSection } from './BossSubSection.tsx'
import {
  AlertingShrill,
  CeaselessSwarm,
  CelestialConduit,
  ChiJi,
  CosmicSingularity,
  CultivatedPoisons,
  DiffuseMagic,
  GossamerOnslaught,
  ImprovedDetox,
  Infestation,
  JadeEmpowerment,
  LifeCocoon,
  TigerPalm,
  Transcendence,
} from '../Common/WowheadLink/Spells.tsx'
import { ConduitOfTheCelestials, MasterOfHarmony } from '../Common/SpecialTexts.tsx'
import { LoomitharsLivingSilk } from '../Common/WowheadLink/Items.tsx'

export function AraKara() {
  return (
    <DungeonSection title="Ara-Kara" tree="idk" Talents={[ImprovedDetox]}>
      <p>
        <MasterOfHarmony /> is better for the first boss, but <ConduitOfTheCelestials /> is better
        for healing through the trash.
      </p>
      <BossSubSection title="Avanoxx" difficulty="hard">
        <p>
          Avanoxx has two healing checks that alternate! <AlertingShrill /> and{' '}
          <GossamerOnslaught />. <MasterOfHarmony /> is great for this boss, and the main reason to
          run this hero tree. You can just ramp and <TigerPalm /> spam through every single
          mechanic.
        </p>
        <p>
          Rotate your two defensives on cooldown, but remember that <AlertingShrill /> is Physical
          so <DiffuseMagic /> will not work. Use <ChiJi /> on cooldown as well, meaning it will be
          available for every 3rd mechanic.
        </p>
        <p></p>
        <p>
          <AlertingShrill /> isn{"'"}t as hard as in season 1, so <JadeEmpowerment /> is usually
          enough with a strong enough ramp. <JadeEmpowerment /> is also great for healing through
          the adds meleeing your team so try to have a charge or two for that.
        </p>
        <p>
          <GossamerOnslaught /> hits very hard now and is the scarier of the two abilities. Be sure
          to ramp for this as well!
        </p>
        <p>
          If running <ConduitOfTheCelestials />, consider saving <ChiJi /> and <CelestialConduit />{' '}
          conduit for <GossamerOnslaught />, since you cannot <JadeEmpowerment /> while moving. Use{' '}
          <LifeCocoon /> aggressively with its low CD.
        </p>
      </BossSubSection>
      <BossSubSection title="Anubzekt" difficulty="medium">
        <p>
          Pretty easy boss, just spot heal whoever gets targeted by <Infestation />. If a player
          missteps and gets stacks of <CeaselessSwarm />, you can save them if you{"'"}re quick
          enough with <LifeCocoon /> and maybe <LoomitharsLivingSilk />.
        </p>
      </BossSubSection>
      <BossSubSection title="Kikatal" difficulty="medium">
        <p>
          Not much healing to do here. I recommend exiting melee shortly before{' '}
          <CultivatedPoisons />. Dispel yourself with priority, and otherwise dispel a ranged and
          heal the melee.
        </p>
        <p>
          You can <Transcendence /> every single <CosmicSingularity />, but you must wait until
          there is less than 1.0 seconds left on the cast before teleporting.
        </p>
      </BossSubSection>
    </DungeonSection>
  )
}
