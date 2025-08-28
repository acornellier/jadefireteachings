import { DungeonSection } from './DungeonSection.tsx'
import { BossSubSection } from './BossSubSection.tsx'
import { NotableTrash } from './NotableTrash.tsx'

export function EcoDomeAldani() {
  return (
    <DungeonSection title="Eco-Dome Aldani" tree="idk">
      <BossSubSection title="Azhiccar" difficulty="medium"></BossSubSection>
      <BossSubSection title="Taah'bat and A'wazj" difficulty="hard"></BossSubSection>
      <BossSubSection title="Soul-Scribe" difficulty="hard"></BossSubSection>
      <NotableTrash dungeon="eda"></NotableTrash>
    </DungeonSection>
  )
}
