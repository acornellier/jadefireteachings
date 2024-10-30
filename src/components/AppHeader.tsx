import { pageTitle } from './Guide.tsx'

export function AppHeader() {
  return (
    <div className="flex flex-col text-center mb-4">
      <h1 id={pageTitle} className="text-6xl font-serif font-bold text-teal-500">
        {pageTitle}
      </h1>
      <div className="text-3xl font-serif font-bold text-teal-500">by Ortemis</div>
    </div>
  )
}
