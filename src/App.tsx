import { Profiles } from './components/Profiles.tsx'
import { Link } from './components/Common/Link.tsx'

const googleDoc =
  'https://docs.google.com/document/d/1fFC95V4bhrsPjyD3D-jxu-Map0R4jfAaQBQmEsedpFA/edit?usp=sharing'

export function App() {
  return (
    <div className="flex justify-center px-4 lg:px-0">
      <main className="min-h-screen py-4 flex flex-col gap-4 md:w-[765px] lg:w-[1075px]">
        <div className="flex flex-col text-center">
          <h1 className="text-6xl font-bold text-teal-500">Jadefire Teachings</h1>
          <div className="text-4xl font-bold text-teal-500">by Ortemis</div>
        </div>
        <div className="text-4xl text-center text-red-400">WEBSITE IS WIP</div>
        <Link href={googleDoc} className="text-4xl text-center">
          Link to Google Doc
        </Link>
        <p>
          This guide will teach you everything about playing Mistweaver in Mythic+. For now, I have
          compiled my guide into a <Link href={googleDoc}>Google Doc</Link>. Eventually, everything
          will be available right here, organized into pages with links, icons, etc.
        </p>
        <Profiles />
        {/*<TwitchStream/>*/}
      </main>
    </div>
  )
}
