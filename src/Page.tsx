import { ExclamationTriangleIcon } from '@heroicons/react/24/outline'
import { Link } from './components/Common/Link.tsx'
import { Sidebar } from './components/Sidebar/Sidebar.tsx'
import { Gameplay } from './components/Gameplay.tsx'
import { Gear } from './components/Gear.tsx'
import { UserInterface } from './components/UserInterface/UserInterface.tsx'
import { useState } from 'react'
import { Macros } from './components/Macros.tsx'

export const pageTitle = 'Jadefire Teachings'

const googleDoc =
  'https://docs.google.com/document/d/1fFC95V4bhrsPjyD3D-jxu-Map0R4jfAaQBQmEsedpFA/edit?usp=sharing'

export function Page() {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(true)

  return (
    <>
      <div className="flex flex-col text-center">
        <h1 id={pageTitle} className="text-6xl font-serif font-bold text-teal-500">
          {pageTitle}
        </h1>
        <div className="text-3xl font-serif font-bold text-teal-500">by Ortemis</div>
      </div>
      <div className="text-4xl text-center text-red-400 font-serif">
        <ExclamationTriangleIcon height={48} className="inline-block" /> WEBSITE IS WIP
      </div>
      <Link href={googleDoc} className="text-4xl text-center" target="_blank">
        Link to Google Doc
      </Link>
      <div className="flex sm:gap-4 flex-col sm:flex-row">
        <Sidebar collapsed={sidebarCollapsed} setCollapsed={setSidebarCollapsed} />
        <div className={`flex flex-col gap-4`}>
          <p>
            This guide will teach you everything about playing Mistweaver in Mythic+. For now, I
            have compiled my guide into a <Link href={googleDoc}>Google Doc</Link>. Eventually,
            everything will be available right here, organized into pages with links, icons, etc.
          </p>
          <Gameplay />
          <Macros />
          <Gear />
          <UserInterface />
        </div>
      </div>
      {/*<TwitchStream/>*/}
      <div className="mb-24" />
    </>
  )
}
