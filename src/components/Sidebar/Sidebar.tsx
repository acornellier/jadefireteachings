import { type Dispatch, type SetStateAction, useCallback, useEffect, useState } from 'react'
import { linkScrollOffset, SidebarLink, type SidebarLinkConfig } from './SidebarLink.tsx'
import { SidebarButton } from './SidebarButton.tsx'
import { useWindowEvent } from '../../util/hooks/useWindowEvent.ts'
import { useLocation } from 'react-router-dom'
import { acronymsRoute, advancedRoute, dungeonsRoute, guideRoute } from '../../routes.tsx'
import { PageLink } from './PageLink.tsx'
import { SidebarButtonMobile } from './SidebarButtonMobile.tsx'

interface SidebarProps {
  collapsed: boolean
  setCollapsed: Dispatch<SetStateAction<boolean>>
}

interface SidebarLinkElement extends Omit<SidebarLinkConfig, 'active' | 'childLinks'> {
  childLinks: SidebarLinkElement[]
  element: HTMLElement
}

function isHTMLElement(node: Node): node is HTMLElement {
  return node instanceof HTMLElement
}

export function Sidebar({ collapsed, setCollapsed }: SidebarProps) {
  const [links, setLinks] = useState<SidebarLinkElement[]>([])
  const [activeLink, setActiveLink] = useState<SidebarLinkElement | null>(null)

  const location = useLocation()

  const findActiveLink = useCallback((links: SidebarLinkElement[]) => {
    const flatLinks = links.flatMap((link) => [link, ...link.childLinks])
    let activeLink: SidebarLinkElement | null = null
    let bestTop = -Infinity
    for (const link of flatLinks.toReversed()) {
      if (!document.getElementById(`${link.label}-sidebar-link`)) continue
      const top = link.element.getBoundingClientRect().top - linkScrollOffset - 1
      if (top < 0 && top > bestTop) {
        activeLink = link
        bestTop = top
      }
    }

    setActiveLink(activeLink)
  }, [])

  const handleScroll = useCallback(() => {
    findActiveLink(links)
  }, [links, findActiveLink])

  useWindowEvent('scroll', handleScroll)

  useEffect(() => {
    const elements = Array.from(document.querySelectorAll('h1,h2,h3'))
      .filter(isHTMLElement)
      .map<SidebarLinkElement>((element) => ({
        element: element,
        id: element.id,
        label: element.innerHTML,
        headingType: element.tagName.toLowerCase() as 'h1' | 'h2' | 'h3',
        childLinks: [],
      }))

    const groupedElements: SidebarLinkElement[] = []
    for (const element of elements) {
      if (element.headingType === 'h3') {
        groupedElements[groupedElements.length - 1]!.childLinks.push(element)
      } else {
        groupedElements.push(element)
      }
    }

    setLinks(groupedElements)
    findActiveLink(groupedElements)
  }, [findActiveLink, location])

  const onCollapseXs = async () => {
    setCollapsed(false)
    const element = document.getElementById('toc')
    window.scrollTo({ top: element?.offsetTop ?? 0, behavior: 'smooth' })
  }

  const onCollapseMd = () => {
    setCollapsed((prev) => !prev)
  }

  const hiddenMedium = collapsed ? 'hidden' : ''

  const mapLink = (link: SidebarLinkElement): SidebarLinkConfig => ({
    ...link,
    active: link === activeLink,
    childLinks: link.childLinks?.map(mapLink),
  })

  const linkConfigs: SidebarLinkConfig[] = links.map(mapLink)

  return (
    <nav className="relative sidebar">
      <div className="sm:hidden fixed right-0 top-1/2 z-10">
        <SidebarButtonMobile onClick={onCollapseXs} />
      </div>
      <div className="hidden sm:block lg:hidden fixed left-0 top-16">
        <SidebarButton onClick={onCollapseMd} />
      </div>
      <a id="toc" />
      <div
        className={`w-full sm:w-52 sm:basis-32 flex flex-col items-start gap-2 sticky top-8 text-lg ${hiddenMedium} lg:flex`}
      >
        <PageLink label="Guide" route={guideRoute} />
        <PageLink label="Dungeon Guides" route={dungeonsRoute} />
        <PageLink label="Advanced Guides" route={advancedRoute} />
        <PageLink label="Acronyms" route={acronymsRoute} />
        <div className="w-full border-2 border-teal-700 rounded my-2" />
        {linkConfigs.map(({ label, id, headingType, active, childLinks }) => (
          <SidebarLink
            key={label}
            id={id}
            label={label}
            headingType={headingType}
            active={active}
            childLinks={childLinks}
          />
        ))}
      </div>
    </nav>
  )
}
