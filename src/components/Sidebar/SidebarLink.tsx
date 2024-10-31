import { useCallback, useState } from 'react'
import { ChevronDownIcon, ChevronRightIcon } from '@heroicons/react/24/outline'

export interface SidebarLinkElement {
  element: HTMLElement
  childLinks: SidebarLinkElement[]
  label: string
  active: boolean
  headingType: 'h1' | 'h2' | 'h3'
}

interface Props {
  element: SidebarLinkElement
}

export const linkScrollOffset = 20

export function SidebarLink({ element: { childLinks, label, active, headingType } }: Props) {
  const activeFont = active ? 'font-bold text-teal-50' : 'text-teal-500'
  const fontSize = headingType === 'h3' ? 'text-sm' : ''
  const margin = headingType === 'h3' ? 'ml-8' : ''
  const collapsible = headingType !== 'h3'
  const noChildren = childLinks.length === 0

  const [collapsed, setCollapsed] = useState(collapsible)
  const ChevronIcon = collapsed ? ChevronRightIcon : ChevronDownIcon

  const onClick = useCallback(() => {
    const element = document.getElementById(label)
    if (element) {
      window.scrollTo({ top: element.offsetTop - linkScrollOffset, behavior: 'smooth' })
      history.pushState(null, '', `#${label}`)
    }
    setCollapsed(false)
  }, [label])

  const onCollapseClick = useCallback(() => {
    setCollapsed((val) => !val)
  }, [])

  return (
    <div id={`${label}-sidebar-link`}>
      <div className="flex gap-2 items-center">
        {collapsible && (
          <ChevronIcon
            height={16}
            className={`${noChildren ? 'invisible' : ' cursor-pointer'}`}
            onClick={onCollapseClick}
          />
        )}
        <div
          className={`cursor-pointer hover:underline ${activeFont} ${fontSize} ${margin}`}
          onClick={onClick}
        >
          {label}
        </div>
      </div>
      <div className="flex flex-col gap-1">
        {!collapsed && collapsible && (
          <>
            <div className="mt-0.5" />
            {childLinks.map((childLink) => (
              <SidebarLink key={childLink.label} element={childLink} />
            ))}
          </>
        )}
      </div>
    </div>
  )
}
