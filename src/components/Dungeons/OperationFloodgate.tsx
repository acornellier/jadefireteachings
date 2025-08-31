import { DungeonSection } from './DungeonSection.tsx'
import { BossSubSection } from './BossSubSection.tsx'
import {
  AwakenTheSwamp,
  ChiJi,
  EnvelopingMist,
  GiftOfTheCelestials,
  Gigazap,
  JadeEmpowerment,
  KineticExplosiveGel,
  LifeCocoon,
  MendingProliferation,
  QuickShot,
  RazorchokeVines,
  Revival,
  RisingSunKick,
  SoothingMist,
  TigerPalm,
  TurboCharge,
  WarpBlood,
} from '../Common/WowheadLink/Spells.tsx'
import { NotableTrash } from './NotableTrash.tsx'
import { SubSubSection } from '../Guide/SubSubSection.tsx'

export function OperationFloodgate() {
  return (
    <DungeonSection
      title="Operation: Floodgate"
      video="https://www.youtube.com/watch?v=XDyW8STMX6Y"
      tree="moh"
    >
      <BossSubSection title="Big M.O.M.M.A." difficulty="hard">
        <p>
          The main healing to be done is in the burn phase, where you will take significant damage
          over 12 seconds. Ramping into this is great, so be aware of when she will phase. Be aware
          that your healing amps might fall off since the burn lasts quite a while. <ChiJi /> should
          be up every burn. Use Diffuse or Fort Brew on each burn, and do not be afraid to send{' '}
          <LifeCocoon /> if someone drops low.
        </p>
        <p>
          There is very little healing to do in P1, unless you take too long to phase, and then the
          boss will begin to pulse damage. If this happens, you should be quite scared, because it
          will make the intermission harder. <JadeEmpowerment /> is powerful here to cleave off the
          adds. Keep your group healthy, but make sure you conserve cooldowns for when you actually
          phase.
        </p>
      </BossSubSection>
      <BossSubSection title="Demolition Duo" difficulty="medium">
        <p>
          Assuming your dps is positioning well, you should be able to dispel{' '}
          <KineticExplosiveGel /> almost immediately. This is important, because it hits hard and
          will kill the player if allowed to tick a few times. If you notice the player is out of
          position for the dispel, you can send <LifeCocoon /> so they can hold it for a few ticks.
        </p>
        <p>
          Keeza will spam <QuickShot /> on players. This is generally not too dangerous since she
          alternates between your teammates when shooting quickly in succession. But, if this
          overlaps with <KineticExplosiveGel />, someone can die (especially clothies), so try to
          top players quickly with spot healing to avoid this.
        </p>
      </BossSubSection>
      <BossSubSection title="Swampface" difficulty="EXTREME">
        <p>
          This is a rot fight with <RazorchokeVines /> combined with burst damage from{' '}
          <AwakenTheSwamp />, which makes it very interesting and fun to heal.
        </p>
        <p>
          Since healers are never linked to their teammates, you will be taking much less damage, so
          you will never be in danger. You should still send defensives on <AwakenTheSwamp />, and
          then you even afford to tank a wave during it if it allows you to avoid cancelling a cast.
        </p>
        <p>
          For the rot, follow all the fundamentals. <RisingSunKick /> on cooldown, and keep an{' '}
          <EnvelopingMist /> out for <MendingProliferation /> procs. I recommend using{' '}
          <JadeEmpowerment /> during the rot since it is easier to cast without having to dodge
          waves.
        </p>
        <p>
          The <AwakenTheSwamp /> burst damage occurs every 30 seconds. With <ChiJi /> you can cover
          every second instance. Your teammates ideally use defensives on each time, but many don
          {"'"}t have enough to cover each one. Be aware of when they are dry and use <LifeCocoon />{' '}
          on cooldown on whoever is most in danger.
        </p>
        <p>
          Getting your tank to pull Divers onto this boss is extremely helpful. If you have them,
          you can simply <JadeEmpowerment /> through <AwakenTheSwamp /> to keep your team healthy.
        </p>
      </BossSubSection>
      <BossSubSection title="Geezle Gigazap" difficulty="hard">
        <p>
          This boss does a 1 minute rotation of <TurboCharge /> which pulses damage over 10 seconds,
          and 2 uses of <Gigazap />, each use targeting 2 players with a big instant hit and a
          decently hard-hitting dot.
        </p>
        <p>
          For <TurboCharge />, ramping into <TigerPalm /> spam is very powerful, but it can be
          difficult to get a good ramp since it immediately follows debuffs. <GiftOfTheCelestials />{' '}
          is great so that you have <ChiJi /> every time which should be enough on its own.
        </p>
        <p>
          For <Gigazap />, defensives should be used. Be aware of who doesn{"'"}t have defensives,
          and be ready to spot heal them with <SoothingMist /> and <LifeCocoon />. If neither has
          defensives, consider using <LifeCocoon /> on one and spot heal the other.{' '}
          <JadeEmpowerment /> is good at healing through this as long as the targets have healing
          amps.
        </p>
        <p>
          <Gigazap /> always rotates through the party each phase. The first <Gigazap /> will target
          2 random non-tank players, and the second one will target the <i>other</i> two non-tank
          players. If you note this, you can ramp on the second pair of players.
        </p>
      </BossSubSection>
      <NotableTrash dungeon="of">
        <SubSubSection title="Bloodwarpers">
          <p>
            Bloodwarpers are extremely dangerous mobs that require very high amounts of healing.
            They cast <WarpBlood /> which deals damage AND applies an absorb. In higher keys, the
            damage alone will kill someone, while the absorb will prevent you from healing them. So
            you need to heal past the absorb, AND through some of the damage dealt.
          </p>
          <p>
            <JadeEmpowerment /> is very strong here since there are 5 targets to hit. Bank up your
            charges, and be aware of your positioning before casting. Your team should be stopping
            the Demolitionists and Inspectors during <WarpBlood />.
          </p>
          <p>
            Ramp for each <WarpBlood />, and use a defensive each time. Do not be afraid to
            overcommit, use <LifeCocoon />, <Revival />, and health pots.
          </p>
        </SubSubSection>
      </NotableTrash>
    </DungeonSection>
  )
}
