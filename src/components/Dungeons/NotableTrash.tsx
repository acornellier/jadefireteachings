import type { ReactNode } from 'react'
import { SubSection } from '../Guide/SubSection.tsx'

interface Props {
  dungeon: string
  children?: ReactNode
}

export function NotableTrash({ children, dungeon }: Props) {
  return (
    <SubSection title="Notable Trash" id={`${dungeon}-notable-trash`}>
      {children}
    </SubSection>
  )
}
