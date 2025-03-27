import { Header } from '../Common/Header.tsx'
import type { ReactNode } from 'react'

export interface SectionProps {
  title: string
  children?: ReactNode
}

export function Section({ title, children }: SectionProps) {
  return (
    <div className="section">
      <div className="my-1">
        <Header Tag="h2" id={title}>
          {title}
        </Header>
        <div className="border-2 border-teal-700 rounded mt-1" />
      </div>
      {children}
    </div>
  )
}
