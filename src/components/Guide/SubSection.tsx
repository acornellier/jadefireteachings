import { Header } from '../Common/Header.tsx'
import type { ReactNode } from 'react'

interface Props {
  title: string
  children: ReactNode
}

export function SubSection({ title, children }: Props) {
  return (
    <>
      <Header Tag="h3" className="mb-3">
        {title}
      </Header>
      <div className="sub-section flex flex-col mb-3">{children}</div>
    </>
  )
}
