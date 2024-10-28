import { useCallback } from 'react'

export interface SidebarLinkProps {
  label: string
  active: boolean
  headingType: 'h2' | 'h3'
}

export function SidebarLink({ label, active, headingType }: SidebarLinkProps) {
  const activeFont = active ? 'font-bold' : ''
  const fontSize = headingType === 'h3' ? 'text-sm' : ''
  const margin = headingType === 'h3' ? 'ml-4' : ''

  const onClick = useCallback(() => {
    const element = document.getElementById(label)
    if (element) window.scrollTo({ top: element.offsetTop - 20, behavior: 'smooth' })
  }, [label])

  return (
    <div
      className={`cursor-pointer hover:underline text-teal-300 ${activeFont} ${fontSize} ${margin}`}
      onClick={onClick}
    >
      {label}
    </div>
  )
}
