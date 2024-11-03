import { DungeonSection } from './DungeonSection.tsx'
import {
  ChiJi,
  Consumption,
  EmbraceDarkness,
  ImprovedDetox,
  LegSweep,
  RepulsiveVisage,
  RingOfPeace,
} from '../Common/WowheadLink/Spells.tsx'
import { MasterOfHarmony } from '../Common/SpecialTexts.tsx'
import { BossSubSection } from './BossSubSection.tsx'

export function MistsOfTirnaScithe() {
  return (
    <DungeonSection title="Mists of Tirna-Scithe" tree="moh" Talents={[ImprovedDetox]}>
      <p>
        Since there is little healing to do in this dungeon, I recommend running <MasterOfHarmony />{' '}
        for damage.
      </p>
      <BossSubSection title="Ingra Maloch" difficulty="medium">
        <p>
          The healing difficulty highly depends on how long your dps takes to push the boss out of
          P1. The boss does do damage until <EmbraceDarkness />, so DPS until then. After this cast,
          damage will ramp and you will need to do heavy rot healing. Be aware of tree HP, and be
          prepared to do a lot of healing if it appears you will be staying in P1 for a long time.
          Be extremely scared of <RepulsiveVisage /> fear casts after <EmbraceDarkness /> has been
          cast. Top the group before hand, and be ready for big healing right after.
        </p>
        <p>
          Be sure to contribute as much damage as possible during the burn phase. But don{"'"}t save
          everything, you don{"'"}t want to be stuck forever in the main phase.
        </p>
      </BossSubSection>
      <BossSubSection title="Mistcaller" difficulty="easy">
        <p>
          As long as you respect the intermission and use a defensive and 2 healing CDs every clone
          time, you will be fine. <ChiJi /> can cleave off the boss even though she is immune.
        </p>
      </BossSubSection>
      <BossSubSection title="Tred'ova" difficulty="easy">
        <p>
          Use a defensive and 2 healing CDs every <Consumption /> intermission. The amount of
          healing will depend on your dps. Just like last boss... And the one before that! The
          puddles are quite scary during <Consumption /> as they tick immediately and quite hard.
          Encourage your tank to pull the boss away during the main phase.
        </p>
        <p>
          Sometimes, your dps will be out of range of your healing, especially those pesky ranged
          players. Encourage them to stay close, and try to ebe aware of your and their positioning.
        </p>
        <p>
          Other than that, the only healing is the fixated player. Watch them and use{' '}
          <RingOfPeace /> and <LegSweep /> if it helps.
        </p>
        <p>
          Be sure not to move too much with the swirlies, avoid using your movement abilities unless
          absolutely necessary!
        </p>
      </BossSubSection>
    </DungeonSection>
  )
}
