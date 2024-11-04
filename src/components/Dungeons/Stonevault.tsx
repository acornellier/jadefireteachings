import { DungeonSection } from './DungeonSection.tsx'
import {
  BlazingCrescendo,
  CelestialConduit,
  ChiJi,
  EntropicReckoning,
  ExhaustVents,
  Restoral,
  Revival,
  SeismicReverberation,
  SheilunsGift,
  VoidCorruption,
} from '../Common/WowheadLink/Spells.tsx'
import { BossSubSection } from './BossSubSection.tsx'
import { Link } from '../Common/Link.tsx'

export function Stonevault() {
  return (
    <DungeonSection title="Stonevault" tree="conduit" Talents={[Restoral]}>
      <BossSubSection title="E.D.N.A." difficulty="hard">
        <p>
          This is a challenging HPS boss. Follow the fundamentals of healing, keeping up the melee
          rotation and rotating through all your CDs as efficiently as possible.
        </p>
        <p>
          <Restoral /> is taken to avoid dispelling <SeismicReverberation /> off the tank with{' '}
          <Revival /> on the first boss. Use{' '}
          <Link href="https://wago.io/ednaDispel">Ellemere{"'"}s weakaura</Link> to know when to
          dispel the tank.
        </p>
        <p>
          There are several ways to break pillars, and I am not sure which is best yet. Will update
          this later.
        </p>
      </BossSubSection>
      <BossSubSection title="Master Machinists" difficulty="medium">
        <p>
          Have a good amount of healing for each <ExhaustVents />, and top your group for the{' '}
          <BlazingCrescendo />. The third <ExhaustVents /> overlaps with a <BlazingCrescendo />. Use
          big healing and defensives here.
        </p>
      </BossSubSection>
      <BossSubSection title="Skarmorak" difficulty="EXTREME">
        <p>
          The difficulty of this boss will vary based on how good your DPS are at killing the
          shards, and breaking the shield. If two spikes go off at once, or if the shield lasts more
          than a few ticks, then you are going to have a very rough time. Even if DPS play well,
          this is a very hard healing check.
        </p>
        <p>
          I usually grab 2 healing increase orbs from the first set to help me keep up in HPS for
          the shards breaking, and a 3rd orb from the second set. Follow healing fundamentals,
          maximizing your HPS. You may need to send healing CDs in the main phase.
        </p>
        <p>
          Ideally the DPS can communicate to you how quickly the shield will die, and you can plan
          your healing accordingly. If you do not, then you should assume it will last and commit
          healing CDs before it{"'"}s too late.
        </p>
      </BossSubSection>
      <BossSubSection title="Void Speaker Eirich" difficulty="hard">
        <p>
          A tough fight for melee, but not unmanageable. It is very fast paced, and you will like
          you never get a break. Have a plan for which 2 players will clear their <VoidCorruption />{' '}
          first and be ready to heal the other 2 players who don{"'"}t clear right away. They will
          be especially in trouble if the debuff overlaps with <EntropicReckoning /> – defensives!
        </p>
        <p>
          The healing check itself is not too hard. The abilities are offset in a weird way, so
          planning CDs is hard. Use <SheilunsGift /> on the <EntropicReckoning /> and <ChiJi /> on
          CD for any required healing. Use <CelestialConduit /> or <Revival /> when dry.
        </p>
      </BossSubSection>
    </DungeonSection>
  )
}
