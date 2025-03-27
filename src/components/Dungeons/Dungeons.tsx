import { TheRookery } from './TheRookery.tsx'
import { TheaterOfPain } from './TheaterOfPain.tsx'
import { MechagonWorkshop } from './MechagonWorkshop.tsx'
import { DarkflameCleft } from './DarkflameCleft.tsx'
import { OperationFloodgate } from './OperationFloodgate.tsx'
import { CinderbrewMeadery } from './CinderbrewMeadery.tsx'
import { TheMotherlode } from './TheMotherlode.tsx'
import { PrioryOfTheSacredFlame } from './PrioryOfTheSacredFlame.tsx'
import {
  GiftOfTheCelestials,
  JadeBond,
  ShaohaosLessons,
  VeilOfPride,
} from '../Common/WowheadLink/Spells.tsx'

export function Dungeons() {
  return (
    <div>
      <div className="sub-section flex flex-col mb-3">
        <p>
          This dungeon guide assumes you already know the mechanics of each boss. I will mostly
          write about what specifically you should be doing as a Mistweaver.
        </p>
        <p>
          IMPORTANT NOTE: For beginners, I recommend starting off with <GiftOfTheCelestials /> and{' '}
          <VeilOfPride /> in every dungeon. If you find yourself not needing so much coverage,{' '}
          <i>then</i> consider <JadeBond />, and dropping <VeilOfPride /> for <ShaohaosLessons />.
        </p>
        {/*<p>*/}
        {/*  For some bosses I have shared my MRT reminders note. To import, go to MRT {'>'} Reminders{' '}*/}
        {/*  {'>'} Global {'>'} Import*/}
        {/*</p>*/}
      </div>
      <CinderbrewMeadery />
      <DarkflameCleft />
      <MechagonWorkshop />
      <TheMotherlode />
      <OperationFloodgate />
      <PrioryOfTheSacredFlame />
      <TheRookery />
      <TheaterOfPain />
    </div>
  )
}
