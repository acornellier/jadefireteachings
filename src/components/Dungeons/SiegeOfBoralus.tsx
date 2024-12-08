import { DungeonSection } from './DungeonSection.tsx'
import {
  BreakWater,
  CloakOfShadows,
  DiffuseMagic,
  ExpelHarm,
  FieryRicochet,
  ImprovedDetox,
  LifeCocoon,
  Paralysis,
  PutridWaters,
  Revival,
  Slam,
  Stoneform,
  ThunderFocusTea,
} from '../Common/WowheadLink/Spells.tsx'
import { BossSubSection } from './BossSubSection.tsx'
import { Link } from '../Common/Link.tsx'
import { OrderedList } from '../Common/OrderedList.tsx'

export function SiegeOfBoralus() {
  return (
    <DungeonSection title="Siege of Boralus" tree="either" Talents={[ImprovedDetox]}>
      <BossSubSection title="Chopper Redhook" difficulty="easy">
        <p>
          If a Powdershot spawns away from your group, use <Paralysis /> and keep it CC{"'"}d for
          the fight.
        </p>
        <p>Make sure to contribute to boss damage during burn phase.</p>
      </BossSubSection>
      <BossSubSection title="Dread Captian Lockwood" difficulty="medium">
        <p>
          You really want to stay in melee the whole fight, so encourage your tank and melee to
          stack and move together.
        </p>
        <p>
          <FieryRicochet /> hits quite hard, so be ready with a defensive and healing CD every time.
        </p>
      </BossSubSection>
      <BossSubSection title="Hadal Darkfathom" difficulty="easy">
        <p>
          Check <Link href="https://not-even-close.com">Not Even Close</Link> to determine how to
          live <BreakWater />. <ThunderFocusTea /> + <ExpelHarm /> is quite useful here.
        </p>
      </BossSubSection>
      <BossSubSection title="Viq'Goth" difficulty="EXTREME">
        <p>
          A very challenging fight, but not a test of your HPS! Instead this will test your reaction
          time, your decision making, and your ability to read OmniCD. This is a common boss design
          where there are 2 magic dispels, and you must make a choice on who to dispel then heal the
          other.
        </p>
        <p>
          Unfortunately, the initial tick of the <PutridWaters /> debuff hits VERY hard, and
          meanwhile the tentacles is slamming down on the whole group. You will need to instantly
          dispel one player, top them for the <Slam />, and heal the other debuff! This is often
          impossible, so you really just want both debuffs dispelled every time if possible. The
          good news is that Mistweaver has several tools to help with the <PutridWaters /> dispels:{' '}
          <DiffuseMagic />, <Revival />, and <LifeCocoon />.
        </p>
        <p>
          The basic plan is to always dispel the player in the most danger. The ideal strategy is
        </p>
        <OrderedList>
          <li>If the tank gets it, dispel the other debuff, and top the person you dispelled.</li>
          <li>
            If a player that can remove it themselves gets it, then let them do it, dispel the other
            debuff, and top both players. Examples: <DiffuseMagic />, <Stoneform />,{' '}
            <CloakOfShadows />.
          </li>
          <li>
            <Revival /> both debuffs off. Or, dispel one and <LifeCocoon /> the other.
          </li>
        </OrderedList>
        <p>
          Sadly, this is much easier said than done. You will panic, you will overlap, and you will
          waste CDs. Try to stay calm and logical, watch OmniCD, and communicate with your team!
        </p>
      </BossSubSection>
    </DungeonSection>
  )
}
