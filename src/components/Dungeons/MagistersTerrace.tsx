import { DungeonSection } from './DungeonSection.tsx'
import {
  AstralGrasp,
  CelestialConduit,
  CosmicSting,
  DanceOfChiJi,
  DevouringEntropy,
  DiffuseMagic,
  FortifyingBrew,
  HeartOfTheJadeSerpent,
  LifeCocoon,
  RisingSunKick,
  SheilunsGift,
  SoothingMist,
  TranscendenceLinkedSpirits,
  UnstableVoidEssence,
} from '../Common/WowheadLink/Spells.tsx'
import { BossSubSection } from './BossSubSection.tsx'

export function MagistersTerrace() {
  return (
    <DungeonSection
      title="Magisters' Terrace"
      Talents={[DiffuseMagic]}
      RecommendedTalents={[TranscendenceLinkedSpirits]}
      video="https://www.youtube.com/watch?v=0Iioln1__GI"
    >
      <BossSubSection title="Arcanotron Custos" difficulty="easy">
        <p>
          If played placed properly by your tank, Arcanotron Custos has very little to heal. Just
          watch for players getting 2 debuffs doing the intermission.
        </p>
        <p>
          If you pull the Pyromancer with the boss, send all your healing and defensives as long as
          it is alive, since you will not need them for the rest of the fight.
        </p>
      </BossSubSection>
      <BossSubSection title="Seranel Sunlash" difficulty="hard">
        <p>
          Lots of spot healing to be done here with <SoothingMist /> and <SheilunsGift /> spam. Be
          sure to keep an eye on your mana and conserve some with <RisingSunKick /> and cooldowns.
          You cannot <SoothingMist /> the entire fight.
        </p>
        <p>
          When the tank gets targetted, you can relax and conserve some mana since they shouldn{"'"}
          t need much healing.
        </p>
        <p>
          Make good use of <LifeCocoon /> by using it on the player that is clearing their debuff{' '}
          <i>second</i>.
        </p>
      </BossSubSection>
      <BossSubSection title="Gemellus" difficulty="medium">
        <p>
          There are 2 healing events: <CosmicSting /> and <AstralGrasp />. Neither hurts especially
          hard, but I find that <AstralGrasp /> hurts a little more, so I like to send more
          cooldowns there.
        </p>
        <p>
          Position yourself to hit as many targets as possible with <DanceOfChiJi /> procs.
        </p>
        <p>
          During the suck from <AstralGrasp />, position yourself so that you can walk <i>away</i>{' '}
          from the one pulling you, and hit a target in the direction you are moving in.
        </p>
      </BossSubSection>
      <BossSubSection title="Degentrius" difficulty="hard">
        <p>
          A very challenging fight. The total throughput healing to deal with the rot from{' '}
          <DevouringEntropy /> isn{"'"}t that high compared to other rot healing fights. However,
          you must keep players fairly healthy so that they live soaking the <UnstableVoidEssence />
          , which deals about half their health bar. And while doing this heavy healing, you must
          dodge things coming at you from every direction, dispel the tank, and do soaks yourself!
          In high keys, this fight lasts about 4 minutes, which is a long time to keep your wits
          about you while still consistently healing non-stop.
        </p>
        <p>
          As it is a rot fight, rotate your cooldowns to evenly spread them out. Use{' '}
          <CelestialConduit /> near the center to hit all your teammates (only 20yd range). Use{' '}
          <FortifyingBrew /> on cooldown when soaking. Use <LifeCocoon /> aggressively on any player
          that drops low, making use of the <HeartOfTheJadeSerpent /> CDR.
        </p>
        <p>Most importantly, keep your eyes glued to the screen and do not miss a soak!</p>
      </BossSubSection>
    </DungeonSection>
  )
}
