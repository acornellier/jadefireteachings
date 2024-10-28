import { ToastProvider } from './components/Common/Toasts/ToastProvider.tsx'
import { Toasts } from './components/Common/Toasts/Toasts.tsx'
import { TailwindBreakpoint } from './components/Common/TailwindBreakpoint.tsx'
import { Page } from './components/Page.tsx'

export function App() {
  return (
    <ToastProvider>
      <div className="flex justify-center px-4 lg:px-0">
        <main className="min-h-screen py-4 flex flex-col gap-4 md:w-[765px] lg:w-[1075px]">
          <Page />
        </main>
      </div>
      <TailwindBreakpoint />
      <Toasts />
    </ToastProvider>
  )
}
