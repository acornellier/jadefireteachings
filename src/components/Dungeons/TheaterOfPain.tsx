import { DungeonSection } from './DungeonSection.tsx'
import { BossSubSection } from './BossSubSection.tsx'
import {
  ImprovedDetox,
  JadeBond,
  LeapingThrash,
  MightySmash,
  NoxiousSpores,
  Paralysis,
  PressurePoints,
  SearingDeath,
  ShaohaosLessons,
  TigersLust,
  WellOfDarkness,
  WitheringTouch,
} from '../Common/WowheadLink/Spells.tsx'

export function TheaterOfPain() {
  return (
    <DungeonSection
      title="Theater of Pain"
      video="https://www.youtube.com/watch?v=x1fg--aHgqQ&lc=UgyOY2Wa__M2acCYy-94AaABAg"
      tree="moh"
      Talents={[ImprovedDetox, PressurePoints]}
      RecommendedTalents={[ShaohaosLessons, JadeBond]}
    >
      <BossSubSection title="An Affront of Challengers" difficulty="medium">
        <p>
          There is a lot going on in this fight, so be sure to understand all the mechanics. Soothe
          the Bloodhorn with <PressurePoints /> immediately, unless someone else in your group is
          assigned to this. Dispel/Diffuse/Revival <WitheringTouch />, top the group for{' '}
          <MightySmash />, stack for <NoxiousSpores /> and spread for <SearingDeath />.
        </p>
        <p>
          The dispels do not hurt very much, but <SearingDeath /> does decent damage, so use healing
          on this. While the bloodhorn lives, its damage can overlap with other mechanics, so be
          sure to frontload your healing while it lives, and watch for overlaps.
        </p>
      </BossSubSection>
      <BossSubSection title="Xav the Unfallen" difficulty="easy">
        <p>
          A target dummy for practicing your single target damage! Your roll charges should be
          enough to dodge the AoE hits, so use <TigersLust /> on your least mobile ally to help them
          out.
        </p>
      </BossSubSection>
      <BossSubSection title="Gorechop" difficulty="medium">
        <p>
          This boss is pretty easy in low key levels, but becomes very dangerous in higher key
          levels, since a player can die to 2x <LeapingThrash />. Always keep moving, and spot heal
          your allies quickly when they are hit. You can use <Paralysis /> when one spawns and it
          will gradually die, although your might dps might complain about their {'"'}funnel{'"'}.
        </p>
      </BossSubSection>
      <BossSubSection title="Kul’tharok" difficulty="easy">
        <p>
          Pretty straightforward boss. <WellOfDarkness /> can hurt in higher key levels, so be ready
          to heal this.
        </p>
      </BossSubSection>
      <BossSubSection title="Mordretha, the Endless Emperor" difficulty="medium">
        <p>
          Keep your tank topped, and kick your own add in. There is very little healing to do, so
          send your cooldowns at will and focus on damage. Be very careful of your positioning in
          the second phase!
        </p>
      </BossSubSection>
    </DungeonSection>
  )
}
