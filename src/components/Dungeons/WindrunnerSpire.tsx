import { DungeonSection } from './DungeonSection.tsx'
import {
  BullseyeWindblast,
  BurningGale,
  CurseOfDarkness,
  DanceOfTheWind,
  DebilitatingShriek,
  DiffuseMagic,
  FlamingUpdraft,
  GustShot,
  ImprovedDetox,
  LighterThanAir,
  Paralysis,
  PressurePoints,
  RallyingBellow,
  RecklessLeap,
  SoothingMist,
  SplatteringSpew,
  SquallLeap,
  Transcendence,
} from '../Common/WowheadLink/Spells.tsx'
import { BossSubSection } from './BossSubSection.tsx'

export function WindrunnerSpire() {
  return (
    <DungeonSection
      title="Windrunner Spire"
      Talents={[ImprovedDetox, DiffuseMagic, PressurePoints]}
      video="https://www.youtube.com/watch?v=29ELSXFMHPo"
    >
      <BossSubSection title="Emberdawn" difficulty="hard">
        <p>
          The debuffs from <FlamingUpdraft /> are reasonably easy to handle with <SoothingMist />.
        </p>
        <p>
          The intermission is what makes this boss hard. The boss deals quite heavy damage with{' '}
          <BurningGale /> over a long period - 18 seconds. Save your cooldowns for this, you shouldn
          {"'"}t need any for healing the debuffs. They are 1 minute apart, so plan your cooldowns
          appropriately. Don{"'"}t send <i>everything</i> on the first intermission, make sure you
          save some things for the second.
        </p>
        <p>
          And of course you have to watch your feet very carefully during intermission. As a melee,
          the tornaodes can come out of nowhere through the boss model.
        </p>
      </BossSubSection>
      <BossSubSection title="Derelict Duo" difficulty="medium">
        <p>
          Moderate healing to do for <SplatteringSpew />. Rotate your cooldowns as per usual on
          this. Every second one will slightly overlap with a <DebilitatingShriek />, so make sure
          your team is reasonably healthy coming out of it.
        </p>
        <p>
          You can <Paralysis /> your the ghost that spawns from <CurseOfDarkness /> and it will
          probably not break due to being resistant to damage.
        </p>
      </BossSubSection>
      <BossSubSection title="Commander Kroluk" difficulty="easy">
        <p>
          Healing check is very easy here. The only place someone can really die is if they have a
          <RecklessLeap /> debuff leading into intermission with the <RallyingBellow /> overlap.
        </p>
        <p>
          You are very tanky against <RecklessLeap /> thanks to <DanceOfTheWind />, so I like to
          tank the leap. To do so, simply ensure you are farthest from the boss before it goes out.
          Ideally your tank takes the second one.
        </p>
      </BossSubSection>
      <BossSubSection title="Restless Heart" difficulty="hard">
        <p>
          The very start of this fight is tough, where players are given <SquallLeap /> debuffs
          immediately but cannot clear them. Then the boss casts <BullseyeWindblast />. Make sure
          your group is topped for this! Send heavy healing right at the start of the fight.
        </p>
        <p>
          After this, players get <SquallLeap /> again. This should be cleared immediately, to avoid
          the overlap with <GustShot />. For the rest of the fight, nobody should have{' '}
          <SquallLeap /> fo more than a few seconds.
        </p>
        <p>
          There is still quite a lot of healing to do! I like to make heavy use of <SoothingMist />{' '}
          in this fight since it can be hard to stay in melee. If you can stay in melee, stick to
          the fundamentals, and rotate your cooldowns when there is damage going out.
        </p>
        <p>
          For dodging the <BullseyeWindblast />, you can simply go up and down, or you can go up and
          then <Transcendence /> to get down faster, or you can <LighterThanAir /> to get back down
          faster. It{"'"}s personal preference, I{"'"}m not really sure which I prefer.
        </p>
      </BossSubSection>
    </DungeonSection>
  )
}
