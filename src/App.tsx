import { Link } from './components/Common/Link.tsx'
import { ToastProvider } from './components/Common/Toasts/ToastProvider.tsx'
import { Toasts } from './components/Common/Toasts/Toasts.tsx'
import { TailwindBreakpoint } from './components/Common/TailwindBreakpoint.tsx'
import { UserInterface } from './components/UserInterface.tsx'
import { Gameplay } from './components/Gameplay.tsx'
import { Sidebar } from './Sidebar.tsx'
import { ExclamationTriangleIcon } from '@heroicons/react/24/outline'

const googleDoc =
  'https://docs.google.com/document/d/1fFC95V4bhrsPjyD3D-jxu-Map0R4jfAaQBQmEsedpFA/edit?usp=sharing'

export function App() {
  return (
    <ToastProvider>
      <div className="flex justify-center px-4 lg:px-0">
        <main className="min-h-screen py-4 flex flex-col gap-4 md:w-[765px] lg:w-[1075px]">
          <div className="flex flex-col text-center">
            <h1 className="text-6xl font-serif font-bold text-teal-500">Jadefire Teachings</h1>
            <div className="text-3xl font-serif font-bold text-teal-500">by Ortemis</div>
          </div>
          <div className="text-4xl text-center text-red-400 font-serif">
            <ExclamationTriangleIcon height={48} className="inline-block" /> WEBSITE IS WIP
          </div>
          <Link href={googleDoc} className="text-4xl text-center">
            Link to Google Doc
          </Link>
          <div className="flex gap-4">
            <Sidebar />
            <div className="flex flex-col gap-4">
              <p>
                This guide will teach you everything about playing Mistweaver in Mythic+. For now, I
                have compiled my guide into a <Link href={googleDoc}>Google Doc</Link>. Eventually,
                everything will be available right here, organized into pages with links, icons,
                etc.
              </p>
              <Gameplay />
              <UserInterface />
            </div>
          </div>
          {/*<TwitchStream/>*/}
          <div className="mb-24" />
        </main>
      </div>
      <TailwindBreakpoint />
      <Toasts />
    </ToastProvider>
  )
}
