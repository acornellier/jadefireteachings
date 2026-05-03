import { AlgetharAcademy } from './AlgetharAcademy.tsx'
import { MaisaraCaverns } from './MaisaraCaverns.tsx'

export function Dungeons() {
  return (
    <div>
      <div className="sub-section flex flex-col mb-3">
        <p>
          This dungeon guide assumes you already know the mechanics of each boss. I will mostly
          write about what specifically you should be doing as a Mistweaver.
        </p>
        <AlgetharAcademy />
        <MaisaraCaverns />
      </div>
    </div>
  )
}
