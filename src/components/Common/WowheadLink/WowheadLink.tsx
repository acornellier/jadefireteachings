import type { ReactNode } from 'react'
import { ZamIcon } from '../ZamIcon.tsx'

export interface WowheadLinkProps {
  id: number
  icon: string
  children: ReactNode
  type: 'item' | 'spell'
}

export function WowheadLink({ id, icon, children, type }: WowheadLinkProps) {
  return (
    <a
      className="inline-flex text-[#ffdb32] whitespace-nowrap"
      href={`https://www.wowhead.com/${type}=${id}/`}
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
