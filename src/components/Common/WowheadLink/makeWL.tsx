import { WowheadLink, type WowheadLinkProps } from './WowheadLink.tsx'

export function makeWL(name: string, id: number, icon: string, type: WowheadLinkProps['type']) {
  const NewLink = () => (
    <WowheadLink id={id} icon={icon} type={type}>
      {name}
    </WowheadLink>
  )
  NewLink.displayName = name
  return NewLink
}

export function makeSpell(name: string, id: number, icon: string) {
  return makeWL(name, id, icon, 'spell')
}

export function makeItem(name: string, id: number, icon: string) {
  return makeWL(name, id, icon, 'item')
}
