import { Header } from '../Common/Header.tsx'
import type { ReactNode } from 'react'

interface Props {
  title: ReactNode
  children: ReactNode | string
  extras?: ReactNode
}

export function SubSubSection({ title, extras, children }: Props) {
  return (
    <>
      <Header Tag="h4" id={title!.toString()} className="mb-3">
        {title}
      </Header>
      {extras}
      <div className="sub-section flex flex-col mb-3">{children}</div>
    </>
  )
}
