import { DungeonSection } from './DungeonSection.tsx'
import {
  Barrage,
  DanceOfChiJi,
  DeathgorgedVessel,
  DiffuseMagic,
  ImprovedDetox,
  InfectedPinions,
  LifeCocoon,
  LingeringDread,
  NecroticConvergence,
  SheilunsGift,
  SoothingMist,
  WitheringMiasma,
} from '../Common/WowheadLink/Spells.tsx'
import { BossSubSection } from './BossSubSection.tsx'
import { ConduitOfTheCelestials } from '../Common/SpecialTexts.tsx'

export function MaisaraCaverns() {
  return (
    <DungeonSection
      title="Maisara Caverns"
      Talents={[ImprovedDetox, DiffuseMagic]}
      video="https://www.youtube.com/watch?v=wjVPK8N6VRU"
    >
      <BossSubSection title="Muro'jin and Nekraxx" difficulty="medium">
        <p>
          The ticking damage from the <InfectedPinions /> is pretty easy to heal. Just dispel on
          cooldown, and do basic healing.
        </p>
        <p>
          The main cause of death is players stacking with <Barrage />. Try to quickly identify
          whoever is really targetted and <LifeCocoon /> and spot heal them. If someone else stands
          in the barrage, that{"'"}s their problem.
        </p>
      </BossSubSection>
      <BossSubSection title="Vordaza" difficulty="hard">
        <p>
          In the main phase, Vordaza deals slow rot damage through <WitheringMiasma />.
        </p>
        <p>
          When two ads meet, they explode for a decent chunk with <LingeringDread />. Make sure your
          group is reasonably healthy for this. Ideally your team executes the strategy where you CC
          and immune a ghost, which makes it much easier. Otherwise, hopefully the ghosts hit not
          too closely together. Regardless, try to top your group quickly after the first explosion.
        </p>
        <p>
          During the intermission the boss deals heavy ticking damage with <NecroticConvergence />.
          The damage does not ramp, but the longer it lasts the harder it will be. I like to send{' '}
          <ConduitOfTheCelestials /> very early on here, do some fistweaving, and then retreat to
          ranged for safety from balls, and spam <SheilunsGift />.
        </p>
      </BossSubSection>
      <BossSubSection title="Rak'tul" difficulty="medium">
        <p>
          The boss does heavy damage every 6 seconds with <DeathgorgedVessel />. Don{"'"}t panic
          when this happens, since you have 6 seconds. But do keep your group healthy as it hits
          quite hard.
        </p>
        <p>
          When the totems come out, try to drop them closer together, and position yourself to make
          use of <DanceOfChiJi /> procs to quickly heal the group. Watch your feet carefully though,
          positioning is tough!
        </p>
        <p>
          In the spirit realm, heal your team using <SoothingMist /> while moving.
        </p>
      </BossSubSection>
    </DungeonSection>
  )
}
