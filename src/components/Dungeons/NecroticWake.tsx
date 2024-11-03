import { DungeonSection } from './DungeonSection.tsx'
import {
  CelestialConduit,
  ChiJi,
  DanceOfTheWind,
  FinalHarvest,
  FrozenBinds,
  HeavingRetch,
  IceboundAegis,
  ImprovedDetox,
  JadeEmpowerment,
  LifeCocoon,
  MorbidFixation,
  Paralysis,
  PeaceAndProsperity,
  Revival,
  RingOfPeace,
  Shadowmeld,
  SheilunsGift,
  TorturedEchoes,
} from '../Common/WowheadLink/Spells.tsx'
import { BossSubSection } from './BossSubSection.tsx'
import { MasterOfHarmony } from '../Common/SpecialTexts.tsx'

export function NecroticWake() {
  return (
    <DungeonSection
      title="Necrotic Wake"
      tree="either"
      Talents={[ImprovedDetox, DanceOfTheWind, PeaceAndProsperity]}
    >
      <BossSubSection title="Blightbone" difficulty="easy">
        <p>
          Your <DanceOfTheWind /> makes you immune to <HeavingRetch />, yay! Be aware of your
          teammate{"'"}s CDs through omniCD, and use <LifeCocoon /> when necessary, as{' '}
          <HeavingRetch /> hits extremely hard.
        </p>
        <p>
          Use <JadeEmpowerment /> on the maggots to kill them quickly! <PeaceAndProsperity /> is
          nice to have <RingOfPeace /> up as much as possible.
        </p>
      </BossSubSection>
      <BossSubSection title="Amarth, the Harvester" difficulty="medium">
        <p>
          Use <Paralysis /> on a Mage every ad set. Coordinate with your team to see if anybody else
          can hard CC the other Mage. If a mob is still alive during Use <RingOfPeace /> to help
          group mobs if necessary.
        </p>
        <p>
          The <TorturedEchoes /> healing check that comes after <FinalHarvest /> isn{"'"}t hard, but
          do not disrespect it. Keep your group topped in case something goes wrong. It is common in
          non-coordinated groups for a boss or Mage cast to go off, so keeping your group topped is
          the best way to play around that.
        </p>
      </BossSubSection>
      <BossSubSection title="Surgeon Stitchflesh" difficulty="EXTREME">
        <p>
          Big HPS check, yay! A chance to practice your rot healing skills. The damage ramps the
          longer the ad is out, so be aware of the stacks and try to use defensives and emergency
          CDs when the ad has a lot of stacks. If there are ever 2 ads out at one time, everybody is
          in extreme danger.
        </p>
        <p>
          <ChiJi /> is strong here since you can cleave, make sure to get 2 uses out of it.{' '}
          <SheilunsGift /> should also get 2 uses, while <CelestialConduit />, <Revival />, and{' '}
          <LifeCocoon /> will likely only get one use, while stacks are high.
        </p>
        <p>
          Your damage matters here, especially if running <MasterOfHarmony />. You should be lusting
          and using all spears, and decide if you need to finish off the first ad or not.
        </p>
        <p>
          <Shadowmeld /> the <MorbidFixation /> if the hook doesn{"'"}t land.
        </p>
      </BossSubSection>
      <BossSubSection title="Nalthor the Rimebinder" difficulty="medium">
        <p>
          The only healing to be done is <IceboundAegis /> which is highly dependent on how quickly
          your dps breaks the shield. If you hit 3 stacks, it will hit very hard. Be ready on every
          set to do major healing if needed.
        </p>
        <p>
          Be smart and aware with your dispels on <FrozenBinds />. If you are targetted, either
          immune it with <ChiJi />, or roll backwards to an empty spot to quickly dispel yourself.
        </p>
      </BossSubSection>
    </DungeonSection>
  )
}
