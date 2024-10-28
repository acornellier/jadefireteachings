import { Sidebar } from './Sidebar/Sidebar.tsx'
import { Gameplay } from './Guide/Gameplay.tsx'
import { Gear } from './Guide/Gear.tsx'
import { UserInterface } from './Guide/UserInterface/UserInterface.tsx'
import { useState } from 'react'
import { Macros } from './Guide/Macros.tsx'
import { Talents } from './Guide/Talents.tsx'
import { Link } from './Common/Link.tsx'
import { Links } from './Links.tsx'
import { Footer } from './Footer.tsx'

export const pageTitle = 'Jadefire Teachings'

export function Page() {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(true)

  return (
    <>
      <div className="flex flex-col text-center mb-4">
        <h1 id={pageTitle} className="text-6xl font-serif font-bold text-teal-500">
          {pageTitle}
        </h1>
        <div className="text-3xl font-serif font-bold text-teal-500">by Ortemis</div>
      </div>
      <div className="flex sm:gap-4 flex-col sm:flex-row">
        <Sidebar collapsed={sidebarCollapsed} setCollapsed={setSidebarCollapsed} />
        <div className={`flex flex-col gap-4`}>
          <p>
            Jadefire Teachings will teach you everything about playing Mistweaver in Mythic+, from
            gameplay, to build, to consumables.
          </p>
          <p>
            I am Ortemis, and I am usually (when not on vacation) the rank 1 mistweaver in M+. I am
            also the developer of <Link href="https://not-even-close.com/">Not Even Close</Link> and{' '}
            <Link href="https://threechest.io/">Threechest</Link>.
          </p>
          <p>
            All my websites, content, UI, and VODs are free and ad-free, other than embedding my own
            stream. Enjoy!
          </p>
          <Links />
          <Gameplay />
          <Talents />
          <Macros />
          <Gear />
          <UserInterface />
        </div>
      </div>
      <Footer />
      {/*<TwitchStream/>*/}
      <div className="mb-24" />
    </>
  )
}
