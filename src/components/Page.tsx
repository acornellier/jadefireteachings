import { Sidebar } from './Sidebar/Sidebar.tsx'
import { Gameplay } from './Guide/Gameplay/Gameplay.tsx'
import { Gear } from './Guide/Gear.tsx'
import { UserInterface } from './Guide/UserInterface/UserInterface.tsx'
import { useState } from 'react'
import { Macros } from './Guide/Macros.tsx'
import { Talents } from './Guide/Talents.tsx'
import { Links } from './Links.tsx'
import { Footer } from './Footer.tsx'
import { OtherLinks } from './OtherLinks.tsx'
import { Introduction } from './Introduction.tsx'

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
        <div className="flex flex-col">
          <Introduction />
          <Links />
          <Gameplay />
          <Talents />
          <Macros />
          <Gear />
          <UserInterface />
          <OtherLinks />
        </div>
      </div>
      <Footer />
      {/*<TwitchStream/>*/}
      <div className="mb-24" />
    </>
  )
}
