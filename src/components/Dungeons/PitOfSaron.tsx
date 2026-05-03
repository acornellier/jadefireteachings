import { DungeonSection } from './DungeonSection.tsx'
import {
  BoneInfusion,
  CelestialConduit,
  ChiJi,
  Cryostomp,
  DanceOfChiJi,
  DiffuseMagic,
  EnvelopingMist,
  Frostbite,
  ImprovedDetox,
  Paralysis,
  PlagueExpulsion,
  Revival,
  ShadeShift,
  Shadowbind,
  Shadowmeld,
  SheilunsGift,
  SoothingMist,
  SpinningCraneKick,
  SwiftArt,
  TigersLust,
} from '../Common/WowheadLink/Spells.tsx'
import { BossSubSection } from './BossSubSection.tsx'

export function PitOfSaron() {
  return (
    <DungeonSection
      title="Pit of Saron"
      Talents={[ImprovedDetox]}
      RecommendedTalents={[DiffuseMagic, SwiftArt]}
    >
      <BossSubSection title="Forgemaster Garfrost" difficulty="medium">
        <p>
          Before starting the dungeon, tell your tank you want to bring funnel onto this boss. Use{' '}
          <Paralysis /> on the Necrolyte outside the boss room (G44), and bring the other 4 minions
          into the boss. They will live the whole fight, and give you <i>massive</i> healing funnel
          from <DanceOfChiJi /> procs. This makes the fight pretty easy.
        </p>
        <p>
          The only thing you really have to worry about is topping the group leading in to{' '}
          <Cryostomp />, so use a healing cooldown there. Then make sure to dispel or <TigersLust />{' '}
          immediately afterwards.
        </p>
      </BossSubSection>
      <BossSubSection title="Krick and Ick" difficulty="hard">
        <p>
          A deceptively hard fight. The challenge comes from the fixates from <Shadowbind />{' '}
          overlapping with AoE from <ShadeShift /> or <PlagueExpulsion />. At the start of the main
          phase, Krick casts <ShadeShift />, dealing heavy pulsing damage for 10 seconds. Use a big
          cooldown like <CelestialConduit /> here. Then about 15 seconds after, Ick explodes for a
          big instant hit with <PlagueExpulsion />. I like to use <ChiJi /> or <Revival /> here. Any
          player targetted by <Shadowbind /> during these events is in big danger. The second{' '}
          <PlagueExpulsion /> is usually safe since the Shades of Krick should be dead by then.
        </p>
        <p>
          This fight becomes a lot easier when players are able to remove snares. You have lots of
          tools so use them: <TigersLust />, <ChiJi />, <SwiftArt />, and <Shadowmeld />.
        </p>
      </BossSubSection>
      <BossSubSection title="Tyrannus" difficulty="medium">
        <p>
          A pretty easy fight thanks to <SpinningCraneKick /> and <SoothingMist />.
        </p>
        <p>
          At the start of each main phase, the boss deals heavy ticking damage with <BoneInfusion />
          . Use cooldowns here. If the Plaguespreader from intermission is alive here, then your DPS
          has not done their job, and you should send big defensives and cooldowns.
        </p>
        <p>
          For the <Frostbite /> debuffs, you know ahead of time who is targetted, so ramp with{' '}
          <EnvelopingMist />, then simply spam <SheilunsGift />.
        </p>
        <p>
          When ads are out, simply <SpinningCraneKick />!
        </p>
      </BossSubSection>
    </DungeonSection>
  )
}
