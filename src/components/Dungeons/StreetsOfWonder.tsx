import { DungeonSection } from './DungeonSection.tsx'
import { BossSubSection } from './BossSubSection.tsx'
import { NotableTrash } from './NotableTrash.tsx'
import {
  ChainsOfDamnation,
  DiffuseMagic,
  FanMail,
  Interrogation,
  JadeEmpowerment,
  LifeCocoon,
  PhaseSlash,
  Revival,
  SoothingMist,
  TigersLust,
  UnstableGoods,
} from '../Common/WowheadLink/Spells.tsx'
import { LoomitharsLivingSilk } from '../Common/WowheadLink/Items.tsx'

export function StreetsOfWonder() {
  return (
    <DungeonSection title="Streets of Wonder" tree="either">
      <BossSubSection title="Zo'phex" difficulty="easy">
        <p>
          Either spot heal the player targeted by <Interrogation /> with <SoothingMist />, or simply{' '}
          <JadeEmpowerment /> the cage. If needed, use <LifeCocoon /> or <LoomitharsLivingSilk />{' '}
          right before it dies and explodes so they live the final hit.
        </p>
      </BossSubSection>
      <BossSubSection title="The Grand Menagerie" difficulty="easy">
        <p>
          On the first boss, removing both dispels is very useful, you can do so with{' '}
          <DiffuseMagic />, <Revival /> or with one of the players removing it themselves with Dwarf
          or Cloak. If unable to remove both, spot heal the player holding the debuff and consider{' '}
          <LifeCocoon />.
        </p>
        <p>
          On the third boss, you can remove the <ChainsOfDamnation /> with <TigersLust />.
        </p>
      </BossSubSection>
      <BossSubSection title="Mailroom Mayhem" difficulty="medium">
        <p>
          <FanMail /> is one of the only healing checks of the dungeon, and it is very easy! You
          have lots of time to ramp. If your team trolls and soaks too many circles it might be a
          bit harder, only a small area in the center needs to be left clear.
        </p>
        <p>
          You should help with <UnstableGoods />, since you are mobile and there is nothing to heal
          during it. I often do 3 or even more.
        </p>
      </BossSubSection>
      <BossSubSection title="Myza's Oasis" difficulty="easy">
        <p>This boss doesn{"'"}nt really do anything.</p>
      </BossSubSection>
      <BossSubSection title="So'azmi" difficulty="medium">
        <p>
          <PhaseSlash /> actually hits moderately hard in higher keys, so be ready to heal it. If
          split from your team, <Revival /> heals across walls!
        </p>
      </BossSubSection>
      <NotableTrash dungeon="strt">
        <p>
          Peacekeepers do a lot of damage and can target the same player twice so be ready to spot
          heal.
        </p>
        <p>
          Strongarms in the Oasis area do a lot of tank damage, so watch your tank carefully here
          and provide them lots of healing.
        </p>
      </NotableTrash>
    </DungeonSection>
  )
}
