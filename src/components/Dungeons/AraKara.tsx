import { DungeonSection } from './DungeonSection.tsx'
import { BossSubSection } from './BossSubSection.tsx'
import { NotableTrash } from './NotableTrash.tsx'

export function AraKara() {
  return (
    <DungeonSection title="Ara-Kara" tree="idk">
      <BossSubSection title="Avanoxx" difficulty="hard"></BossSubSection>
      <BossSubSection title="Anubzekt" difficulty="medium"></BossSubSection>
      <BossSubSection title="Kikatal" difficulty="medium"></BossSubSection>
      <NotableTrash dungeon="ak"></NotableTrash>
    </DungeonSection>
  )
}
