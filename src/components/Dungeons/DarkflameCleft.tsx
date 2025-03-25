import { DungeonSection } from './DungeonSection.tsx'
import { BossSubSection } from './BossSubSection.tsx'
import {
  CelestialConduit,
  ChiJi,
  CrudeWeapons,
  DousingBreath,
  EerieMolds,
  EnvelopingMist,
  EternalDarkness,
  GiftOfTheCelestials,
  JadeEmpowerment,
  LegSweep,
  LifeCocoon,
  LuringCandleflame,
  RenewingMist,
  Revival,
  RingOfPeace,
  RisingSunKick,
  Shadowblast,
  Shadowmeld,
  SheilunsGift,
  ThrowDarkflame,
  UmbralSlash,
  ZenPulse,
} from '../Common/WowheadLink/Spells.tsx'

export function DarkflameCleft() {
  return (
    <DungeonSection
      title="Darkflame Cleft"
      video="https://www.youtube.com/watch?v=ez4BUV9RE3I"
      RecommendedTalents={[GiftOfTheCelestials]}
    >
      <BossSubSection title="Ol' Waxbeard" difficulty="medium">
        <p>
          Watch the <CrudeWeapons /> stacks on your allies when <LuringCandleflame /> is on them,
          and spot heal them, use <LifeCocoon />, or <LegSweep /> and <RingOfPeace /> to protect
          them. Your priority damage is good so help with the Mine Cart!
        </p>
      </BossSubSection>
      <BossSubSection title="Blazikon" difficulty="easy">
        <p>
          When played properly, there is little healing to do in this fight. Other than boss
          mechanics, your main job is to get your group as topped as possible for <DousingBreath />.
          This is easy as long as your group only extinguishes 1 candle.
        </p>
      </BossSubSection>
      <BossSubSection title="The Candle King" difficulty="hard">
        <p>
          A true test of your healing skills, a pure rot HPS fight, this is what we live for! All
          your healing skills will be put to the test here.
        </p>
        <p>
          Mechanically, it is important to be stacked when <EerieMolds /> is cast, which is always
          right after a clear from <ThrowDarkflame />. When the clears go out, your tank should move
          a little. Right after the clears, everybody should very quickly group up again on the
          tank.
        </p>
        <p>
          Healing-wise, follow all the fundamentals. <RisingSunKick /> on cooldown, avoid
          overcapping <RenewingMist /> charges. Try to keep your team at even health levels. Consume
          your <ZenPulse /> procs to heal your most injured ally, ideally on someone with healing
          amps for efficiency.
        </p>
        <p>
          Spread out your cooldowns as much as possible. Prioritize using <ChiJi /> as your most
          powerful cooldown, consuming all free <EnvelopingMist />s you get. After that, use{' '}
          <JadeEmpowerment />, <SheilunsGift />, and <CelestialConduit /> when health bars start to
          drop. Do not hesitate to use defensives and <LifeCocoon /> early when out of cooldowns, do
          not save them for when it is already too late. You will only get one use of <Revival />,
          so time it well, when the whole group is low.
        </p>
        <p>
          Sometimes, an ally will receive a healing absorb after <ThrowDarkflame />, so keep an eye
          out for that.
        </p>
      </BossSubSection>
      <BossSubSection title="The Darkness" difficulty="medium">
        <p>
          As the healer, you are generally responsible for moving the candle during <UmbralSlash />,
          and for refilling the candle after each slash. Then, one of your teammates should refill
          it during <EternalDarkness />.
        </p>
        <p>
          <EternalDarkness /> hits very hard with 4 instances of damage over 4 seconds. This only
          occurs every 60 seconds, so you can safely send a lot of healing cooldowns each time.
        </p>
        <p>
          <Shadowblast /> hits quite hard, so make sure the target is topped for it, and if the key
          is high enough they might need a personal or <LifeCocoon />. It is fully cancelled with{' '}
          <Shadowmeld />!
        </p>
      </BossSubSection>
    </DungeonSection>
  )
}
