import { useCallback } from 'react'

export interface SidebarLinkProps {
  label: string
  headingType: 'h2' | 'h3'
}

export function SidebarLink({ label, headingType }: SidebarLinkProps) {
  const fontSize = headingType === 'h3' ? 'text-sm' : ''
  const margin = headingType === 'h3' ? 'ml-4' : ''

  const onClick = useCallback(() => {
    const element = document.getElementById(label)
    if (element) window.scrollTo({ top: element.offsetTop - 20, behavior: 'smooth' })
  }, [label])

  return (
    <div
      className={`cursor-pointer hover:underline text-teal-300 ${fontSize} ${margin}`}
      onClick={onClick}
    >
      {label}
    </div>
  )
}
