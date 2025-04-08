import type { RouteProps } from 'react-router-dom'
import { Guide } from './components/Guide.tsx'
import { Dungeons } from './components/Dungeons/Dungeons.tsx'
import { Advanced } from './components/Advanced/Advanced.tsx'

export const guideRoute: RouteProps = {
  index: true,
  element: <Guide />,
}

export const dungeonsRoute: RouteProps = {
  path: 'dungeons',
  element: <Dungeons />,
}

export const advancedRoute: RouteProps = {
  path: 'advanced',
  element: <Advanced />,
}

export const routes = [guideRoute, dungeonsRoute, advancedRoute]
