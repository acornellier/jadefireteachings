import { DungeonSection } from './DungeonSection.tsx'
import { BossSubSection } from './BossSubSection.tsx'
import { SubSubSection } from '../Guide/SubSubSection.tsx'
import { NotableTrash } from './NotableTrash.tsx'
import {
  BlackoutKick,
  BurningFermentation,
  CelestialConduit,
  ChiJi,
  DiffuseMagic,
  FailedBatch,
  FlutteringWing,
  GiftOfTheCelestials,
  JadeEmpowerment,
  LegSweep,
  LifeCocoon,
  PressurePoints,
  Revival,
  RingOfPeace,
  SheilunsGift,
  SpinningCraneKick,
  SpoutingStout,
  ThrowCinderbrew,
} from '../Common/WowheadLink/Spells.tsx'

export function CinderbrewMeadery() {
  return (
    <DungeonSection
      title="Cinderbrew Meadery"
      video="https://www.youtube.com/watch?v=6mwbS2RStz8"
      tree="idk"
      Talents={[PressurePoints]}
      RecommendedTalents={[GiftOfTheCelestials]}
    >
      <BossSubSection title="Brewmaster Aldryr" difficulty="hard">
        <p>
          <ThrowCinderbrew /> puts 2 debuffs on players, that hit quite hard. Use <ChiJi /> on
          cooldown to heal through these, and be afraid when it{"'"} not up. <JadeEmpowerment /> and{' '}
          <CelestialConduit /> are good here. Watch defensives and use <LifeCocoon /> if necessary.
          Have good positioning so you can always be in melee.
        </p>
        <p>
          Intermission can be stressful but there is very little damage going out so not much to
          worry about.
        </p>
      </BossSubSection>
      <BossSubSection title="Benk Buzbee" difficulty="medium">
        <p>
          <FlutteringWing /> is a medium-hitting ability that hits 5 times over 2 seconds. A fully
          stacked <ChiJi /> <BlackoutKick />, or simply a <JadeEmpowerment /> should be enough to
          heal through it.
        </p>
        <p>
          In higher keys, you may be expected to send the bees towards barrels as the healer. Just
          make sure to not send them when you are needed for <FlutteringWing />.
        </p>
      </BossSubSection>
      <BossSubSection title="I'pa" difficulty="hard">
        <p>
          <SpoutingStout /> is pretty scary group-wide AoE. Its targetting is strange, hitting one
          player at a time, making it awkward to use <SheilunsGift />. Furthermore, the heavy
          movement makes it hard to use <JadeEmpowerment />. <ChiJi /> is obviously king (queen?)
          here, and will be available for every second <SpoutingStout />. For every other one, I
          recommend ramping and using your other cooldowns.
        </p>
        <p>
          <BurningFermentation /> is a hard-hitting magic dot on 2 players. Dispel one immediately,
          ideally on one that has no dwarf, diffuse, cloak, etc. If the other player has no way to
          remove the debuff, and no major defensive, then use <LifeCocoon /> or <Revival /> if there
          are no other options.
        </p>
        <p>
          <RingOfPeace /> and <LegSweep /> are very useful for controlling the mobs spawned. I
          generally save <RingOfPeace /> for an emergency for when the blobs are going to hit the
          boss during <SpoutingStout />.
        </p>
      </BossSubSection>
      <BossSubSection title="Goldie Baronbottom" difficulty="hard">
        <p>
          Hopefully your tank will follow the 2-1-0 pattern, where they first break 2 large barrels,
          then 1 barrel, then 0, then intermission hits, and the final barrel will explode at the
          end of the intermission. Players should never clear large barrels. Following this makes
          for a not too challenging healing check.
        </p>
        <p>
          The scariest parts of the fight are when players get more than 1 stack, and the
          intermission. Use <ChiJi /> on one of those two instances. Be very careful with{' '}
          <JadeEmpowerment />, positioning yourself where no wave will hit you for the duration.
        </p>
        <p>
          Be quick on the dispels. They don{"'"}t hit too hard, but go out after a tank clear, so be
          careful if it goes on a player with low health. Do not hesitate to send <DiffuseMagic />{' '}
          or <LifeCocoon /> on the other dispel.
        </p>
        <p>
          Positioning is very important here, since there is a lot to dodge but you want to stay in
          melee for healing!
        </p>
      </BossSubSection>
      <NotableTrash dungeon="cm">
        <p>
          A note on <SpinningCraneKick />: since this dungeon has a lot of pulls with very large
          pull counts, it is very tempting to spin through every pack for big dam. However, remember
          that its healing is quite weak! It is important to understand when you can afford to spin
          and when you cannot. If unsure, just don{"'"}t use the spell until you are more
          comfortable.
        </p>
        <SubSubSection title="Flavor Scientists">
          <p>
            These guys cast <FailedBatch /> which drops a totem for you to kill. Your{' '}
            <JadeEmpowerment /> is great for killing it, so help out!
          </p>
        </SubSubSection>
      </NotableTrash>
    </DungeonSection>
  )
}
