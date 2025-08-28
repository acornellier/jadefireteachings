import { DungeonSection } from './DungeonSection.tsx'
import { BossSubSection } from './BossSubSection.tsx'
import { NotableTrash } from './NotableTrash.tsx'

export function Gambit() {
  return (
    <DungeonSection title="Soleah's Gambit" tree="either">
      <BossSubSection title="Hylbrande" difficulty="easy"></BossSubSection>
      <BossSubSection title="Timecap'n Hooktail" difficulty="medium"></BossSubSection>
      <BossSubSection title="Sol'leah" difficulty="medium"></BossSubSection>
      <NotableTrash dungeon="gmbt"></NotableTrash>
    </DungeonSection>
  )
}
