import { type Dispatch, type SetStateAction, useEffect, useState } from 'react'
import { SidebarLink, type SidebarLinkProps } from './SidebarLink.tsx'
import { SidebarButton } from './SidebarButton.tsx'

interface SidebarProps {
  collapsed: boolean
  setCollapsed: Dispatch<SetStateAction<boolean>>
}

export function Sidebar({ collapsed, setCollapsed }: SidebarProps) {
  const [headers, setHeaders] = useState<SidebarLinkProps[]>([])

  const hiddenMedium = collapsed ? 'hidden' : ''

  useEffect(() => {
    const found: SidebarLinkProps[] = []
    for (const node of document.querySelectorAll('h2,h3')) {
      found.push({ label: node.innerHTML, headingType: node.tagName.toLowerCase() as 'h2' | 'h3' })
    }
    setHeaders(found)
  }, [])

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
          <SidebarLink label="Jadefire Teachings" headingType="h2" />
          {headers.map(({ label, ...props }) => (
            <SidebarLink key={label} label={label} {...props} />
          ))}
        </div>
      </div>
    </>
  )
}
