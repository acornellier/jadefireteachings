import { DungeonSection } from './DungeonSection.tsx'
import { BossSubSection } from './BossSubSection.tsx'
import { NotableTrash } from './NotableTrash.tsx'

export function Dawnbreaker() {
  return (
    <DungeonSection title="Dawnbreaker" tree="moh">
      <BossSubSection title="Shadowcrown" difficulty="hard"></BossSubSection>
      <BossSubSection title="Anubikkaj" difficulty="EXTREME"></BossSubSection>
      <BossSubSection title="Rashanan" difficulty="EXTREME"></BossSubSection>
      <NotableTrash dungeon="db"></NotableTrash>
    </DungeonSection>
  )
}
