import { DungeonSection } from './DungeonSection.tsx'
import { BossSubSection } from './BossSubSection.tsx'
import {
  AnchorShot,
  ChiJi,
  CollapsingStar,
  HyperlightJolt,
  LegSweep,
  LifeCocoon,
  Paralysis,
  Revival,
  RingOfPeace,
  TimeBomb,
} from '../Common/WowheadLink/Spells.tsx'
import { LoomitharsLivingSilk } from '../Common/WowheadLink/Items.tsx'

export function Gambit() {
  return (
    <DungeonSection title="Soleah's Gambit" tree="either">
      <BossSubSection title="Hylbrande" difficulty="easy">
        <p>There isn{"'"}t really anything to heal on this boss</p>
        <p>
          You can be useful by using your CC on the mobs! Use <Paralysis />, <RingOfPeace />,{' '}
          <LegSweep />, and your kick to keep the mobs from completing casts.
        </p>
      </BossSubSection>
      <BossSubSection title="Timecap'n Hooktail" difficulty="medium">
        <p>
          Most of the difficulty of this boss will come down to your tank. If your tank is able to
          keep the mobs controlled, and you group positions decently, most of the other mechanics
          are pretty easy to deal with. If ads are loose, it can get hectic quickly. You can help
          with mob positioning with <RingOfPeace /> and <LegSweep />.
        </p>
        <p>
          For <TimeBomb />, simply dispel on cooldown. Do not double dispel as that might kill your
          group! At certain intervals, there can be overlaps with dispel and <AnchorShot />. Try to
          delay for a second or two in this situation to avoid killing the player targetted by{' '}
          <AnchorShot />.
        </p>
        <p>
          At higher keys, you <i>can</i> min-max <TimeBomb /> by holding your dispel to increase the
          uptime of the haste buff. But since the timer in this dungeon is easy, I recommend
          avoiding this unless you have a lot of experience here, and know your teammates well.
        </p>
      </BossSubSection>
      <BossSubSection title="Sol'leah" difficulty="medium">
        <p>
          Finally a healing check in this dungeon with <CollapsingStar />! Before starting this
          boss, ask one of your ranged dps to do the soaks for you. It can be quite difficult for a
          mistweaver to heal through it while soaking compared to other healers, so your dps will
          probably expect you to do it unless you say something. However, if your dps does the
          soaks, they might not be watching party health, or the timer on <HyperlightJolt />, so be
          ready for more intense healing.
        </p>
        <p>
          Ramping is great here, but often your ramp will expire due to how long it can take to soak
          all the charges of <CollapsingStar />. Since there is no other healing to do on this
          fight, be sure to commit a lot of cooldowns here. Use <ChiJi /> on cooldown, and use{' '}
          <LifeCocoon />, <LoomitharsLivingSilk />, and <Revival /> when needed.
        </p>
      </BossSubSection>
    </DungeonSection>
  )
}
