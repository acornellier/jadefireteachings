import { OperationFloodgate } from './OperationFloodgate.tsx'
import { PrioryOfTheSacredFlame } from './PrioryOfTheSacredFlame.tsx'

export function Dungeons() {
  return (
    <div>
      <div className="sub-section flex flex-col mb-3">
        <p>
          This dungeon guide assumes you already know the mechanics of each boss. I will mostly
          write about what specifically you should be doing as a Mistweaver.
        </p>
        <p>Season 3 guides coming soon!</p>
      </div>
      <OperationFloodgate />
      <PrioryOfTheSacredFlame />
    </div>
  )
}
