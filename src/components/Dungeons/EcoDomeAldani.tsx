import { DungeonSection } from './DungeonSection.tsx'
import { BossSubSection } from './BossSubSection.tsx'
import { NotableTrash } from './NotableTrash.tsx'
import { SubSubSection } from '../Guide/SubSubSection.tsx'
import {
  BindingJavelin,
  ChiJi,
  Devour,
  HarmonicSurge,
  JadeEmpowerment,
  LegSweep,
  LifeCocoon,
  Revival,
  RingOfPeace,
  RisingSunKick,
  TouchOfDeath,
  ToxicRegurgitation,
  Vivify,
  WarpStrike,
} from '../Common/WowheadLink/Spells.tsx'
import { ConduitOfTheCelestials, MasterOfHarmony } from '../Common/SpecialTexts.tsx'

export function EcoDomeAldani() {
  return (
    <DungeonSection title="Eco-Dome Aldani" tree="idk">
      <BossSubSection title="Azhiccar" difficulty="medium">
        <p>
          Two players are targeted by <ToxicRegurgitation /> and are given short hard-hitting
          debuffs. Ramp on these two players ahead of time, then use <JadeEmpowerment />,
          spot-healing, and <LifeCocoon /> to heal them. They should use defensives here. The next
          two players targeted in the same phase are always different, so you can be prepared ahead
          of time.
        </p>
        <p>
          During <Devour /> the whole party takes light pulsing damage for 18 seconds. <ChiJi />{' '}
          should be used here every time which will heal through most of it. If you have a few free
          globals, assist with ad control with <LegSweep /> and <RingOfPeace />.
        </p>
      </BossSubSection>
      <BossSubSection title="Taah'bat and A'wazj" difficulty="hard">
        <p>
          A very challenging boss at all levels. Challenging for you the healer, but also highly
          dependent on your team to go smoothly.
        </p>
        <p>
          Twice each main phase, <BindingJavelin /> targets two players, forcing them to spread, and
          deals a heavy initial followed by gradually ramping damage on each of the two players
          until their javelin is killed. Shortly after, a random player is targeted by{' '}
          <WarpStrike /> and if the javelin is not dead, this could overlap with their debuff.
        </p>
        <p>
          I like to use <ChiJi /> during <BindingJavelin /> since it is harder to use in the
          intermission. <JadeEmpowerment /> is also quite powerful since it has 3 targets. Keep in
          mind the ramping damage, it will <i>really</i> hurt when it reaches 3 stacks. If it
          reaches 4 stacks, your group has essentially failed the dps check. <TouchOfDeath /> is
          great here for finishing off a javelin.
        </p>
        <p>
          During the intermission, players must try to cleave the boss with their beams while
          avoiding overlapping each other. This can make it difficult for you to be in melee to
          heal, so watch your positioning very carefully. Be ready to spot heal after players are
          hit, as they will often cleave each other, and there is also pulsing damage. Also, players
          might be light on defensives here after using them on <BindingJavelin />.
        </p>
        <p>
          <JadeEmpowerment /> can be good in in the intermission since you can safely stand in
          ranged. If you are picked as one of the targets, the intermission becomes significantly
          harder since you can no longer stand still and heal. This is a good time to use{' '}
          <LifeCocoon /> and <Revival />.
        </p>
      </BossSubSection>
      <BossSubSection title="Soul-Scribe" difficulty="hard">
        <p>
          This boss is pretty easy in lower keys since it is a simple rot fight with some moderate
          bursts.
        </p>
        <p>
          It becomes significantly harder in higher keys when the burst combined with a couple ticks
          of rot can kill a player. <MasterOfHarmony /> is quite strong here with its always up
          group-wide <HarmonicSurge /> healing.
        </p>
        <p>
          Use <ChiJi /> on cooldown, keep some healing amps out, avoid overcapping on{' '}
          <JadeEmpowerment />, and most importantly, pick up your souls, and you should be fine.
        </p>
      </BossSubSection>
      <NotableTrash dungeon="eda">
        <SubSubSection title="Overcharged Sentinels">
          <p>
            When Sentinels hit 50% HP, they continuously hit one random player for a chunk of
            damage. This scales significantly in difficulty with key level, as it can target the
            same player twice in a row! At this key level, you will need to (do your best to) top
            every player after every hit. <JadeEmpowerment /> is king here, but you only have so
            many charges. <ChiJi /> is great as well, as well as <RisingSunKick /> or instant{' '}
            <Vivify /> if the amount of healing needed isn{"'"}t too high.
          </p>
          <p>
            <ConduitOfTheCelestials /> is much better than <MasterOfHarmony /> at dealing with
            these.
          </p>
          <p>
            Your DPS is also partially responsible for ensuring this pull will die within a certain
            period of time, because eventually you will run out of healing resources.
          </p>
        </SubSubSection>
      </NotableTrash>
    </DungeonSection>
  )
}
