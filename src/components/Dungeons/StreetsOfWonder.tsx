import { DungeonSection } from './DungeonSection.tsx'
import { BossSubSection } from './BossSubSection.tsx'
import { NotableTrash } from './NotableTrash.tsx'

export function StreetsOfWonder() {
  return (
    <DungeonSection title="Streets of Wonder" tree="either">
      <BossSubSection title="Zo'phex" difficulty="easy"></BossSubSection>
      <BossSubSection title="The Grand Menagerie" difficulty="easy"></BossSubSection>
      <BossSubSection title="Mailroom Mayhem" difficulty="medium"></BossSubSection>
      <BossSubSection title="Myza's Oasis" difficulty="easy"></BossSubSection>
      <BossSubSection title="So'azmi" difficulty="easy"></BossSubSection>
      <NotableTrash dungeon="strt"></NotableTrash>
    </DungeonSection>
  )
}
