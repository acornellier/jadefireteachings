import { DungeonSection } from './DungeonSection.tsx'
import { BossSubSection } from './BossSubSection.tsx'
import {
  CelestialConduit,
  ChiJi,
  EnvelopingMist,
  GiftOfTheCelestials,
  HomingMissile,
  JadeBond,
  JadeEmpowerment,
  LegSweep,
  LifeCocoon,
  Paralysis,
  PropellantBlast,
  RapidExtraction,
  Revival,
  RingOfPeace,
  RockLance,
  Shadowmeld,
  ShaohaosLessons,
  SoothingMist,
  StaticPulse,
  Vivify,
} from '../Common/WowheadLink/Spells.tsx'
import { SubSubSection } from '../Guide/SubSubSection.tsx'
import { NotableTrash } from './NotableTrash.tsx'
import { BurstingLightshard } from '../Common/WowheadLink/Items.tsx'

export function TheMotherlode() {
  return (
    <DungeonSection
      title="The MOTHERLODE!!"
      video="https://www.youtube.com/watch?v=4qlHvcyV1cI"
      RecommendedTalents={[JadeBond]}
    >
      <p>
        I recommend <JadeBond /> for healing through the double War Machine pack and final boss
        intermission, but <GiftOfTheCelestials /> is fine as well, better for Azerite Extractors and
        2nd boss.
      </p>
      <BossSubSection title="Coin-Operated Crowd Pummeler" difficulty="easy">
        <p>
          <StaticPulse /> does not one shot, but it will drop your team low and follow up with a
          small dot, so have some healing ready. Ideally <ChiJi /> or a <Vivify /> cleave. Avoid
          using <JadeEmpowerment /> charges so you can send them for damage during the burn.
        </p>
        <p>
          Mostly a target dummy for you to practice your damage in damage amps. Help out with bombs,
          then blast! Pool your vitality, <ShaohaosLessons />, charges of <JadeEmpowerment />,{' '}
          <BurstingLightshard />, <CelestialConduit />, and beat the tank on the dps meter!
        </p>
      </BossSubSection>
      <BossSubSection title="Azerokk" difficulty="medium">
        <p>
          You will actually need to heal on this boss! Use <ChiJi /> on cooldown when an empowered
          mob is out. Otherwise, use <JadeEmpowerment /> when health bars drop. You might want to
          save <LifeCocoon /> for your tank, as they can get in trouble if the ads live too long.
        </p>
        <p>
          Help with empowered ad damage by swapping to it immediately. If the ad is still alive when
          the boss does his big slam, then your dps did not do their job.
        </p>
      </BossSubSection>
      <BossSubSection title="Rixxa Fluxflame" difficulty="easy">
        <p>
          Not much to say, tank and spank. Small amount of spot healing on <PropellantBlast />.
        </p>
      </BossSubSection>
      <BossSubSection title="Mogul Razdunk" difficulty="medium">
        <p>
          In P1, your main job is to spot heal those targeted by <HomingMissile />. <SoothingMist />{' '}
          is the easiest way to do this! If you are targeted, remember that you can <Shadowmeld />,
          but only if used BEFORE the missile is in the air. If you meld while it is already in
          flight, it will explode on the whole group.
        </p>
        <p>
          The intermission is actually quite scary as your allies will get shot in quick succession
          which will eventually overlap from the burst of damage of the boss dropping down.{' '}
          <JadeBond /> is great here to carry you until hopefully one of the ads is dead. Then send
          any healing you have left to avoid deaths going into second phase. Spot healing is key
          here, a well-timed <LifeCocoon /> will regularly save a life.
        </p>
      </BossSubSection>
      <NotableTrash dungeon="ml">
        <SubSubSection title="Azerite Extractor">
          <p>
            This machine is a pain in the ass. Its <RapidExtraction /> circles to dodge are quick,
            and so it is very hard to get <JadeEmpowerment /> off, or any healing at all. On top of
            that, while your team is busy dodging, <RockLance /> casts are likely to go off during{' '}
            <RapidExtraction />.
          </p>
          <p>
            Make sure your group is topped going into <RapidExtraction />, then do your best at
            staying in melee and getting healing in. Use defensives, <LifeCocoon />, and{' '}
            <LegSweep /> to stop casts during the eruption. <Paralysis /> and <RingOfPeace /> can be
            used to stop casts at a range if forced out of melee.
          </p>
        </SubSubSection>
        <SubSubSection title="Venture Co. War Machines">
          <p>
            Even when only one of these is pulled, it can be very scary for melee due to the Crawler
            Mines. Be aware of their positions, and hopefully your team has slows on them. If they
            get close, or if you need to plant and heal, use <RingOfPeace /> and <LegSweep /> for
            some brief respite from the chaos.
          </p>
          <p>
            When two machines are pulled, which is required on the final pull, but may be done
            earlier, this becomes a serious healing check. <JadeBond /> is absolutely wonderful
            here. Outside of that, use defensives, <EnvelopingMist /> ramps and <JadeEmpowerment />,{' '}
            <LifeCocoon />, and <Revival /> to heal through it. No need to save anything for the
            boss.
          </p>
        </SubSubSection>
      </NotableTrash>
    </DungeonSection>
  )
}
