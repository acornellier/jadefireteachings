import type { ReactNode } from 'react'
import { ZamIcon } from '../ZamIcon.tsx'

interface Props {
  id: number
  icon: string
  children: ReactNode
}

export function WowheadLink({ id, icon, children }: Props) {
  return (
    <a
      className="inline-flex text-[#ffd100] whitespace-nowrap"
      href={`https://www.wowhead.com/spell=${id}/`}
    >
      <ZamIcon
        size={16}
        icon={icon}
        alt={icon}
        className="self-center inline-block mr-0.5 rounded-sm border-[0.5px] border-gray-500"
      />
      <span className="self-baseline">{children}</span>
    </a>
  )
}
