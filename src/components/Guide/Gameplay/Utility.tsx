import { SubSection } from '../SubSection.tsx'
import { UnorderedList } from '../../Common/UnorderedList.tsx'
import {
  AncientArts,
  BlessingOfFreedom,
  LegSweep,
  Paralysis,
  Polymorph,
  PressurePoints,
  RingOfPeace,
  Roll,
  TigersLust,
  Transcendence,
  Typhoon,
} from '../../Common/WowheadLink/Spells.tsx'

export function Utility() {
  return (
    <SubSection title="Utility">
      <p>
        <RingOfPeace />: knock enemies out for 5 seconds at a 40 yd range on a 45 sec CD. Arguably
        one of the best utility abilities in the game. The fact that you can place this anywhere in
        a 40 yd range to knock in any direction gives it incredible flexibility. It{"'"}s a knock,
        so doesn{"'"}t DR with anything, and unlike most knocks such as <Typhoon />, you don{"'"}t
        need to be behind the mob being knocked. Uses for this ability:
      </p>
      <UnorderedList className="ml-4">
        <li>Reposition enemies in combat. Especially useful for grouping immobile caster mobs.</li>
        <li>
          Knock enemies away and keep an area safe. Incredible defensive value for tanks. Can also
          be used on mobs that fixate players.
        </li>
        <li>Stop or kick at range.</li>
        <li>
          Reposition enemies out of combat. Using <RingOfPeace /> does not put you in combat, so
          sometimes you can knock a patrol to stop it from walking into you.
        </li>
      </UnorderedList>
      <p>
        <Paralysis />: hard CC with a 20 yd range on a 45 sec CD. This is very flexible and can be
        used for many things. Unlike most hard CC such as <Polymorph />, this has no creature type
        restrictions and is also insta-cast. It has a reasonably short cooldown that can be reduced
        by <AncientArts />. Uses for this ability:
      </p>
      <UnorderedList className="ml-4">
        <li>Permanently hard CC a mob during combat.</li>
        <li>Stop or kick at range.</li>
        <li>
          Skip a mob out of combat. Unfortunately, you will still be put in combat if you get too
          close, so combine this with <RingOfPeace /> to knock them away after using <Paralysis />.
        </li>
        <li>
          Soothe a mob with <PressurePoints />.
        </li>
      </UnorderedList>
      <p>
        <LegSweep />: the longest lasting AoE stun in the game on a short CD! Great for stopping a
        bunch of mobs for doing anything for a full 3 seconds. Usually use this as a stop, or to
        protect your tank from getting mauled.
      </p>
      <p>
        <TigersLust />: remove all movement impairments, and give a large movement speed increase.
        You will mostly be using this on yourself or your tank to move around the dungeon faster.
        However there are often dangerous debuffs that are also roots or snares, and using{' '}
        <TigersLust /> will remove these debuffs. This feature is very similar to{' '}
        <BlessingOfFreedom /> except you must use it after the player receives the debuff.
      </p>
      <p>
        <Transcendence />: a niche ability for repositioning yourself. Handy after a big knock to
        get yourself back in melee quickly. It can be used to teleport through walls to return to an
        area you{"'"}ve been to. For general repositioning, since both the initial cast and the
        recast are on the GCD, it{"'"}s often easier to just <Roll />.
      </p>
    </SubSection>
  )
}
