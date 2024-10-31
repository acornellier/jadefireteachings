import { Header } from '../Common/Header.tsx'
import type { ReactNode } from 'react'

interface Props {
  title: string
  children?: ReactNode
}

export function Section({ title, children }: Props) {
  return (
    <div className="section">
      <div className="my-1">
        <Header Tag="h2">{title}</Header>
        <div className="border-2 border-teal-700 rounded mt-1" />
      </div>
      {children}
    </div>
  )
}
