import type { ReactNode } from 'react'
import { SubSection } from '../Guide/SubSection.tsx'

interface Props {
  children?: ReactNode
}

export function TrashSubSection({ children }: Props) {
  return <SubSection title="Double diffuser">{children}</SubSection>
}
