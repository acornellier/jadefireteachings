import { useCallback, useState } from 'react'
import { ChevronDownIcon, ChevronRightIcon } from '@heroicons/react/24/outline'
import { useNavigate } from 'react-router-dom'

export interface SidebarLinkConfig {
  childLinks?: SidebarLinkConfig[]
  label: string
  link?: string
  active: boolean
  headingType: 'page' | 'h1' | 'h2' | 'h3'
}

export const linkScrollOffset = 20

export function SidebarLink({ childLinks, label, link, active, headingType }: SidebarLinkConfig) {
  const navigate = useNavigate()

  const activeFont = active ? 'font-bold text-teal-50' : 'text-teal-500'
  const fontSize = headingType === 'h3' ? 'text-sm' : ''
  const margin = headingType === 'h3' ? 'ml-2' : ''
  const collapsible = childLinks !== undefined && childLinks.length > 0

  const [collapsed, setCollapsed] = useState(collapsible)
  const ChevronIcon = collapsed ? ChevronRightIcon : ChevronDownIcon

  const onClick = useCallback(() => {
    if (headingType === 'page') {
      navigate(`/${link}`)
    } else {
      const element = document.getElementById(label)
      if (element) {
        window.scrollTo({ top: element.offsetTop - linkScrollOffset, behavior: 'smooth' })
        history.pushState(null, '', `#${label}`)
      }
      setCollapsed(false)
    }
  }, [headingType, label, link, navigate])

  const onCollapseClick = useCallback(() => {
    setCollapsed((val) => !val)
  }, [])

  return (
    <div id={`${label}-sidebar-link`}>
      <div className="flex gap-2 items-center">
        <ChevronIcon
          height={16}
          className={`${collapsible ? 'cursor-pointer' : 'invisible'}`}
          onClick={onCollapseClick}
        />
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
            {childLinks?.map((childLink) => <SidebarLink key={childLink.label} {...childLink} />)}
          </>
        )}
      </div>
    </div>
  )
}
