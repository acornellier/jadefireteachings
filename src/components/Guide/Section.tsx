import { Header } from '../Common/Header.tsx'
import type { ReactNode } from 'react'

interface Props {
  title: string
  children: ReactNode
}

export function Section({ title, children }: Props) {
  return (
    <>
      <div className="border border-teal-700 mb-3" />
      <Header Tag="h2" className="mb-2">
        {title}
      </Header>
      <div className="section flex flex-col mb-3">{children}</div>
    </>
  )
}
