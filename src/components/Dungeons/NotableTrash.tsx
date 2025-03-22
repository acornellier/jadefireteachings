import type { ReactNode } from 'react'
import { SubSection } from '../Guide/SubSection.tsx'

interface Props {
  children?: ReactNode
}

export function NotableTrash({ children }: Props) {
  return <SubSection title="Notable Trash">{children}</SubSection>
}
