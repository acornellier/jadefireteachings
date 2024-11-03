import { AraKara } from './AraKara.tsx'
import { CityOfThreads } from './CityOfThreads.tsx'
import { Dawnbreaker } from './Dawnbreaker.tsx'
import { GrimBatol } from './GrimBatol.tsx'
import { MistsOfTirnaScithe } from './MistsOfTirnaScithe.tsx'
import { NecroticWake } from './NecroticWake.tsx'
import { SiegeOfBoralus } from './SiegeOfBoralus.tsx'
import { Stonevault } from './Stonevault.tsx'

export function Dungeons() {
  return (
    <div>
      <p>
        This dungeon guide assumes you already know the mechanics of each boss. I will mostly write
        about what specifically you should be doing as a Mistweaver.
      </p>
      <AraKara />
      <CityOfThreads />
      <Dawnbreaker />
      <GrimBatol />
      <MistsOfTirnaScithe />
      <NecroticWake />
      <SiegeOfBoralus />
      <Stonevault />
    </div>
  )
}
