import type { RouteProps } from 'react-router-dom'
import { Guide } from './components/Guide/Guide.tsx'
import { Dungeons } from './components/Dungeons/Dungeons.tsx'
import { Acronyms } from './components/Acronyms/Acronyms.tsx'

export const guideRoute: RouteProps = {
  index: true,
  element: <Guide />,
}

export const dungeonsRoute: RouteProps = {
  path: 'dungeons',
  element: <Dungeons />,
}

export const acronymsRoute: RouteProps = {
  path: 'acronyms',
  element: <Acronyms />,
}

export const routes = [guideRoute, dungeonsRoute, acronymsRoute]
