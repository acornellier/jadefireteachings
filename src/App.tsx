import { ToastProvider } from './components/Common/Toasts/ToastProvider.tsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Layout } from './Layout.tsx'
import { routes } from './routes.tsx'

export function App() {
  return (
    <BrowserRouter>
      <ToastProvider>
        <Routes>
          <Route path="/" element={<Layout />}>
            {routes.map((routeProps, idx) => (
              <Route key={idx} {...routeProps} />
            ))}
          </Route>
        </Routes>
      </ToastProvider>
    </BrowserRouter>
  )
}
