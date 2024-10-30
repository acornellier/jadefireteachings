import { type Dispatch, type SetStateAction, useCallback, useEffect, useState } from 'react'
import { linkScrollOffset, SidebarLink, type SidebarLinkElement } from './SidebarLink.tsx'
import { SidebarButton } from './SidebarButton.tsx'
import { useWindowEvent } from '../../util/hooks/useWindowEvent.ts'

interface SidebarProps {
  collapsed: boolean
  setCollapsed: Dispatch<SetStateAction<boolean>>
}

function isHTMLElement(node: Node): node is HTMLElement {
  return node instanceof HTMLElement
}

export function Sidebar({ collapsed, setCollapsed }: SidebarProps) {
  const [links, setLinks] = useState<SidebarLinkElement[]>([])

  useEffect(() => {
    const elements = Array.from(document.querySelectorAll('h1,h2,h3'))
      .filter(isHTMLElement)
      .map<SidebarLinkElement>((element) => ({
        element: element,
        active: false,
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
  }, [])

  const handleScroll = useCallback(() => {
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
    console.log(activeLink)
    console.log(bestTop)
    const mapLink = (link: SidebarLinkElement): SidebarLinkElement => ({
      ...link,
      active: link === activeLink,
      childLinks: link.childLinks.map(mapLink),
    })
    setLinks(links.map(mapLink))
  }, [links])

  useWindowEvent('scroll', handleScroll)

  const onClickXs = async () => {
    setCollapsed(false)
    const element = document.getElementById('toc')
    window.scrollTo({ top: element?.offsetTop ?? 0, behavior: 'smooth' })
  }

  const onClickMd = () => {
    setCollapsed((prev) => !prev)
  }

  const hiddenMedium = collapsed ? 'hidden' : ''

  return (
    <div className="w-full sm:w-auto whitespace-nowrap relative">
      <div className="sm:hidden fixed left-0 top-1/2">
        <SidebarButton onClick={onClickXs} />
      </div>
      <div className="hidden sm:block lg:hidden fixed left-0 top-16">
        <SidebarButton onClick={onClickMd} />
      </div>
      <a id="toc" />
      <div
        className={`flex flex-col items-start gap-2 sticky top-8 text-lg ${hiddenMedium} lg:flex`}
      >
        {links.map((element) => (
          <SidebarLink key={element.label} element={element} />
        ))}
      </div>
    </div>
  )
}
