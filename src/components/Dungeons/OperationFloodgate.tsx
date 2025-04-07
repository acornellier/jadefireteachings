import { DungeonSection } from './DungeonSection.tsx'
import { BossSubSection } from './BossSubSection.tsx'
import {
  AwakenTheSwamp,
  Backwash,
  CelestialConduit,
  ChiJi,
  GiftOfTheCelestials,
  Gigazap,
  JadeBond,
  JadeEmpowerment,
  KineticExplosiveGel,
  LifeCocoon,
  QuickShot,
  RazorchokeVines,
  RenewingMist,
  Revival,
  RisingSunKick,
  SheilunsGift,
  SoothingMist,
  TurboCharge,
  WarpBlood,
  ZenPulse,
} from '../Common/WowheadLink/Spells.tsx'
import { NotableTrash } from './NotableTrash.tsx'
import { SubSubSection } from '../Guide/SubSubSection.tsx'
import { ConduitOfTheCelestials } from '../Common/SpecialTexts.tsx'

export function OperationFloodgate() {
  return (
    <DungeonSection
      title="Operation: Floodgate"
      video="https://www.youtube.com/watch?v=CM1DxQ7uiJA"
      tree="conduit"
      RecommendedTalents={[GiftOfTheCelestials]}
    >
      <BossSubSection title="Big M.O.M.M.A." difficulty="hard">
        <p>
          The main healing to be done is in the burn phase, where you will take significant damage
          over 12 seconds. Ramping into this is great, so be aware of when she will phase. This
          phase is easier with <GiftOfTheCelestials /> since <ChiJi /> should be up every burn. If
          you do not have <ChiJi />, do not be afraid to commit a lot of cooldowns. Use Diffuse or
          Fort Brew on each burn, and do not be afraid to send <LifeCocoon /> if someone drops low.
        </p>
        <p>
          There is very little healing to do in P1, unless you take too long to phase, and then the
          boss will begin to pulse damage. If this happens, you should be quite scared, because it
          will make the intermission harder. Keep your group healthy, but make sure you conserve
          cooldowns for when you actually phase.
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
          Probably the hardest boss of the season to heal! This is a rot fight with{' '}
          <RazorchokeVines /> combined with burst damage from <AwakenTheSwamp />, which makes it
          very interesting and fun to heal.
        </p>
        <p>
          Since healers are never linked to their teammates, you will be taking much less damage, so
          you will never be in danger. You should still send defensives on <AwakenTheSwamp />, and
          then you even afford to tank a wave during it if it allows you to avoid cancelling a cast.
        </p>
        <p>
          For the rot, follow all the fundamentals. <RisingSunKick /> on cooldown, avoid overcapping{' '}
          <RenewingMist /> charges. Try to keep your team at even health levels. Consume your{' '}
          <ZenPulse /> procs to heal your most injured ally, ideally on someone with healing amps
          for efficiency. I recommend using <JadeEmpowerment /> during the rot since it is easier to
          cast without having to dodge waves.
        </p>
        <p>
          The burst damage occurs every 30 seconds. With <GiftOfTheCelestials /> you can cover every
          second instance. With <JadeBond />, you can cover every 4th, plus the rot damage leading
          into it, and your teammates will feel very safe. Outside of <ChiJi />, <SheilunsGift /> is
          a great spell here, alongside <CelestialConduit /> and finally <Revival /> if you have
          nothing else.
        </p>
        <p>
          Your teammates ideally use defensives on each <AwakenTheSwamp />, but many don{"'"}t have
          enough to cover each one. Be aware of when they are dry and use <LifeCocoon /> on cooldown
          on whoever is most in danger. With <ConduitOfTheCelestials />, you can get <LifeCocoon />{' '}
          on every second <AwakenTheSwamp />.
        </p>
      </BossSubSection>
      <BossSubSection title="Geezle Gigazap" difficulty="hard">
        <p>
          This boss does a 1 minute rotation of <TurboCharge /> which pulses damage over 10 seconds,
          and 2 uses of <Gigazap />, each use targetting 2 players with a big instant hit and a
          decently hard-hitting dot.
        </p>
        <p>
          For <TurboCharge />, <GiftOfTheCelestials /> is great so that you have <ChiJi /> every
          time which should be enough on its own. If you ran <JadeBond /> you will be scared when
          you don{"'"}t have <ChiJi /> you will need to make do with <JadeEmpowerment /> and{' '}
          <SheilunsGift />
        </p>
        <p>
          For <Gigazap />, defensives should be used. Be aware of who doesn{"'"}t have defensives,
          and be ready to spot heal them with <SoothingMist /> and <LifeCocoon />. If neither has
          defensives, consider using <LifeCocoon /> on one and spot heal the other.{' '}
          <JadeEmpowerment /> and <CelestialConduit /> are pretty good at healing through this.
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
            <JadeBond /> is great on these mobs, since using it on the first <WarpBlood /> will
            carry through until the end of the second <WarpBlood />. But as mentioned earlier, this
            talent will make it harder to heal some of the bosses.
          </p>
          <p>
            Outside of <ChiJi />, <JadeEmpowerment /> is strong here since there are 5 targets to
            hit. Bank up your charges, and be aware of your positioning before casting. Your team
            should be stopping the Demolitionists and Inspectors during <WarpBlood />.
          </p>
          <p>
            Do not be afraid to overcommit. Use a defensive on each <WarpBlood />, and use{' '}
            <LifeCocoon />, <Revival />, and health pots. Consider asking your tank to avoid pulling
            2 of these in back-to-back pulls so you have time to get cooldowns back, and your
            teammates have time to get defensives back.
          </p>
        </SubSubSection>
        <SubSubSection title="Bubbles">
          <p>
            Bubbles is a pain in the ass (fuck Bubbles!). He casts <Backwash />, which does 3
            instances of high damage over 1 second, then a smaller but still significant dot over 6
            seconds. Ramping is great here, since there is downtime leading into <Backwash />. Use
            defensives, <ChiJi />, and <SheilunsGift /> on the immediate damage. Then keep up the
            healing until the dot goes away.
          </p>
        </SubSubSection>
      </NotableTrash>
    </DungeonSection>
  )
}
