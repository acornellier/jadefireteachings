import { type Dispatch, type SetStateAction, useCallback, useEffect, useState } from 'react'
import { SidebarLink, type SidebarLinkProps } from './SidebarLink.tsx'
import { SidebarButton } from './SidebarButton.tsx'
import { useWindowEvent } from '../../util/hooks/useWindowEvent.ts'

interface SidebarProps {
  collapsed: boolean
  setCollapsed: Dispatch<SetStateAction<boolean>>
}

interface SidebarLinkElement extends SidebarLinkProps {
  element: HTMLElement
}

function isHTMLElement(node: Node): node is HTMLElement {
  return node instanceof HTMLElement
}

export function Sidebar({ collapsed, setCollapsed }: SidebarProps) {
  const [links, setLinks] = useState<SidebarLinkElement[]>([])

  const hiddenMedium = collapsed ? 'hidden' : ''

  useEffect(() => {
    setLinks(
      Array.from(document.querySelectorAll('h2,h3'))
        .filter(isHTMLElement)
        .map<SidebarLinkElement>((element) => ({
          element: element,
          active: false,
          label: element.innerHTML,
          headingType: element.tagName.toLowerCase() as 'h2' | 'h3',
        })),
    )
  }, [])

  const handleScroll = useCallback(() => {
    const activeLink = links.find(({ element }) => element.getBoundingClientRect().top > 0)
    setLinks(
      links.map((link) => ({
        ...link,
        active: link === activeLink,
      })),
    )
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

  return (
    <>
      <div className="sm:hidden fixed left-0 top-1/2">
        <SidebarButton onClick={onClickXs} />
      </div>
      <div className="hidden sm:block lg:hidden fixed left-0 top-16">
        <SidebarButton onClick={onClickMd} />
      </div>
      <a id="toc" />
      <div className={`w-full sm:w-auto whitespace-nowrap pr-4 relative ${hiddenMedium} lg:block`}>
        <div className="flex flex-col items-center sm:items-start gap-2 sticky top-8 text-lg">
          <SidebarLink label="Jadefire Teachings" active={false} headingType="h2" />
          {links.map(({ label, active, headingType }) => (
            <SidebarLink key={label} active={active} label={label} headingType={headingType} />
          ))}
        </div>
      </div>
    </>
  )
}
