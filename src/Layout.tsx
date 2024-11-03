import { Toasts } from './components/Common/Toasts/Toasts.tsx'
import { TailwindBreakpoint } from './components/Common/TailwindBreakpoint.tsx'
import { Outlet, useLocation } from 'react-router-dom'
import { AppHeader } from './components/AppHeader.tsx'
import { Footer } from './components/Footer.tsx'
import { Sidebar } from './components/Sidebar/Sidebar.tsx'
import { useEffect, useState } from 'react'

function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return null
}

export function Layout() {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(true)

  const sidebarSpacing = sidebarCollapsed ? 'lg:gap-4' : 'gap-4'

  return (
    <>
      <div className="flex justify-center px-4">
        <main className="min-h-screen py-4 flex flex-col gap-4 md:w-[765px] lg:w-[1075px]">
          <AppHeader />
          <div className={`flex flex-col sm:flex-row ${sidebarSpacing}`}>
            <Sidebar collapsed={sidebarCollapsed} setCollapsed={setSidebarCollapsed} />
            <Outlet />
          </div>
          <Footer />
          <div className="mb-24" />
        </main>
      </div>
      <TailwindBreakpoint />
      <Toasts />
      <ScrollToTop />
    </>
  )
}
