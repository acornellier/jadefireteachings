import { type RouteProps, useMatch, useResolvedPath } from 'react-router-dom'
import { SidebarLink } from './SidebarLink.tsx'

interface Props {
  label: string
  route: RouteProps
}

export function PageLink({ label, route }: Props) {
  const link = route.index ? '' : `${route.path}`
  const resolved = useResolvedPath(link)
  const match = useMatch({ path: resolved.pathname, end: true })

  return <SidebarLink id={label} label={label} link={link} active={!!match} headingType="page" />
}
