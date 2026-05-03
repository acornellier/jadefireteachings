import { DungeonSection } from './DungeonSection.tsx'
import {
  CelestialConduit,
  FanOfBlades,
  GaleSurge,
  HeartOfTheJadeSerpent,
  LifeCocoon,
  LighterThanAir,
  PressurePoints,
  RingOfPeace,
  RisingSunKick,
  ScorchingRay,
  SheilunsGift,
  SoothingMist,
  ThunderFocusTea,
  Transcendence,
  TranscendenceLinkedSpirits,
} from '../Common/WowheadLink/Spells.tsx'
import { BossSubSection } from './BossSubSection.tsx'

export function Skyreach() {
  return (
    <DungeonSection
      title="Skyreach"
      Talents={[TranscendenceLinkedSpirits]}
      RecommendedTalents={[PressurePoints]}
      video="https://www.youtube.com/watch?v=ffeS9TRgnuk"
    >
      <BossSubSection title="Ranjit" difficulty="easy">
        <p>
          There is light healing to do for the <FanOfBlades />.
        </p>
        <p>
          The main challenge is simply to stay on the platform when targetted by <GaleSurge />.
          Using <LighterThanAir /> or <Transcendence /> will often get you killed, so I recommend
          just getting knocked in a good direction.
        </p>
      </BossSubSection>
      <BossSubSection title="Araknath" difficulty="medium">
        <p>
          This boss is only medium difficulty if you have a melee dps or BM hunter run back and
          forth with the beam, which reduces greatly damage intake. Check my vod to see how Wox does
          it.
        </p>
        <p>If nobody does it, you will need to do heavy spot healing. Watch your mana!</p>
      </BossSubSection>
      <BossSubSection title="Rukhran" difficulty="medium">
        <p>
          Pretty straightforward fight where you need to do a bunch of healing when an ad drops.
          Rotate your cooldowns, ramp if you have none.
        </p>
        <p>
          I like to use <RingOfPeace /> on every set where ad spawns on the boss, to keep it near
          the boss to cleave it down.
        </p>
      </BossSubSection>
      <BossSubSection title="High Sage Viryx" difficulty="EXTREME">
        <p>
          One of the hardest fights of the season to heal. Every 10 seconds, <ScorchingRay /> goes
          out, dealing very high instant damage to 3 targets, then dealing heavy ticking damage for
          5 seconds. After every 3rd set, you get a short break there is a 10 second break.
        </p>
        <p>
          <SoothingMist /> and <SheilunsGift /> is the obvious solution here. Since you know the
          targets ahead of time, you can ramp on the correct targets. But you cannot do this every
          time or you will run out of mana.
        </p>
        <p>
          Weave in <RisingSunKick /> and <ThunderFocusTea /> to save mana. Use <CelestialConduit />{' '}
          and <LifeCocoon /> on cooldown to make use of the <HeartOfTheJadeSerpent /> CDR.
        </p>
        <p>
          Watch out for sets where the tank is targetted. These are much easier to deal with.
          Ideally your dps is using defensives on sets where the tank is NOT targetted. Being in
          comms with your dps to coordinate defensives is nice for this fight.
        </p>
      </BossSubSection>
    </DungeonSection>
  )
}
