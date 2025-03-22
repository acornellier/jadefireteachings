import { TheRookery } from './TheRookery.tsx'

export function Dungeons() {
  return (
    <div>
      <div className="sub-section flex flex-col mb-3">
        <p>
          This dungeon guide assumes you already know the mechanics of each boss. I will mostly
          write about what specifically you should be doing as a Mistweaver.
        </p>
        <div className="w-full flex justify-center">
          <div className="text-3xl font-serif font-bold text-teal-500">
            Season 2 guides are a WIP
          </div>
        </div>
        {/*<p>*/}
        {/*  For some bosses I have shared my MRT reminders note. To import, go to MRT {'>'} Reminders{' '}*/}
        {/*  {'>'} Global {'>'} Import*/}
        {/*</p>*/}
      </div>
      <TheRookery />
    </div>
  )
}
