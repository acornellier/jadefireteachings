import { Header } from '../Common/Header.tsx'
import type { ReactNode } from 'react'

interface Props {
  title: string
  children?: ReactNode
  extras?: ReactNode
}

export function SubSection({ title, extras, children }: Props) {
  return (
    <>
      <Header Tag="h3" className="mb-3">
        {title}
      </Header>
      {extras}
      <div className="sub-section flex flex-col mb-3">{children}</div>
    </>
  )
}
