import { WowheadLink } from './WowheadLink.tsx'

export function makeWL(name: string, id: number, icon: string) {
  const NewLink = () => (
    <WowheadLink id={id} icon={icon}>
      {name}
    </WowheadLink>
  )
  NewLink.displayName = name
  return NewLink
}
