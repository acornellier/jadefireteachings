import { DungeonSection } from './DungeonSection.tsx'
import { BossSubSection } from './BossSubSection.tsx'
import { NotableTrash } from './NotableTrash.tsx'

export function HallsOfAtonement() {
  return (
    <DungeonSection title="Halls of Atonement" tree="conduit">
      <BossSubSection title="Halkias" difficulty="easy"></BossSubSection>
      <NotableTrash dungeon="hoa"></NotableTrash>
    </DungeonSection>
  )
}
