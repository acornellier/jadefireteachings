import { DungeonSection } from './DungeonSection.tsx'
import {
  ArcaneFissure,
  BlisteringFire,
  DeafeningScreech,
  FortifyingBrew,
  ImprovedDetox,
  LegSweep,
  LifeCocoon,
  ManaBomb,
  PressurePoints,
  Revival,
  RingOfPeace,
  SheilunsGift,
  SoothingMist,
  SpinningCraneKick,
} from '../Common/WowheadLink/Spells.tsx'
import { BossSubSection } from './BossSubSection.tsx'

export function AlgetharAcademy() {
  return (
    <DungeonSection
      title="Algeth'ar Academy"
      Talents={[ImprovedDetox, PressurePoints]}
      video="https://www.youtube.com/watch?v=eX7rgaLfSQw"
    >
      <BossSubSection title="Overgrown Ancient" difficulty="medium">
        <p>
          Pretty easy boss thanks to <SpinningCraneKick />.
        </p>
        <p>
          I like to help my tank when the ads pop out by spinning for a couple globals, then using{' '}
          <LegSweep />, dispelling the tank, then knocking them away with <RingOfPeace />.
        </p>
      </BossSubSection>
      <BossSubSection title="Crawth" difficulty="hard">
        <p>
          The final phase of this boss is very challenging with <DeafeningScreech /> overlapping
          with <BlisteringFire />, so make sure to have as many cooldowns and defensives as possible
          up for it. Hopefully you only get 2 <DeafeningScreech /> in that phase, but always be
          ready to heal 3. But still send cooldowns in the first phase as it is not easy.
        </p>
        <p>
          Ramping is pretty effective since there is no other damage leading into the{' '}
          <DeafeningScreech />. But be careful with <SoothingMist /> to not get silenced on the
          screech!
        </p>
        <p>
          The one <DeafeningScreech /> where you have haste should be pretty free.
        </p>
      </BossSubSection>
      <BossSubSection title="Vexamus" difficulty="EXTREME">
        <p>
          A very challenging fight to heal. <ManaBomb /> goes out every 25 seconds, and every second{' '}
          <ManaBomb /> is followed by an <ArcaneFissure />, meaning you will need to top players
          after every second <ManaBomb />, making it harder.
        </p>
        <p>
          Use a cooldown on every <ManaBomb /> until you run out. When using <Revival />, use it
          right before <ManaBomb /> expires. Whenever you don{"'"}t have cooldowns, do a full ramp
          on all 4 players, and spam <SheilunsGift />, focusing on target selection.
        </p>
        <p>
          Use <FortifyingBrew /> on the even sets with <ArcaneFissure />. Use <LifeCocoon />{' '}
          aggressively on any player who looks like they{"'"}re in trouble. If you are dry on
          cooldowns going into a <ManaBomb /> with a <ArcaneFissure />, that{"'"}s a great time to
          ask your teammates to use defensives!
        </p>
      </BossSubSection>
      <BossSubSection title="Echo of Doragosa" difficulty="easy">
        <p>There isn{"'"}t really anything to heal here. Just dodge and focus on damage!</p>
        <p>
          Sometimes, this fight can get really out of hand if people misplay the mechanics. Then you
          {"'"}ll have your work cut out for you! But with correct play, there isn{"'"}t much to do.
        </p>
      </BossSubSection>
    </DungeonSection>
  )
}
