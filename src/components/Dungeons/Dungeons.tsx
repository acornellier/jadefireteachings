import { OperationFloodgate } from './OperationFloodgate.tsx'
import { PrioryOfTheSacredFlame } from './PrioryOfTheSacredFlame.tsx'
import { HallsOfAtonement } from './HallsOfAtonement.tsx'
import { AraKara } from './AraKara.tsx'
import { Dawnbreaker } from './Dawnbreaker.tsx'
import { EcoDomeAldani } from './EcoDomeAldani.tsx'
import { Gambit } from './Gambit.tsx'
import { StreetsOfWonder } from './StreetsOfWonder.tsx'

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
      <AraKara />
      <Dawnbreaker />
      <EcoDomeAldani />
      <Gambit />
      <HallsOfAtonement />
      <OperationFloodgate />
      <PrioryOfTheSacredFlame />
      <StreetsOfWonder />
    </div>
  )
}
