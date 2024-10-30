import { ToastProvider } from './components/Common/Toasts/ToastProvider.tsx'
import { Toasts } from './components/Common/Toasts/Toasts.tsx'
import { TailwindBreakpoint } from './components/Common/TailwindBreakpoint.tsx'
import { Guide } from './components/Guide.tsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { AppHeader } from './components/AppHeader.tsx'
import { Footer } from './components/Footer.tsx'
import { Sidebar } from './components/Sidebar/Sidebar.tsx'
import { useState } from 'react'

// Be sure to update vercel.json when changing routes
const router = createBrowserRouter([
  {
    path: '/',
    element: <Guide />,
  },
  {
    path: '/foo',
    element: <div>hello :)</div>,
  },
])

export function App() {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(true)

  return (
    <ToastProvider>
      <div className="flex justify-center px-4 lg:px-0">
        <main className="min-h-screen py-4 flex flex-col gap-4 md:w-[765px] lg:w-[1075px]">
          <AppHeader />
          <div className="flex sm:gap-4 flex-col sm:flex-row">
            <Sidebar collapsed={sidebarCollapsed} setCollapsed={setSidebarCollapsed} />
            <RouterProvider router={router} />
          </div>
          <Footer />
          {/*<TwitchStream/>*/}
          <div className="mb-24" />
        </main>
      </div>
      <TailwindBreakpoint />
      <Toasts />
    </ToastProvider>
  )
}
