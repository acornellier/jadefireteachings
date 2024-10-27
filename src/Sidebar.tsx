import { type Dispatch, type SetStateAction, useCallback, useEffect, useState } from 'react'
import { Bars3Icon } from '@heroicons/react/24/outline'
import { Button } from './components/Common/Button.tsx'

interface SidebarLinkProps {
  label: string
  headingType: 'h2' | 'h3'
}

function SidebarLink({ label, headingType }: SidebarLinkProps) {
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

  return (
    <>
      <div className="lg:hidden fixed left-0 top-16">
        <Button
          twoDimensional
          Icon={Bars3Icon}
          iconSize={18}
          onClick={() => setCollapsed((prev) => !prev)}
          style={{
            height: 48,
            padding: `12px 4px 12px 8px`,
            borderTopLeftRadius: 0,
            borderBottomLeftRadius: 0,
          }}
        />
      </div>
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
